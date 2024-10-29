import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ studentName, onUpdate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [newName, setNewName] = useState(studentName);
  const [uploadingPic, setUploadingPic] = useState("/images/student-pic.png");

  const handleUpdate = () => {
    onUpdate({ name: newName, profilePic: uploadingPic });
    setIsProfileModalOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadingPic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <a
          href="https://www.whatbytes.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-black text-xl font-semibold">WhatByte</span>
        </a>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <a href="/">Dashboard 🏠</a>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => setIsProfileModalOpen(true)}
          className="relative flex items-center w-[100px]"
        >
          <Image
            src={uploadingPic}
            alt="Student"
            width={40}
            height={40}
            className="rounded-full border border-white"
          />
          <span className="ml-2 font-medium truncate">{newName}</span>{" "}
        </button>
      </div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden focus:outline-none"
      >
        {isMenuOpen ? (
          <HiX className="h-6 w-6" />
        ) : (
          <HiMenu className="h-6 w-6" />
        )}
      </button>

      {isMenuOpen && (
        <div className="absolute top-16 right-0 bg-white shadow-lg rounded-lg w-48 p-4 md:hidden">
          <div className="flex flex-col space-y-2">
            <a href="/">Dashboard 🏠</a>
          </div>
        </div>
      )}
      {isProfileModalOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full mb-4"
              placeholder="Enter new name"
            />
            <label className="block mb-2">Profile Picture:</label>
            <input type="file" onChange={handleFileChange} className="mb-4" />
            <div className="flex justify-end">
              <button
                onClick={() => setIsProfileModalOpen(false)}
                className="mr-2 bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
