import { useLoaderData } from "react-router-dom";
import ProductLayout from "./ProductLayout";
import { useState } from "react";


const MyCard = () => {
    const loadedProducts = useLoaderData()
    const [products, setProducts] = useState(loadedProducts);

    return (
        <div>
            <h2 className="text-5xl font-bold text-center"> Your Cards</h2>
            <div className="grid grid-cols-1   md:grid-cols-3 lg:grid-cols-3 container mx-auto gap-4 mt-3">
                {
                    products.map(product => <ProductLayout key={product._id} product={product}
                    products={products} setProducts={setProducts}></ProductLayout>)
                }

            </div>

        </div>
    );
};

export default MyCard;