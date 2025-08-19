import {
    Box, Heading, Image, Text, useColorMode,
    IconButton, HStack, useColorModeValue, useToast,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter,
    ModalBody, ModalCloseButton, Button, Input, FormControl, FormLabel, useDisclosure
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useProductStore } from "../store/product";
import { useState } from "react";

const ProductCard = ({ product }) => {
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.700");
    const { deleteProduct, updateProduct } = useProductStore();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    // State lưu dữ liệu update
    const [form, setForm] = useState({
        name: product.name,
        price: product.price,
        image: product.image,
    });

    const handleDeleteProduct = async (id) => {
        const { success, message } = await deleteProduct(id);
        toast({
            title: success ? "Success" : "Error",
            description: message,
            status: success ? "success" : "error",
            duration: 5000,
            isClosable: true,
        });
    };

    const handleUpdateProduct = async () => {
        const { success, message } = await updateProduct(product._id, form);
        toast({
            title: success ? "Success" : "Error",
            description: message,
            status: success ? "success" : "error",
            duration: 5000,
            isClosable: true,
        });
        if (success) onClose();
    };

    return (
        <Box
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            transition="all 0.3s"
            bg={bg}
            color={textColor}
            _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
        >
            <Image
                src={product.image}
                alt={product.name}
                h={48}
                w="full"
                objectFit="cover"
            />
            <Box p={4}>
                <Heading as="h3" size="md" mb={2}>
                    {product.name}
                </Heading>
                <Text color="gray.600" fontWeight="bold">
                    ${product.price}
                </Text>
                <HStack spacing={2}>
                    <IconButton
                        icon={<EditIcon />}
                        aria-label="Edit product"
                        colorScheme="blue"
                        onClick={onOpen} // mở modal
                    />
                    <IconButton
                        icon={<DeleteIcon />}
                        aria-label="Delete product"
                        colorScheme="red"
                        onClick={() => handleDeleteProduct(product._id)}
                    />
                </HStack>
            </Box>

            {/* Modal Update */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl mb={3}>
                            <FormLabel>Name</FormLabel>
                            <Input
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                        </FormControl>
                        <FormControl mb={3}>
                            <FormLabel>Price</FormLabel>
                            <Input
                                type="number"
                                value={form.price}
                                onChange={(e) => setForm({ ...form, price: e.target.value })}
                            />
                        </FormControl>
                        <FormControl mb={3}>
                            <FormLabel>Image URL</FormLabel>
                            <Input
                                value={form.image}
                                onChange={(e) => setForm({ ...form, image: e.target.value })}
                            />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleUpdateProduct}>
                            Save
                        </Button>
                        <Button variant="ghost" onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default ProductCard;
