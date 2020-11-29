import React from 'react'
import {Box, Image ,Flex,SimpleGrid, Text} from '@chakra-ui/react'

export const CocktailInfo = ({drink}) => {
    
    const ingredientes = [];
    const ingredienteskeys = Object.keys(drink).filter((key) =>
      key.includes("strIngredient")
    );
    const measureKeys = Object.keys(drink).filter((key) =>
      key.includes("strMeasure")
    );
    const newIngredientes = [];
    const newMeasures = [];
    ingredienteskeys.forEach((key) => {
      if (typeof drink[key] === "string") {
        newIngredientes.push(drink[key]);
      }
    });
    measureKeys.forEach((key) => {
        if (typeof drink[key] === "string") {
          newMeasures.push(drink[key]);
        }
      });

    newIngredientes.forEach((key,i)=>{
        ingredientes.push({ingrediente:newIngredientes[i], measure: newMeasures[i]})
    })

    return (
        <Flex
        boxShadow="2xl" bg="yellow.400" minHeight="80%" w="90%" borderRadius="1rem" align="flex-start">
            <Box h="80%" w="40%" marginTop="1rem" marginLeft="1.25rem">
                <Image
                boxShadow="md"
                borderRadius="1rem"
                h="100%"
                w="100%"
                objectFit="cover"
                src={drink.strDrinkThumb}></Image>
            </Box>
            <Flex w="60%" flexDir="column" align="flex-start" marginTop="3rem">
                <Flex boxShadow="md" minHeight="3rem" minWidth="100%" bg="yellow.500" align="center">
                    <Text marginLeft="1rem" marginRight="1rem" as="h2" fontWeight="600" fontSize="1.5rem">{drink.strDrink}</Text>
                </Flex>
                <Flex marginX="1rem" marginY="0.5rem" flexDir="column">
                    <Flex>
                        <Text as="h3" fontWeight="500" fontSize="1.25rem">Serve in: <span style={{fontWeight:"400"}}>
                                {drink.strGlass}
                            </span></Text>
                    </Flex>
                    <Flex align="baseline" flexDir="column">
                        <Text as="h3" fontWeight="500" fontSize="1.25rem">Ingredients:</Text>
                        <SimpleGrid marginLeft="0.5rem" marginTop="0.25rem" columns={2} spacing="1px" fontWeight="500">
                            {ingredientes.map((e)=>(
                                <Flex key={e.ingrediente} alignItems="baseline">- {`${e.ingrediente}  ${e.measure ? e.measure : ""}`}</Flex>
                             ))}
                        </SimpleGrid>
                    </Flex>
                    <Flex marginTop="2rem" marginBottom="1rem">
                        <Text as="h2" fontWeight="500" fontSize="1.25rem">{drink.strInstructions}</Text>
                    </Flex>
                </Flex>

            </Flex>
        </Flex>
    )
}
