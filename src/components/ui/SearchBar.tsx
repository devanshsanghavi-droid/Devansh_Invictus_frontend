import React, { useState } from "react";

export const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real application, you would handle the search here
      console.log("Searching for:", searchQuery);
      // For demo purposes, we'll just clear the input
      setSearchQuery("");
    }
  };

  return (
    <div className="w-full max-w-[800px] mx-auto mt-8">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Ask Nova anything..."
          className="w-full px-6 py-4 pr-12 text-lg border-2 border-[#080808] rounded-full focus:outline-none focus:ring-2 focus:ring-[#110B53]"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 transform -translate-y-1/2"
          aria-label="Search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
