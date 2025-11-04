import React from 'react'

const Achievement = () => {
  return (
    <>
    <div className='bg-gradient-to-br from-purple-700 via-purple-600 to-purple-400 m-0 py-10'>
        <h1 className='text-4xl text-white font-bold text-center pb-5'>Trusted by Millions, Built for You</h1>
    <div className='flex justify-center items-center gap-30 max-sm:block'>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-center text-sm text-white '>Total Downloads</p>
            <h1 className='text-5xl text-white font-bold text-center my-3'>26.9M</h1>
            <p className='text-center text-sm text-white '>21% more than last month</p>
        </div>
        <div className='flex flex-col items-center'>
            <p className='text-center text-sm text-white '>Total Reviews</p>
            <h1 className='text-5xl text-white font-bold text-center my-3'>906K</h1>
            <p className='text-center text-sm text-white'>46% more than last month</p>
        </div>
        <div className='flex flex-col items-center'>
            <p className='text-center text-sm text-white'>Active Apps</p>
            <h1 className='text-5xl text-white font-bold text-center my-3'>132+</h1>
            <p className='text-center text-sm text-white'>31 more will launch</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Achievement;
