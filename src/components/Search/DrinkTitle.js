import {ListItem, Box, Button, Flex} from '@chakra-ui/react'
import {FaBook} from 'react-icons/fa'
export const DrinkTitle = ({drink, children, id, handleShowCard}) => {
    //funcion del botton Recipe de los resultados, muestra la tarjeta del trago
    const showCard = () =>{
        handleShowCard(id)
    }
    //resultado de la busqueda
    return (
        <ListItem 
        fontWeight="600" 
        boxShadow="base"
        w="100%" 
        minHeight="2rem"
        display="flex"
        alignItems="center" 
        justifyContent="space-between" 
        borderWidth="1px" 
        borderRadius="lg" 
        p="0.4rem 0.5rem 0.45rem 0.5rem" marginTop="0.25rem">
            <Box borderColor="red">
                {children}
            </Box>
            <Flex alignItems="baseline" >
                <Button onClick={showCard} variant="link" size="sm"> <FaBook></FaBook>Recipe</Button>
            </Flex>
        </ListItem>
    )
}
