import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((response) => {
      setPosts(response.data.posts);
    });
  }, []);
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/posts/${id}`);
    setPosts(posts.filter((post) => post._id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-8">
      {posts.map((post) => (
        <div
          key={post._id}
          className="mb-8 bg-black/20 p-6 rounded-lg shadow-lg border border-white/20 w-full max-w-md text-white"
        >
          <img
            src={post.image}
            alt="Post"
            className="w-full h-auto rounded-lg mb-4"
          />
          <p className="text-white text-lg">{post.Caption}</p>
          <div className="flex justify-end ">
            <button
              className="mt-4 px-4 py-2 rounded-xl
             bg-white/10 backdrop-blur-md
             border border-white/20
             text-white
             hover:bg-white/20
             transition-all duration-300
             shadow-lg hover:shadow-xl"
              onClick={() => handleDelete(post._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
