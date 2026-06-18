import React from "react";
import UploadPicture from "./pages/uploadPicture.jsx";
import Navbar from "./pages/Navbar.jsx";
import Feed from "./pages/Feed.jsx";
import { Routes, Route,useNavigate,Navigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/posts" replace />} />
        <Route path="/create-post" element={<UploadPicture />} />
        <Route path="/posts" element={<Feed />} />
      </Routes>
    </div>
  );
};

export default App;
