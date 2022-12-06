import { useLoaderData } from "@remix-run/react";
import BlogsList from "~/components/blogs-list";
import { getPosts } from "~/models/posts.server";
import styles from "~/styles/blog.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

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

  return (
    <main className="contenedor">
      <BlogsList posts={posts} />
    </main>
  );
};

export default Blog;
