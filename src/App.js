import { Box, Container, Flex, List, Skeleton } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar/NavBar";
import {Search} from "./components/Search/Search"
import {DrinkTitle} from "./components/Search/DrinkTitle"
import {useState, useEffect} from "react"
import {fetchDrinksAPI} from './api/cocktails'

export const App = () => {

  const [drinks, setDrinks] = useState([])
  const [drinksTitles, setDrinksTitles] = useState([])
  const [state, setState] = useState({
    loading : false,
    error: null
  })
  
  const {loading, error} = state

  useEffect(()=>{
    const fetchDrinks = async () =>{
      setState({loading:true, error: null})
      try{
        const data = await fetchDrinksAPI("margarita");
        setDrinks((prevState => []))
        setDrinks((prevState => prevState.concat(data)))
        setDrinksTitles((prevState)=> [])
        setDrinksTitles((prevState)=> prevState.concat(drinks.keys()))
        console.log(data)
      } catch (e){
      setState({loading:false, error: e.message})
      }
    }
    fetchDrinks()
  },[drinks])

  const handleSearch = async (name) =>{
    setState({loading:true, error: null})
    try{
      const data = await fetchDrinksAPI(name);
      setDrinks((prevState => []))
      setDrinks((prevState => drinks.concat(data)))
      setDrinksTitles((prevState)=> [])
      setDrinksTitles((prevState)=> prevState.concat(data))
      console.log(data)
    } catch (e){
    setState({loading:false, error: e.message})
    }
  }  


  return (
    <Box bg="gray.100" minHeight="100vh" fontSize="16px">
      <NavBar></NavBar>

      <Flex w="100vw" h="91vh"> 
        <Container  margin="0" padding="1rem 1rem 10px 2rem" w="30%" h="100%" display="flex" flexDir="column">
            <Search handleSearch={handleSearch}></Search>
            <List marginTop="1rem" borderWidth="1px" borderRadius="lg" p="0 0.5rem 5px 0.5rem" flexGrow="1">
              {error ? <p>Hubo un error..</p> : ""}
              {drinksTitles.map(
                d => <DrinkTitle>{d}</DrinkTitle>
              )}
              <Skeleton isLoaded={!loading} marginTop="0.5rem" h="2rem"></Skeleton>
            </List>
        </Container>
        <Container margin="0" padding="5px" w="70%" h="100%">
          adw
        </Container>
      </Flex>
    </Box>
  )
}



export default App;
