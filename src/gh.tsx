import { useEffect, useState } from "react";
import { PiGithubLogoBold } from "react-icons/pi";

const GitHubRepos: React.FC = () => {
  const [repos, setRepos] = useState<any[]>([]);

  // Add the exact names of your pinned repos
  const pinnedRepoNames = [
    "did_pallet",
    "rust_json_parser",
    "argonauts",
    "artemis",
    "orderbook",
    "customcurve-hook",
  ];

  useEffect(() => {
    const fetchAllRepos = async () => {
      let page = 1;
      let allRepos: any[] = [];
      let hasMore = true;

      while (hasMore) {
        const res = await fetch(
          `https://api.github.com/users/auralshin/repos?per_page=100&page=${page}`
        );
        const data = await res.json();

        if (data.length === 0) {
          hasMore = false;
        } else {
          allRepos = [...allRepos, ...data];
          page++;
        }
      }

      const pinnedRepos = allRepos.filter((repo) =>
        pinnedRepoNames.includes(repo.name)
      );
      setRepos(pinnedRepos);
    };

    fetchAllRepos();
  }, []);

  return (
    <section className="mb-10 py-10 px-6 rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">
          PROJECTS
        </h2>
        <a
          href="https://github.com/auralshin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-black transition-all duration-300 rounded-full shadow hover:shadow-lg"
        >
          <PiGithubLogoBold className="text-lg" />
          <span>GitHub</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {repos.map((repo, index) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300
      ${index > 1 ? "hidden md:block" : ""}`}
          >
            <h3 className="font-semibold text-gray-900 text-base mb-1">
              {repo.name}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              {repo.description || "No description provided."}
            </p>
            <div className="mt-3 text-xs text-gray-400 flex justify-between items-center">
              <span>⭐ {repo.stargazers_count}</span>
              <span>{repo.language}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default GitHubRepos;
