"use client";
import React from 'react'
import { useGlobalContext } from '../context/store';

interface Props {
  score: number
}

export default function TopBar() {
      const { score, setScore } = useGlobalContext();

  return (
    <header className="bg-teal-200 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex-shrink-0 flex items-center">
            <span className="font-bold text-lg ml-3">The Quiz App</span>
          </a>
          <div>Score: {score}</div>
        </div>
      </div>
    </header>
  )
}
