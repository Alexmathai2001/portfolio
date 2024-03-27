import React from 'react'

const Content = () => {
  return (
    <div className='h-screen flex flex-col w-full bg-slate-600 text-white'>
        <div className='flex flex-grow'></div>
        <div className='flex justify-center'>
          <div>
          <p className='text-3xl'>👋  I'm Alex Mathai</p>

          links
          <div className='mt-5 flex justify-evenly'>
            {/* github */}
            <a href=''>
              <img className='w-8' src='./img/github.png' alt='github'></img>
            </a>
            {/* linkedin */}
            <a href=''>
              <img className='w-8' src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'></img>
            </a>
            {/* telegram */}
            <a href=''>
              <img className='w-8' src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'></img>
            </a>
            {/* mail */}
            <a href=''>
              <img className='w-8' src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'></img>
            </a>
            {/* insta */}
            <a href=''>
              <img className='w-8' src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'></img>
            </a>
          </div>
          </div>
          
        </div>
        <div className='flex flex-grow'></div>
    </div>
  )
}

export default Content