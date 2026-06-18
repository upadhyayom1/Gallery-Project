import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const uploadPicture = () => {
  const navigate = useNavigate();
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const formdata=new FormData(e.target);
    await axios.post("http://localhost:3000/create-post", formdata  );
    navigate('/posts');
  }

  
  
  return (
   <div className="min-h-screen flex items-center justify-center bg-black">

  <form onSubmit={handleSubmit} className="w-full max-w-md p-8 rounded-3xl
               bg-white/10 backdrop-blur-lg
               border border-white/20
               shadow-xl">

    <h2 className="text-3xl font-semibold text-white text-center mb-8">
      Create Post
    </h2>

    <div className="mb-5">
      <label className="block text-gray-200 mb-2">
        Upload Image
      </label>

      <input
        type="file"
        accept="image/*"
        name="image"
        className="w-full text-gray-300
               file:bg-white/10
               file:text-white
               file:border
               file:border-white/20
               file:px-4
               file:py-2
               file:rounded-lg
               file:cursor-pointer"
      />
    </div>

    <div className="mb-6">
      <label className="block text-gray-200 mb-2">
        Caption
      </label>

      <textarea
        rows="4"
        name="caption"
        placeholder="Write a caption..."
        className ="w-full p-3 rounded-xl
               bg-white/5
               border border-white/20
               text-white
               placeholder-gray-400
               focus:outline-none
               focus:border-white/40"
      ></textarea>
    </div>

    <button
      className="w-full py-3 rounded-xl
             bg-white text-black
             font-medium
             hover:bg-gray-200
             transition"
             
    >
      Upload
    </button>

  </form>

</div>
  )
}

export default uploadPicture
