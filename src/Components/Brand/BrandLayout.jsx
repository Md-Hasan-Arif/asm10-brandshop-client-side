import { Link } from "react-router-dom";


const BrandLayout = ({brand}) => {
    const {imageURL, brandName }= brand;
    return (
        <div>
            <Link to={`/BrandDetails/${brandName}`}>
            <div className="card card-compact bg-white gap-4 mt-4 border-2" >
                <figure><img className="w-full h-48 " src={imageURL} alt="" /></figure>
                <div className=" ">
                    <div>
                        <h2 className=" text-4xl text-center text-black font-semibold">{brandName}</h2>
                        {/* <p className="text-base font-normal" >{description}</p>
                        <p>Price : ${price}</p> */}
                    </div>

                </div>
              

             </div>
            </Link>
           
        </div>

        
    );
};

export default BrandLayout;