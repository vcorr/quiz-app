import React from 'react'

interface Props {
  score: number
}

export default function TopBar({ score }: Props) {

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex-shrink-0 flex items-center">
            <span className="font-bold text-lg ml-3">Quiz App</span>
          </a>
          <div>Score: {score}</div>
        </div>
      </div>
    </header>
  )
}
