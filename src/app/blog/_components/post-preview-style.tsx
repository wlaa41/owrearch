"use client";

import React from "react";
import * as Icon from "react-feather";
import Image from "next/image";

import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import {Post} from  "@/interfaces/post";  
import ReadBlogStripImageOWElectricianMini from "@/components/ReadBlogStripImageOWElectricianMini";
import MiniImage from "./mini-image";

type Props = {
  key:string,
  post:Post;
};

export function PostPreviewStyle({ post,key }: { post: any,key:string }) {
  return (
    
    <div
    key={key}
    className="col-lg-4 col-md-6"
    data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="500"
      data-aos-once="true"
    >
      <div className="single-blog-post">
        <div className="blog-image">
          <Link href={`/posts/${post.slug}`}  >
          {post.coverImage ? (
            
            <MiniImage   width={860}
            height={700} slug={post.slug} title={post.title} src={post.miniImage} />
          ) : (
            <ReadBlogStripImageOWElectricianMini />
          )}
        
          </Link>

          <div className="date">
            <Icon.Calendar />  
            <DateFormatter dateString={post.date} />
          </div>
        </div>

        <div className="blog-post-content">
          <h3>
            <Link href={`/posts/${post.slug}`}  >
            {post.title}
            </Link>
          </h3>

          <span>
            <Link href={`/posts/${post.slug}`} >
            <Avatar name={post.author.name} picture={post.author.picture} />
            </Link>
          </span>

          <p>
          {post.excerpt}
          </p>

          <Link
            href={`/posts/${post.slug}`}
            className="read-more-btn"
            
          >
            Read More <Icon.ArrowRight />
          </Link>
        </div>
      </div>
    </div>




  );
}