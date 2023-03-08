import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faGear);


export default function TopBar() {
  return (
    <header className="bg-teal-200 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex-shrink-0 flex items-center">
            <span className="font-bold text-lg ml-3">The Quiz App</span>
          </a>
          <a href="/admin" className="flex-shrink-0 flex items-center">
          <FontAwesomeIcon className='w-8 h-8' icon={faGear} />
          </a>
        </div>
      </div>
    </header>
  )
}
