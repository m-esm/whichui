import { FC, useState, useEffect } from "react";
import { frameworkDetails } from "whichui/lib/data";

interface GitHubStats {
  stars: number;
  issues: number;
  forks: number;
  watchers: number;
}
export const GitHubStatsComponent: FC<{ framework: string; repoUrl: string }> = ({
  repoUrl,
  framework,
}) => {
  const [stats, setStats] = useState<GitHubStats | null>(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      const repoPath = repoUrl.replace("https://github.com/", "");
      const apiUrl = `https://api.github.com/repos/${repoPath}`;
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setStats({
          forks:
            data.forks_count > 1000
              ? (data.forks_count / 1000).toFixed(1) + "k"
              : data.forks_count,
          issues:
            data.open_issues_count > 1000
              ? (data.open_issues_count / 1000).toFixed(1) + "k"
              : data.open_issues_count,
          stars:
            data.stargazers_count > 1000
              ? (data.stargazers_count / 1000).toFixed(1) + "k"
              : data.stargazers_count,
          watchers:
            data.watchers_count > 1000
              ? (data.watchers_count / 1000).toFixed(1) + "k"
              : data.watchers_count,
        });
      } catch (error) {
        console.error("Failed to fetch GitHub stats", error);
        setStats(null);
      }
    };
    fetchGitHubStats();
  }, [repoUrl]);

  return (
    <div className="my-2 p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md border-b border-gray-200 dark:border-none">
      {stats ? (
        <ul className="list-none space-y-2 text-blue-600 dark:text-blue-400">
          <li className="flex items-center">
            <i className="fas fa-star text-yellow-400 mr-2 w-6"></i>
            Stars: <span className="font-semibold ml-1">{stats.stars}</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-exclamation-circle text-red-500 mr-2 w-6"></i>
            Issues: <span className="font-semibold ml-1">{stats.issues}</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-code-branch text-green-500 mr-2 w-6"></i>
            Forks: <span className="font-semibold ml-1">{stats.forks}</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-eye text-blue-500 dark:text-blue-300 mr-2 w-6"></i>
            Watchers:{" "}
            <span className="font-semibold ml-1">{stats.watchers}</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-link text-gray-500 mr-2 w-6"></i>
            <a
              href={repoUrl}
              className="font-semibold ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="flex items-center">
            <i className="fas fa-globe text-blue-500 dark:text-blue-300 mr-2 w-6"></i>
            <a
              href={frameworkDetails[framework].website}
              className="font-semibold ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </li>
        </ul>
      ) : (
        <p className="text-center text-gray-500">Loading GitHub stats...</p>
      )}
    </div>
  );
};
