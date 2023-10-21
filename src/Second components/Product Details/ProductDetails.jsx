import { useLoaderData, useParams } from "react-router-dom";


const ProductDetails = () => {
    const detailsData = useLoaderData();
    const productId = useParams();
    const FindProduct = detailsData.find(datum => datum._id !== productId._id)
    console.log(FindProduct)
    const { _id, photo, BrandName, Description, price, Rating, Type } = FindProduct;

    const HandleAddCard=(FindProduct)=>{
        console.log(FindProduct)
        fetch('http://localhost:5000/saveProduct',{
            method : 'POST',
            headers:{
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
         <button onClick={()=>HandleAddCard(FindProduct)}>Add to Card</button>  
        </div>
    );
};

export default ProductDetails;