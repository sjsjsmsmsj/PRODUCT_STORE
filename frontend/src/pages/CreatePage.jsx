import React from 'react'
import { VStack, Heading, useColorMode } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { useState } from 'react'
import { Button } from '@chakra-ui/react'

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: "",
        image: ''
    })

    const handleAddProduct = async () => {

    }

    return (
        <Container maxW={"container.sm"}>
            <VStack>
                <Heading as={'h1'} size={"2xl"}>Create Page</Heading>
            </VStack>
            <Box w={"full"} bg={useColorModeValue("white", "gray.700")}
                p={6}
                rounded={"lg"}
                shadow={"md"}
            >
                <VStack spacing={4}>
                    <Input placeholder='Product Name' value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
                    <Input placeholder="Price" name="price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
                    <Input placeholder="Image URL" name="image" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} />
                    <Button colorScheme='blue' type='submit' onClick={handleAddProduct}>
                        Add Product
                    </Button>
                </VStack>
            </Box>

        </Container>

    )
}

export default CreatePage