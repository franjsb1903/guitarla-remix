export const getCourse = async () => {
  const response = await fetch(`${process.env.API_URL}/course?populate=*`);

  const { data } = await response.json();

  return data;
};
