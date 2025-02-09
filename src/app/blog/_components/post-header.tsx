import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/blog/_components/post-title";
import { type Author } from "@/interfaces/author";
import { Post } from "@/interfaces/post";
import ReadBlogStripOWElectrician from "@/components/ReadBlogStripImageOWElectrician";
import Link from "next/link";
import MiniImage from "./mini-image";


type Props = {
  post: Post;
};



import { Calendar, User } from 'react-feather'; // Import specific icons from react-feather

export function PostHeader({ post }: Props) {
  return (
    <div className="container mt-4">
      <div className="mb-1">
        <h1 className="  fs-6">
    
          <Link href={`/posts/${post.slug}`} className="text-decoration-none hover:text-decoration-underline">
            {post.title}
          </Link>
        </h1>
        <p className=" fs-6">
        {post.excerpt}
      </p>
        {post.coverImage ? (
          <CoverImage title={post.title} src={post.coverImage} />
        ) : (
          <ReadBlogStripOWElectrician />
        )}
      </div>

      <div className=" text-muted fs-6"> {/* Smaller font size and muted color for less emphasis */}
        <Calendar size={16} className="" /> {/* Calendar icon with right margin */}
        <DateFormatter dateString={post.date} />
      </div>

      <div className="d-flex align-items-center mb-3">
        <Avatar name={post.author.name} picture={post.author.picture} /> {/* Avatar component */}
      </div>
    </div>
  );
}