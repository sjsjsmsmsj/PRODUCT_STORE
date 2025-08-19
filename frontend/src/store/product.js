import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],

    setProducts: (products) => set({ products: Array.isArray(products) ? products : [] }),

    createProduct: async (newProduct) => {
        try {
            if (!newProduct.name || !newProduct.price || !newProduct.image) {
                return { success: false, message: "Please fill in all fields." }
            }
            const res = await fetch("http://localhost:3000/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct),
            });

            if (!res.ok) {
                const text = await res.text();
                console.error("Server error:", text);
                return { success: false, message: "Server error: " + res.status };
            }

            const data = await res.json();
            set((state) => ({ products: [...state.products, data.data] }));
            return { success: true, message: "Product created successfully." };
        } catch (err) {
            console.error("Create product failed:", err);
            return { success: false, message: "Invalid response from server." };
        }
    },


    fetchProduct: async () => {
        try {
            const res = await fetch("http://localhost:3000/api/products");
            const data = await res.json();

            const products = Array.isArray(data.data)
                ? data.data
                : Array.isArray(data)
                    ? data
                    : [];

            set({ products });
        } catch (err) {
            console.error("Fetch error:", err);
            set({ products: [] });
        }
    },

    deleteProduct: async (id) => {
        const res = await fetch(`http://localhost:3000/api/products/${id}`, {
            method: "DELETE",
        });
        const data = await res.json();
        set((state) => ({
            products: state.products.filter((product) => product._id !== id),
        }));
        return data;
    },
    updateProduct: async (id, updatedProduct) => {
        try {
            const res = await fetch(`http://localhost:3000/api/products/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedProduct),
            });

            const data = await res.json();

            if (!res.ok) {
                return { success: false, message: data.message || "Failed to update product" };
            }

            // cập nhật lại state products
            set((state) => ({
                products: state.products.map((p) =>
                    p._id === id ? { ...p, ...updatedProduct } : p
                ),
            }));

            return { success: true, message: "Product updated successfully" };
        } catch (err) {
            return { success: false, message: err.message };
        }
    },



}));
