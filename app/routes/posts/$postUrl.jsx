import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { formatDate } from "~/utils/helpers";
import styles from "~/styles/blog.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export async function loader({ params }) {
  const { postUrl } = params;

  const data = await getPost(postUrl);

  if (data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Post no encontrado",
    });
  }

  return data[0];
}

export const meta = ({ data }) => {
  if (!data) {
    return {
      title: "GuitarLA - Post no encontrado",
      description: `Guitarras, venta de guitarras, post no encontrado`,
    };
  }

  return {
    title: `GuitarLA - ${data?.attributes?.title}`,
    description: `Guitarras, venta de guitarras, post ${data?.attributes?.title}`,
  };
};

const Post = () => {
  const post = useLoaderData();

  const { title, content, publishedAt, image } = post?.attributes;

  return (
    <article className="contenedor post mt-3">
      <img
        className="imagen"
        src={image.data.attributes.url}
        alt={`Blog ${title}`}
      />
      <div className="contenido">
        <h3>{title}</h3>
        <p className="fecha">{formatDate(publishedAt)}</p>
        <p className="texto">{content}</p>
      </div>
    </article>
  );
};

export default Post;
