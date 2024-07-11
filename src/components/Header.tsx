import Image from 'next/image'
import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
  return (
    <div className="flex justify-between items-center  bg-gray-200 dark:bg-gray-600  border-b-[1px] border-gray-50 px-12 py-3">
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
            src="/logos/github.svg"
            height={30}
            width={30}
            alt='github logo'
            className="border-blue-900 border p-[1px] rounded-lg hover:bg-white duration-200"
            style={{ fill: "rgb(30, 58, 138)"}}
          />
        </a>
        <ThemeSwitcher />
      </div>

    </div>
  )
}

export default Header