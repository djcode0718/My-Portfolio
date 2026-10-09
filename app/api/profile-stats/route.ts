import { NextResponse } from "next/server";

export interface ProfileStatsResponse {
  github: {
    publicRepos: number;
    followers: number;
    username: string;
    url: string;
    status: "live" | "cached" | "fallback";
  };
  leetcode: {
    totalSolved: number;
    username: string;
    url: string;
    status: "live" | "cached" | "fallback";
  };
  hackerrank: {
    username: string;
    verifiedSkills: string[];
    url: string;
    status: "verified";
  };
  lastUpdated: string;
}

export async function GET() {
  const fallbackData: ProfileStatsResponse = {
    github: {
      publicRepos: 10,
      followers: 2,
      username: "djcode0718",
      url: "https://github.com/djcode0718",
      status: "fallback",
    },
    leetcode: {
      totalSolved: 250,
      username: "sj0718",
      url: "https://leetcode.com/u/sj0718/",
      status: "fallback",
    },
    hackerrank: {
      username: "23211a66f8",
      verifiedSkills: ["Problem Solving", "Python", "SQL"],
      url: "https://www.hackerrank.com/profile/23211a66f8",
      status: "verified",
    },
    lastUpdated: new Date().toISOString(),
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3500);

  try {
    // 1. Fetch GitHub public data
    const ghPromise = fetch("https://api.github.com/users/djcode0718", {
      headers: {
        "User-Agent": "Portfolio-Stats-Fetcher",
        Accept: "application/vnd.github.v3+json",
      },
      signal: controller.signal,
      next: { revalidate: 3600 },
    })
      .then(async (res) => {
        if (!res.ok) return null;
        const data = await res.json();
        return {
          publicRepos: data.public_repos ?? 10,
          followers: data.followers ?? 2,
          username: "djcode0718",
          url: "https://github.com/djcode0718",
          status: "live" as const,
        };
      })
      .catch(() => null);

    // 2. Fetch LeetCode public solved count
    const lcPromise = fetch("https://leetcode-stats-api.herokuapp.com/sj0718", {
      headers: { "User-Agent": "Portfolio-Stats-Fetcher" },
      signal: controller.signal,
      next: { revalidate: 3600 },
    })
      .then(async (res) => {
        if (!res.ok) return null;
        const data = await res.json();
        if (data.status === "success" && typeof data.totalSolved === "number") {
          return {
            totalSolved: Math.max(data.totalSolved, 250),
            username: "sj0718",
            url: "https://leetcode.com/u/sj0718/",
            status: "live" as const,
          };
        }
        return null;
      })
      .catch(() => null);

    const [ghResult, lcResult] = await Promise.all([ghPromise, lcPromise]);
    clearTimeout(timeoutId);

    const result: ProfileStatsResponse = {
      github: ghResult || fallbackData.github,
      leetcode: lcResult || fallbackData.leetcode,
      hackerrank: fallbackData.hackerrank,
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(result, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    clearTimeout(timeoutId);
    return NextResponse.json(fallbackData, {
      headers: {
        "Cache-Control": "public, s-maxage=300",
      },
    });
  }
}
