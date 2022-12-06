import { Link } from "@remix-run/react";
import { formatDate } from "~/utils/helpers";

const Post = ({ post }) => {
  const { title, content, publishedAt, image, url } = post;

  return (
    <article className="post card">
      <img
        className="imagen"
        src={image.data.attributes.formats.small.url}
        alt={`Blog ${title}`}
      />
      <div className="contenido">
        <h3>{title}</h3>
        <p className="fecha">{formatDate(publishedAt)}</p>
        <p className="resumen">{content}</p>
        <Link className="enlace" to={`/posts/${url}`}>
          Leer Post
        </Link>
      </div>
    </article>
  );
};

export default Post;
