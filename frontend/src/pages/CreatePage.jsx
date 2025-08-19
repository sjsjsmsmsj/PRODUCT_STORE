import React, { useState } from "react";
import {
    VStack,
    Heading,
    useColorModeValue,
    Box,
    Container,
    Input,
    Button
} from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import { useToast } from "@chakra-ui/react";


const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: ""
    });

    const toast = useToast()

    const { createProduct } = useProductStore();
    const [loading, setLoading] = useState(false);

    const handleAddProduct = async () => {
        setLoading(true);
        const productData = {
            ...newProduct,
            price: parseFloat(newProduct.price) || 0
        };
        const { success, message } = await createProduct(productData);

        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 5000,
                isClosable: true
            })
        }
        setLoading(false);
    };

    return (
        <Container maxW="container.sm">
            <VStack mb={6}>
                <Heading as="h1" size="2xl">
                    Create Page
                </Heading>
            </VStack>
            <Box
                w="full"
                bg={useColorModeValue("white", "gray.700")}
                p={6}
                rounded="lg"
                shadow="md"
            >
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleAddProduct();
                    }}
                >
                    <VStack spacing={4}>
                        <Input
                            placeholder="Product Name"
                            value={newProduct.name}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, name: e.target.value })
                            }
                        />
                        <Input
                            placeholder="Price"
                            type="number"
                            value={newProduct.price}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, price: e.target.value })
                            }
                        />
                        <Input
                            placeholder="Image URL"
                            value={newProduct.image}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, image: e.target.value })
                            }
                        />
                        <Button
                            colorScheme="blue"
                            type="submit"
                            isLoading={loading}
                            loadingText="Adding..."
                        >
                            Add Product
                        </Button>
                    </VStack>
                </form>
            </Box>
        </Container>
    );
};

export default CreatePage;
