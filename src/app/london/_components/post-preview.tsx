import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import {Post} from  "@/interfaces/post";  
import ReadBlogStripImageOWElectricianMini from "@/components/ReadBlogStripImageOWElectricianMini";
import MiniImage from "./mini-image";

type Props = {
  post:Post;
};

export function PostPreview({ post }: { post: any }) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          {post.coverImage ? (
            
            <MiniImage layoutFill={true} objectFitCover={true} objectPositionCenter={true} slug={post.slug} title={post.title} src={post.miniImage} />
          ) : (
            <ReadBlogStripImageOWElectricianMini />
          )}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">
              <Link href={`/posts/${post.slug}`} className="stretched-link">
                {post.title}
              </Link>
            </h3>
            <p className="card-text">
              <small className="text-muted">
                <DateFormatter dateString={post.date} />
              </small>
            </p>
            <p className="card-text">{post.excerpt}</p>
            <Avatar name={post.author.name} picture={post.author.picture} />
          </div>
        </div>
      </div>
    </div>
  );
}