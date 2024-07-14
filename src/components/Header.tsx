import Image from 'next/image'
import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
  return (
    <div className="flex justify-between items-center  bg-gray-200 dark:bg-gray-900  border-b-[1px] border-gray-50 dark:border-gray-600 px-12 py-3">
      <div>
        <Image
          src="/favicon.svg"
          height={30}
          width={30}
          alt='whichui icon'
        />
      </div>

      <div className='flex flex-row gap-2'>
        <a 
          href="https://github.com/m-esm/whichui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
            src="/logos/githublight.svg"
            height={30}
            width={30}
            alt='github logo'
            className="hidden dark:flex dark:border-none border p-[1px] rounded-lg hover:bg-white dark:bg-gray-600 duration-200"
          />
          <Image 
            src="/logos/githubdark.svg"
            height={30}
            width={30}
            alt='github logo'
            className="dark:hidden border border-black p-[1px] rounded-lg hover:bg-white  duration-200"
          />
        </a>
        <ThemeSwitcher />
      </div>

    </div>
  )
}

export default Header