import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (

<footer className="bg-[#181616] p-4 md:p-6 w-full ">
  <div className="container max-w-7xl mx-auto flex items-center justify-between">
    <div className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="h-6 w-6"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
      </svg>
      <span className="font-semibold">Acme Inc</span>
    </div>
    <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
  </div>
</footer>
  )
}

export default Footer
 
