import { useLoaderData } from "@remix-run/react";
import BlogsList from "~/components/blogs-list";
import { getPosts } from "~/models/posts.server";

export function meta() {
  return {
    title: "GuitarLA - Nuestro Blog",
    description: "GuitarLA, Blog de música y venta de guitarras",
  };
}

export async function loader() {
  const posts = await getPosts();

  return posts;
}

const Blog = () => {
  const posts = useLoaderData();

  return <BlogsList posts={posts} />;
};

export default Blog;
