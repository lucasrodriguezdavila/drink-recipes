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
    const search =() =>{
        handleSearch(text)
    }
    return(
        <Flex as="form" onSubmit={(e)=>{
            e.preventDefault();
            search();
        }}>
            <SearchInput text={text} setText={setText}></SearchInput>
            <Button
            boxShadow="md"
            onClick={search}
            marginLeft="10px" 
            colorScheme="yellow">Buscar</Button>
        </Flex>
    )
}