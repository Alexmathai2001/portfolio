import React from 'react'

const ProjectShimmer = () => {
  return (
    <div className="h-auto min-h-screen flex flex-col w-full bg-slate-600 text-white">
      <div className="flex flex-grow"></div>
      <div className="flex justify-center mt-36 mb-20">
        <div className="flex flex-col items-center">
          <p className="capitalize text-center mb-5">my github Streaks</p>

          {/* github api */}
          <div className="flex justify-center w-full ">
            <div
              className=" md:w-[30rem] md:h-80 w-40 h-20 bg-gray-800 rounded-2xl"
            >
            </div>
          </div>
          {/* projects */}
          <div className="flex flex-col items-center">
            <p className="text-center my-5">Project</p>
            {/* card container */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* card */}
                <div className="w-52 h-[20rem] flex flex-col items-center rounded-lg bg-black  p-5"></div>
                <div className="w-52 h-[20rem] flex flex-col items-center rounded-lg bg-black  p-5"></div>
                <div className="w-52 h-[20rem] flex flex-col items-center rounded-lg bg-black  p-5"></div>
                <div className="w-52 h-[20rem] flex flex-col items-center rounded-lg bg-black  p-5"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-grow"></div>
    </div>
  )
}

export default ProjectShimmer