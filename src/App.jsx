import React from 'react'

function App() {
  return (
       <div className='grid gap-4 m-4 sm:grid-cols-12 grid-cols-2'>
        <div className='rounded-lg sm:col-span-4 bg-amber-800 shadow-xl min-h-[100px]'></div>
        <div className='rounded-lg sm:col-span-6 bg-amber-950 shadow-xl min-h-[100px]'></div>
        <div className='rounded-lg bg-amber-700 shadow-xl sm:col-span-2 min-h-[100px] hidden sm:block'></div>
       </div>
  )
}

export default App