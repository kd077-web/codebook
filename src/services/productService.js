export async function getProductList(searchTerm) {
    try {
        const response = await fetch(`${process.env.REACT_APP_HOST}/444/products?name_like=${searchTerm ? searchTerm : ""}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText} (Status: ${response.status})`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch product list:", error);
        throw error;
    }
}

export async function getProduct(id) {
    try {
        const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText} (Status: ${response.status})`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch product:", error);
        throw error;
    }
}

export async function getFeaturedList() {
    try {
        const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText} (Status: ${response.status})`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch featured products:", error);
        throw error;
    }
}
