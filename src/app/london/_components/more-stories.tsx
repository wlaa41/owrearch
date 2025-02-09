import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section>
      <h2 className="mb-8 display-1 font-weight-bold">
        More Stories
      </h2>
      <div className="row">
        {posts.map((post) => (
          <div className="col-12 col-md-6 mb-4" key={post.slug}>
            <PostPreview
              post={post}
            />
          </div>
        ))}
      </div>
    </section>
  );
}