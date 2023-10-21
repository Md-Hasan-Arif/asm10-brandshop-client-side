
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ProductLayout = ({ product, products, setProducts }) => {
    console.log(product)
    const { _id, photo, BrandName, Description, price, Rating, Type } = product;

    const handleDelete = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(` https://my-10-server-kclfptc8o-md-hasan-arifs-projects.vercel.app/addProduct/${_id}`, {
                    method: 'Delete'

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                            const remaining = products.filter(prod => prod._id !== _id)
                            setProducts(remaining);

                        }
                    })
            }
        })
    }
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
                <div className=" text-center mt-2 ">
                    <button onClick={() => handleDelete(_id)} className="btn btn-black">Delete product</button>

                    <Link to={`/updateProduct/${_id}`}>
                        <button className="btn btn-black">Update Product</button>
                    </Link>


                </div>

            </div>
        </div>
    )
};

export default ProductLayout;