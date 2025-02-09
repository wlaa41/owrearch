// "use client";

// import React, { useState, useMemo, useEffect, useRef } from 'react';
// import Fuse from 'fuse.js';
// import { Post, SearchProps } from "@/interfaces/post";  // Assuming the types are stored here
// // import { PostPreviewStyle } from './post-preview-style';
// import { FaSearch } from 'react-icons/fa';  // Import FontAwesome icon
// import Link from 'next/link'; // Import Link from Next.js
// import { PostPreviewStyle } from '@/app/blog/_components/post-preview-style';
// import { getAllPosts } from "@/lib/api";





// const PostSearch: React.FC<SearchProps> = ({ posts }) => {
//   const [query, setQuery] = useState<string>('');
//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (inputRef.current) {
//       inputRef.current.focus(); // Focus on the input field when the component mounts
//     }
//   }, []);

//   const fuse = useMemo(() => new Fuse<Post>(posts, {
//     keys: ['title', 'excerpt'],
//     includeScore: true
//   }), [posts]);

//   const results = useMemo(() => {
//     return query ? fuse.search(query).map(result => result.item) : posts.slice(0, 3);
//   }, [query, fuse, posts]);

//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value);

//   return (
//     <>
//       <div className="search-strip">
//         <h2><Link href="/blog"><a>Dig Into Fun Articles!</a></Link></h2>
//         <div className="input-container">
//           <div className="input-with-icon">
//             <FaSearch className="input-icon" />
//             <input
//               type="text"
//               placeholder="Search for posts.. "
//               onChange={handleSearch}
//               ref={inputRef} // Attach ref to input
//             />
//           </div>
//         </div>
//       </div>

//       <div className="blog-area pb-50">
//         <div className="">
//           <div className="section-title"></div>
      
//           <div className="row justify-content-center">
//             {results.map(post => (
//               <PostPreviewStyle key={post.slug} post={post} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default function BlogPostSearch() {
//     const allPosts = getAllPosts();
  

//     return (
      

//           <PostSearch posts={allPosts}/>
  

//     );
//   }