import React from 'react'

const ProjectShimmer = () => {
  return (
    <main className="min-h-screen w-full px-5 pb-24 pt-28">
      <div className="mx-auto max-w-6xl animate-pulse">
        <div className="flex flex-col items-center">
          <div className="mb-6 h-4 w-32 rounded bg-line"></div>
          <div className="h-40 w-full max-w-xl rounded-lg bg-hover md:h-56"></div>
        </div>
        <div className="mb-8 mt-16 h-8 w-40 rounded bg-line"></div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-56 rounded-lg border border-line bg-hover"></div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default ProjectShimmer
