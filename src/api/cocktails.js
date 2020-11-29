export const fetchDrinksAPI = async (name) => {
    const response = window.fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    if (!response.ok) {
        throw new Error(
          "No se pudo establecer conexion conexión con el servidor"
        );
      } else {
        const {data} = response.json();
        return data
      }
};