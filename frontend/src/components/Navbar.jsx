import React from 'react'
import { Container, Flex, Text, Link } from '@chakra-ui/react'
import { HStack, Button } from '@chakra-ui/react'
import { PlusSquareIcon } from '@chakra-ui/icons'
import { useColorMode } from '@chakra-ui/react'
import { IoMoon } from 'react-icons/io5'
import { LuSun } from 'react-icons/lu'
import { useColorModeValue } from '@chakra-ui/react'
import { useProductStore } from '../store/product'



const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const products = useProductStore();

    return (
        <Container maxW={"1140px"} px={4} >
            <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={{
                    base: "column",
                    sm: "row"
                }}
            >
                <Text
                    fontSize={{ base: "22", sm: "28" }}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgclip={'text'}
                >
                    <Link to={'/'} >Product Store 🛒</Link>
                </Text>
                <HStack spacing={8} alignItems={"center"}>
                    <Link to={'/create'}>
                        <Button>
                            <PlusSquareIcon />
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <IoMoon /> : <LuSun />}
                    </Button>

                </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar