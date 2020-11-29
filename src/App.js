import { Box, Flex } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar/NavBar";
import {useState} from "react"
import {fetchDrinksAPI} from './api/cocktails'
import {CocktailInfo} from './components/CocktailInfo/CocktailInfo'
import {index as SearchBody} from './components/Search/index'

export const App = () => {
  
  //estados
  const [drinks, setDrinks] = useState()
  const [drinksTitles, setDrinksTitles] = useState([])
  const [state, setState] = useState({
    loading : false,
    error: null,
    actualDrink: null
  })
  
  const {loading, error} = state

  //pedida de datos (name = nombre de una bebida = $text dentro del estado de Search)
  const handleSearch = async (name) =>{
    setDrinks((prevState => []))
    setDrinksTitles((prevState)=> [])
    setState({loading:true, error: null})
    try{
      const data = await fetchDrinksAPI(name);
      if (!data.drinks) {throw new Error("No se ha encontrado nada")}
      let titles = data.drinks.map((e,i) => ({title: e.strDrink, id: e.idDrink}))
      setDrinks((prevState => []))
      setDrinksTitles((prevState)=> [])
      setDrinks((prevState => data.drinks))
      setDrinksTitles((prevState)=> prevState.concat(titles))
      setState({loading:false, error: null})
    } catch (e){
    setState({loading:false, error: e.message})
    }
  } 
  //mostrar carta por ID (key idDrink de $drinks)
  const handleShowCard = (id) => {
    setState((prevState) =>{
      let drink = drinks.find(d =>d.idDrink === id);
      return {...prevState, actualDrink: drink}
    })}
  
  return (
    <Box bg="gray.100" minHeight="100vh" fontSize="16px">
      <NavBar></NavBar>
      <Flex w="100vw" h="91vh"> 
        <SearchBody handleSearch={handleSearch} error={error} drinksTitles={drinksTitles} handleShowCard={handleShowCard} loading={loading}></SearchBody>
        <Flex margin="0" padding="5px" w="70%" h="100%" align="center" justifyContent="center">
          {state.actualDrink ? <CocktailInfo drink={state.actualDrink}></CocktailInfo>:""}
        </Flex>
      </Flex>
    </Box>
  )
}



export default App;
