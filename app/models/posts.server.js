export const getPosts = async () => {
  const response = await fetch(`${process.env.API_URL}/posts?populate=*`);
  const { data } = await response.json();

  return data;
};

export const getPost = async (url) => {
  const response = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=image`
  );

  const { data } = await response.json();

  return data;
};
