export const getGuitars = async () => {
  const response = await fetch(`${process.env.API_URL}/guitars?populate=*`);
  const { data } = await response.json();

  return data;
};
