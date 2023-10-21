import { useLoaderData, useParams } from "react-router-dom";


const ProductDetails = () => {
    const detailsData = useLoaderData();
    console.log(detailsData)
    const productId = useParams();
    console.log(productId)
    const FindProduct = detailsData.find(datum => datum._id == productId.id)
    // console.log(FindProduct)
    const { _id, photo, BrandName, Description, price, Rating, Type } = FindProduct;
    // console.log(photo)

    const HandleAddCard = (FindProduct) => {
        console.log(FindProduct)
        fetch('https://my-10-server-kclfptc8o-md-hasan-arifs-projects.vercel.app/saveProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(FindProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    return (
        <div>
            <div className=" md:  bg-base-200">
                <img className="w-full max-h-80" src={photo} alt="" />
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">{BrandName}</h1>
                        <p className="py-1">{Description}</p>
                        <p className="py-1">{Type }</p>
                        <p className="py-1">{price}</p>
                        
                        <button className="btn btn-primary" onClick={() => HandleAddCard(FindProduct)}>Add to Card </button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ProductDetails;