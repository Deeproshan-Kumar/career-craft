"use client";

import { Search } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="max-w-5xl w-full mx-auto">
      <form className="relative w-full flex justify-center items-center">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 min-h-15 min-w-15 flex justify-center items-center cursor-pointer">
          <Search size={20} />
        </div>
        <input
          type="search"
          name="search"
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          className="border border-gray-300 w-full rounded-md shadow-xl p-4 ps-12 focus:outline-0"
          id="search"
          placeholder="Job title, keywords or company..."
          required
        />
        <Button className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer" size="lg">Find Jobs</Button>
      </form>
    </div>
  );
};

export default SearchBar;
