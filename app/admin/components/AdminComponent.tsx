"use client";
import React, { useState } from 'react'

export default function AdminComponent() {
    const [text, setText] = useState("");

    const handleButtonClick = () => {
      console.log(text);
    };
  
    return (
      <div className="w-full max-w-xl mx-auto px-4 py-8">
        <textarea
          className="w-full rounded-lg px-4 py-2 mb-4 text-gray-800 border-2 border-gray-400 focus:outline-none focus:border-blue-600"
          rows={8}
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 focus:outline-none"
          onClick={handleButtonClick}
        >
          Submit
        </button>
      </div>
    );
  }

