import React from 'react'
import { Container, VStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useProductStore } from '../store/product'
import { SimpleGrid } from '@chakra-ui/react'
import ProductCard from '../components/ProductCard'




const HomePage = () => {
    const { fetchProduct, products } = useProductStore();
    useEffect(() => {
        fetchProduct();
    }, [fetchProduct])
    console.log(products)
    return (
        <Container maxW='container.xl' py={12}>
            <VStack spacing={8}>
                <Text
                    fontSize={"30"}
                    fontWeight={"bold"}
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={"text"}
                    textAlign={"center"}
                >
                    Current Products
                </Text>
                <SimpleGrid
                    columns={{
                        base: 1,
                        md: 2,
                        lg: 3,
                    }}
                    spacing={10}
                    w="full"
                >
                    {products && products.length > 0 ? (
                        products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}

                            />
                        ))
                    ) : (
                        <p>No products found</p>
                    )}
                </SimpleGrid>

                {products.length === 0 && (
                    <Text
                        fontSize="xl"
                        textAlign="center"
                        fontWeight="bold"
                        color="gray.500"
                    >
                        No products found 😢{" "}
                        <Link to={"/create"}>
                            <Text
                                as="span"
                                color="blue.500"
                                _hover={{ textDecoration: "underline" }}
                            >
                                Create a product
                            </Text>
                        </Link>
                    </Text>
                )}



            </VStack>
        </Container>
    )
}

export default HomePage