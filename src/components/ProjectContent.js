import React, { useEffect, useState } from "react";

const ProjectContent = () => {
  const [repoData, setRepoData] = useState();

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
  return (
    <div className="h-auto min-h-screen flex flex-col w-full bg-slate-600 text-white">
      <div className="flex flex-grow"></div>
      <div className="flex justify-center mt-36 mb-20">
        <div className="">
          <p className="capitalize text-center mb-5">my github Streaks</p>

          
          {/* github api */}
          <div className="">
            <img
            className="w-60"
              src="https://github-readme-streak-stats.herokuapp.com/?user=alexmathai2001&theme=dark"
              alt="jigar-sable"
            />
          </div>
          {/* projects */}
          <div className="flex flex-col items-center">
            <p className="text-center my-5">Project</p>
            {/* card container */}
            <div className="grid grid-cols-1 gap-4">
              {/* card */}
              {repoData?.map((item, index) => (
                <div className="w-52 h-auto rounded-lg bg-black  p-5">
                  <div className="flex flex-col justify-center items-center">
                    <p className=" font-bold my-2 capitalize">{item?.name}</p>
                    <p className="text-xs my-2 text-center text-gray-300 capitalize">
                      {item?.description || "descritpion not added by the user"}
                    </p>
                    <p className="text-xs">Major Language : {item?.language}</p>
                  </div>

                  <a
                    href={item?.html_url}
                    className="text-white flex justify-center items-center mt-4 bg-gray-600 j w-3/6 rounded-xl"
                  >
                    <i class="bi bi-code"></i>
                    <p className="text-sm font-light">code</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-grow"></div>
    </div>
  );
};

export default ProjectContent;
