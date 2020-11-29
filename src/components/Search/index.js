import React from 'react'
import {Container, Skeleton, List, Box} from '@chakra-ui/react'
import {Search} from './Search'
import {DrinkTitle} from './DrinkTitle'

export const index = ({handleSearch, error, drinksTitles, handleShowCard, loading}) => {
    const skeletonSize = 9
    return (
        <Container  margin="0" padding="1rem 1rem 10px 2rem" w="30%" h="100%" display="flex" flexDir="column">
            {/**Search incluye boton e input. tiene dentro otro estado text**/}
            <Search handleSearch={handleSearch}></Search>
            {/**Lista de resultados, tiene skeletons mientras carga el fetch**/}
            <List marginTop="1rem" borderWidth="1px" borderRadius="lg" p="0 0.5rem 5px 0.5rem" flexGrow="1" overflowY="scroll">
              {error ? <Box marginTop="0.5rem" fontWeight="500" color="red.400">{error}</Box> : ""}
              {drinksTitles.map(
                d => <DrinkTitle key={d.id} handleShowCard={handleShowCard} id={d.id}>{d.title}</DrinkTitle>
              )}
              {[...Array(skeletonSize)].map( (e, i) =>  <Skeleton key={i} isLoaded={!loading} marginTop="0.5rem" h="2rem"></Skeleton>)}
            </List>
        </Container>
    )
}
