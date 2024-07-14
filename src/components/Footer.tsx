import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-200 dark:bg-gray-900 border-t-[1px] border-gray-50 dark:border-gray-800 px-4 md:px-12 py-3 pb-12 gap-4">
      <div className='flex flex-col gap-2 w-full'>
        <Image
          src="/favicon.svg"
          height={30}
          width={30}
          alt='whichui icon'
        />
        <h4 className='font-semibold text-lg text-blue-900 dark:text-blue-400'>
          Keep up to date 
        </h4>
        <p className='text-xs text-blue-900 dark:text-blue-600'>Join our newsletter for regular updates. No spam ever.</p>
        <div className=' relative flex flex-row gap-[2px]'>
          <input
            className="shadow-md peer w-[250px] md:w-[300px]  bg-transparent text-blue-800 dark:text-blue-600 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-800 placeholder-shown:border-t-blue-blue-800 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-blue-800 focus:border-blue-800"
            placeholder=" "
            name='email'
            />
          <label
            className="flex w-[250px] md:w-[300px] select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-800 dark:peer-placeholder-shown:text-blue-600 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-800 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-800 peer-focus:text-blue-800 before:border-blue-800 peer-focus:before:!border-blue-800 after:border-blue-800 peer-focus:after:!border-blue-800"
            >
            example@email.com
          </label>

          <button 
            className='py-2 px-4 bg-blue-500 dark:bg-blue-800 shadow-lg text-sm text-white font-semibold rounded-lg hover:bg-gray-100 hover:text-black duration-200'
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-auto w-full text-sm text-blue-900 dark:text-blue-400  ">
        <p>© 2024 Open Source App. All rights reserved.</p>
        <p>Want to contribute? Visit our <a href="https://github.com/m-esm/whichui" target="_blank" className='underline font-semibold hover:scale-105'>GitHub repository</a>
          .
        </p>
      </div>
    </div>
  )
}

export default Header