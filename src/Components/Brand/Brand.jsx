import { useEffect, useState } from "react";
import BrandLayout from "./BrandLayout";


const Brand = () => {
    const [Brands, setBrand] = useState([])
 


    useEffect(() => {
        fetch('/Brand.json')
            .then(res => res.json())
            .then(data => setBrand(data))
    }, [])
    return (

        <div>
            <h2 className="text-center text-5xl font-semibold mt-10">Brand You will get here</h2>
            <div className="grid grid-cols-1   md:grid-cols-3 lg:grid-cols-3 container mx-auto gap-4 mt-3">

                {
                    Brands.map(brand => <BrandLayout key={brand.id} brand={brand}></BrandLayout>)
                }
            </div>
        </div>
    );
};

export default Brand;