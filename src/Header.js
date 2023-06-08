import React, { useState } from 'react';



export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between h-16">
        <div className="flex items-center">
          <h3 className="text-xl font-bold transition duration-500 ease-in-out transform hover:scale-110">
            <span className="inline-block animate-pulse">J</span>
            ust<span className="text-blue-500">S</span>hop
          </h3>
          <div className="ml-4 flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white text-black rounded-md pl-8 pr-4 py-2 w-72"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>
            <button className="ml-2 bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex items-center space-x-4">
            <li className="text-sm">Menu</li>
            <li className="text-sm">Collections</li>
            <li className="text-sm">About</li>
            <li className="text-sm">Sale</li>
          </ul>
          <div className="flex items-center space-x-4">
            <div className="group flex items-center space-x-2">
            <div className="group-hover:bg-white group-hover:text-black bg-black rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </div>
             
              <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } absolute right-0 mt-2 py-2 bg-white text-black rounded-lg shadow-lg`}
          >
            <ul className="space-y-2 px-4 py-10">
              <li className="text-sm">Sign In</li>
              <li className="text-sm">Create Account</li>
              <li className="text-sm">Account Help</li>
            </ul>
          </div>
            </div>
            <div className="bg-black rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </div>
            <div className="bg-black rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </div>
          </div>
        </div>
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5v-11zm1.5-1A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0h-11zM2 6.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
