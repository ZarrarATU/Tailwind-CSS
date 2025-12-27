import React from 'react'

function App() {
  return (
    <div className='main grid place-content-center h-screen'>
      <div className='mb-16' >
        <h1 className='text-white text-4xl m-6'>TAILWIND CSS</h1>

        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-2xl text-black flex items-center">
          <div className='mr-7'>
            <img className='w-22' src="/pas.png" alt="logo" />
          </div>
          <div>
            <div>
              <h3 className='text-2xl font-bold'>Zarrar ATU</h3>
              <p className='text-[14px] text-slate-600'>Zarrar is a private company that enhances Pakistan’s security</p>
            </div>
          </div>
        </div>

      </div>

      <button className='cursor-pointer bg-amber-600 font-bold rounded-2xl w-[150px] p-3 text-black hover:bg-white hover:text-black transition-all dark:bg-white dark:text-black '>SHOP NOW</button>
    </div>
  )
}

export default App