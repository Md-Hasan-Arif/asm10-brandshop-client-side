import { Link } from "react-router-dom";


const ProductLayout = ({product}) => {
    console.log(product)
    const {photo,BrandName, Description,price, Rating, Type} = product
    return (
        <div>
            <div className="card card-compact bg-white gap-4 mt-4 border-2" >
                <figure><img className="w-full h-48 " src={photo} alt="" /></figure>
                <div className=" ">
                    <div>
                        <h2 className=" text-4xl  text-black font-semibold">{BrandName}</h2>
                        <p className="text-base font-normal" >Type:{Type}</p>
                        <p className="text-base font-normal" >{Description}</p>
                        <p className="text-base font-normal" >Price:{price}</p>
                        
                       
                       
                       
                    </div>

                </div>
                <div className=" text-center mt-2">
                    <Link to={'/details/:id'}>
                        <button className="btn btn-error bg-orange-600">Delete product</button>
                    </Link>

                </div>

             </div>
        </div>
    );
};

export default ProductLayout;