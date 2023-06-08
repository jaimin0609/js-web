import React from 'react';

function Sidebar({ toggleSidebar }) {
  return (
    <div className="fixed top-0 left-0 z-50 h-screen w-64 bg-white text-black">
      {/* Close button */}
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-black"
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M10.354 8L16 13.646 13.646 16 8 10.354 2.354 16 0 13.646 5.646 8 0 2.354 2.354 0 8 5.646 13.646 0 16 2.354 10.354 8z"
          />
        </svg>
      </button>

      {/* Sidebar content */}
      <div className="p-4">
        <div className="font-bold">{/*{user.name}*/}</div>
        <ul className="mt-4 space-y-2">
          <li className="font-bold">
            Just
            <span className="text-blue-500">S</span>hop Subscription
          </li>
          <li className="font-bold">Trending</li>
          <li className="font-bold">Delivery &amp; Shipment</li>
          <li className="font-bold">Top Categories</li>
          <li className="font-bold">Top Brands</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
