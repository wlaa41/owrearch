"use client";

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import { Post, SearchProps } from "@/interfaces/post";  // Assuming the types are stored here
import { PostPreview } from './post-preview';
import { FaSearch } from 'react-icons/fa';  // Import FontAwesome icon

const Search: React.FC<SearchProps> = ({ posts }) => {
  const [query, setQuery] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus on the input field when the component mounts
    }
  }, []);

  const fuse = useMemo(() => new Fuse<Post>(posts, {
    keys: ['title', 'excerpt'],
    includeScore: true
  }), [posts]);

  const results = useMemo(() => {
    return query ? fuse.search(query).map(result => result.item) : posts;
  }, [query, fuse, posts]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value);

  return (
    <>
    <div className="search-strip">
      <h2>Dig Into Fun Articles!</h2>
      <div className="input-container">
        <div className="input-with-icon">
          <FaSearch className="input-icon" />
          <input
            type="text"
            placeholder="Search for posts.. "
            onChange={handleSearch}
            ref={inputRef} // Attach ref to input
          />
        </div>
      </div>
      <ul>
        
      </ul>
    </div>
   
    {results.map(post => (
          <div className="search-cards-container" key={post.slug}>
            <PostPreview
              post={post}
            />
          </div>
        ))}
    </>
  );
};

export default Search;
