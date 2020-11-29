import { Input, Flex, Button } from '@chakra-ui/react'
import {useState} from 'react'

const SearchInput = ({text, setText}) => {
    return (
        <Input onChange={
            (e)=>{
                let input = e.target.value;
                setText(input)}} 
        minWidth="30%" 
        type="search" value={text} 
        placeholder="Margarita, white russian.." 
        focusBorderColor="yellow.500"/>
    )
}

export const Search = ({handleSearch}) => {
    const [text, setText] = useState("")

    return(
        <Flex>
            <SearchInput text={text} setText={setText}></SearchInput>
            <Button 
            onClick={handleSearch(text)}
            marginLeft="10px" 
            colorScheme="yellow">Buscar</Button>
        </Flex>
    )
}