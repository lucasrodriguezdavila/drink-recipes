import { Text, Flex } from '@chakra-ui/react'
import React from 'react'
import {FaCocktail} from 'react-icons/fa'



export const NavBar = () => {
    return (
        <Flex boxShadow="lg" minHeight="9vh" bg="yellow.400" align="center">
            <Flex alignItems="baseline" fontSize="2rem" paddingLeft="2rem">
                <FaCocktail size="0.9em"></FaCocktail><Text as="h1" paddingLeft="4px">Drink!</Text>
            </Flex>
        </Flex>
    )
}
