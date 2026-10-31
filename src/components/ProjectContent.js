import React, { useEffect, useState } from "react";
import ProjectShimmer from "./ProjectShimmer";

const ProjectContent = () => {
  const [repoData, setRepoData] = useState([]);

  useEffect(() => {
    const apicall = async () => {
      const response = await fetch(
        `https://api.github.com/users/Alexmathai2001/repos`
      );
      if (response.ok) {
        const data = await response.json();
        const filteredData = data.filter((item) => item?.stargazers_count >= 1);
        setRepoData(filteredData);
      } else {
        console.log("Failed to fetch GitHub data");
      }
    };
    apicall();
  }, []);

  if(repoData.length === 0 ){
    return <ProjectShimmer />;
  }

  return (
    <main className="min-h-screen w-full px-5 pb-24 pt-28">
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* streaks */}
        <section className="flex flex-col items-center">
          <h2 className="mb-6 text-center text-sm font-medium uppercase tracking-widest text-muted">
            GitHub Streaks
          </h2>
          <div className="panel flex w-full max-w-xl justify-center rounded-lg p-4">
            <img
              className="w-full max-w-md"
              src="https://github-readme-streak-stats.herokuapp.com/?user=alexmathai2001&theme=dark"
              alt="GitHub streak stats"
            />
          </div>
        </section>

        {/* projects */}
        <section className="mt-16">
          <h2 className="mb-8 text-3xl font-bold tracking-tight">
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {repoData?.map((item) => (
              <article
                key={item?.id}
                className="panel group flex flex-col rounded-lg p-6 transition duration-200 hover:border-muted hover:bg-hover"
              >
                <div className="mb-4 flex items-center justify-between text-muted">
                  <i className="bi bi-folder2-open text-2xl text-soft"></i>
                  <span className="flex items-center gap-1 text-xs">
                    <i className="bi bi-star-fill text-soft"></i>
                    {item?.stargazers_count}
                  </span>
                </div>
                <h3 className="text-lg font-semibold capitalize">{item?.name}</h3>
                <p className="mt-2 flex-grow text-sm leading-relaxed text-muted">
                  {item?.description || "Description not added by the user"}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  {item?.language ? (
                    <span className="rounded-md border border-line px-3 py-1 text-xs text-soft">
                      {item.language}
                    </span>
                  ) : (
                    <span></span>
                  )}
                  <a
                    href={item?.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-soft transition group-hover:text-fg"
                  >
                    <i className="bi bi-code-slash"></i>
                    Code
                    <i className="bi bi-arrow-right transition group-hover:translate-x-1"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProjectContent;
