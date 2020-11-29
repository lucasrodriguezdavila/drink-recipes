export const fetchDrinksAPI = async (name) => {
    let response;
    if (name) {
      response = await window.fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    } else {
      throw new Error(
        "Debes ingresar un nombre!"
      );
    }
    if (!response.ok) {
        throw new Error(
          "No se pudo establecer conexion conexión con el servidor"
        );
      } else {
        const data = response.json();
        console.log(data)
        return data
  }
};