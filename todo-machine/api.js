const fetchApi = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchApi();
