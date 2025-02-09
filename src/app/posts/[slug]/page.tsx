//src\app\posts\[slug]\page.tsx

import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/blog/_components/container";
import BackLink from "@/app/blog/_components/header-back-link";
import { PostBody } from "@/app/blog/_components/post-body";
import { PostHeader } from "@/app/blog/_components/post-header";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import JoinOurTeam from "@/components/JoinOurTeam/JoinOurTeam";
import SchemaHead from "@/app/blog/_components/schema-head";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");
  // console.log('Processed HTML content:', content);

  return (
    <>

    <SchemaHead post={post}/>
    <Navbar/>
    <main className="detail-article-main-container pt-80">
      <Container>
        <BackLink />
        <article className="">
          <PostHeader
            post={post}
          />

          <PostBody content={content} />
        </article>
      </Container>
    </main>
    <JoinOurTeam/>
    <Footer/>
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};


export async function generateMetadata(
  { params }: Params,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
 
  // fetch data
  const post = await getPostBySlug(params.slug);
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: post.title,
    description:post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description:post.excerpt,
      images: [{
        
        url: post.coverImage,
        width:1200,
        height:1200,
      
      }],
    },
    twitter:{
      card: 'summary_large_image',    
      title: post.title,
      description:post.excerpt,
      images: [{
        
        
        url: post.coverImage,
        width:1200,
        height:1200,
      
      }],
    }
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
