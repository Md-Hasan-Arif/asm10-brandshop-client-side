import { Link } from "react-router-dom";


const DetailsLayout = ({ brand }) => {
    console.log(brand)
    const { _id, photo, BrandName, Description, price, Rating, Type } = brand;
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
                        <div className="rating gap-1">
                            <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
                        </div>
                    </div>

                </div>
                <div className=" text-center mt-2 ">

                    <Link to={`/productsDetails/${_id}`}>
                        <button className="btn btn-black">Details</button>
                    </Link>
                    <Link to={`/updateProduct/${_id}`}>
                        <button className="btn btn-black">Update Product</button>
                    </Link>


                </div>

            </div>
        </div>
    );
};

export default DetailsLayout;