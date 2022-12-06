import { useLoaderData } from "@remix-run/react";
import BlogsList from "~/components/blogs-list";
import GuitarsList from "~/components/guitars-list";
import Course from "~/components/course";
import { getGuitars } from "~/models/guitars.server";
import { getPosts } from "~/models/posts.server";
import { getCourse } from "~/models/course.server";
import stylesGuitars from "~/styles/guitars.css";
import stylesBlog from "~/styles/blog.css";
import stylesCourse from "~/styles/course.css";

export function meta() {}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitars,
    },
    {
      rel: "stylesheet",
      href: stylesBlog,
    },
    {
      rel: "stylesheet",
      href: stylesCourse,
    },
  ];
}

export async function loader() {
  const [guitars, posts, course] = await Promise.all([
    getGuitars(),
    getPosts(),
    getCourse(),
  ]);

  return {
    guitars,
    posts,
    course,
  };
}

const Index = () => {
  const { guitars, posts, course } = useLoaderData();

  return (
    <>
      <main className="contenedor">
        <GuitarsList guitars={guitars} />
      </main>

      <Course course={course.attributes} />

      <section className="contenedor">
        <BlogsList posts={posts} />
      </section>
    </>
  );
};

export default Index;
