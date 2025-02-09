"use client";

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import { Post, SearchProps } from "@/interfaces/post";  
import { PostPreviewStyle } from './post-preview-style';
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
    keys: ['title', 'excerpt','content'],
    includeScore: false
  }), [posts]);

  const results = useMemo(() => {
    return query ? fuse.search(query).map(result => result.item) : posts;
  }, [query, fuse, posts]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value);

  const colors = ['#4285F4', '#EA4335', '#ba8b00', '#34A853'];  // Google logo colors
  const coloredHeading = (text: string) => {
    return text.split(' ').map((word, index) => (
      <span key={index} style={{ color: colors[index % colors.length] }}>
        {word} 
      </span>
    ));
  };

   return (
    <>
      <div className="search-strip">
        <h2 className="text-center">{coloredHeading('Explore Engaging Articles!')}</h2>
        <div className="input-container">
          <div className="input-with-icon">
            <FaSearch className="input-icon" />
            <input
            type="search"
            autoComplete="on" 
            placeholder="Search for posts.. "
            onChange={handleSearch}
            ref={inputRef} // Attach ref to input
          />
        </div>
      </div>
      </div>

      <div className="blog-area pb-50">
        <div className="">
          <div className="section-title">

          </div>
      
          <div className="row justify-content-center">
        {results.map(post => (
            <PostPreviewStyle key={post.slug}
              post={post}
            />
        ))}
          </div>
          </div>
          </div>
          </>
  );
};

export default Search;
