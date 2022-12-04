export const getGuitars = async () => {
  const response = await fetch(`${process.env.API_URL}/guitars?populate=*`);
  const { data } = await response.json();

  return data;
};

export const getGuitar = async (url) => {
  const response = await fetch(
    `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
  );

  const { data } = await response.json();

  return data;
};
