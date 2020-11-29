import {ListItem, Box, Button, Flex} from '@chakra-ui/react'
import {FaBook} from 'react-icons/fa'
export const DrinkTitle = ({drink, children}) => {
    return (
        <ListItem fontWeight="600" w="100%" h="2rem" display="flex" alignItems="center" justifyContent="space-between" borderWidth="1px" borderRadius="lg" p="0.9rem 1rem 0.9rem 1rem" marginTop="0.5rem">
            <Box borderColor="red">
                {children}
            </Box>
            <Flex alignItems="baseline" >
    <Button variant="link" size="sm"> <FaBook></FaBook>Recipe</Button>
            </Flex>
        </ListItem>
    )
}
