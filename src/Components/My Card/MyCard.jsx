import { useLoaderData } from "react-router-dom";
import ProductLayout from "./ProductLayout";


const MyCard = () => {
    const products = useLoaderData()

    return (
        <div>
            <h2>cards : {products.length}</h2>
            <div className="grid grid-cols-1   md:grid-cols-3 lg:grid-cols-3 container mx-auto gap-4 mt-3">
                {
                    products.map(product => <ProductLayout key={product._id} product={product}></ProductLayout>)
                }

            </div>

        </div>
    );
};

export default MyCard;