import Search from "./_components/Search";
import Container from "./_components/container";
import { HeroPost } from "./_components/hero-post";
import { MoreStories } from "./_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();


  return (

    <section className="intro-blog-mainh1-container pt-80">
      <main className="pt-80">
        <Container>
          <h1 className="pt-80">
            Welcome to <strong>ow!</strong> Tech Blog!
          </h1>
          <Search posts={allPosts} />

        </Container>
      </main>
    </section>
  );
}
