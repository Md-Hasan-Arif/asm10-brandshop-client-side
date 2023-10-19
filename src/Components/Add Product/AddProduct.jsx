import Swal from 'sweetalert2'

const AddProduct = () => {

    const handleProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const BrandName = form.brandName.value;
        const Type = form.types.value;
        const price = form.price.value;
        const Description = form.description.value;
        const Rating = form.rating.value;
        const photo = form.photo.value;

        const newProduct = { name, BrandName, Type, price, Description, Rating, photo };
        console.log(newProduct)

        // send data to the server
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your product added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

        //  .then(res => res.json())
        //  .then(data => {
        //     console.log(data)
        //     if(data.insertedId){
        //         Swal.fire({
        //             position: 'top-end',
        //             icon: 'success',
        //             title: 'Sabass beta added successfully',
        //             showConfirmButton: false,
        //             timer: 1500
        //           })
        //     }
        //  })
    }
    return (
        <div className=" bg-[#F4F3F0] p-4 md:p-24 ">
            <h2 className=" text-4xl font-extrabold">Add a Product</h2>
            <form onSubmit={handleProduct}>
                {/* Form => name and Brand name row */}
                <div className="md:flex ">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text" >Product Name </span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Product Name" name="name" className="input input-bordered md:w-full" />
                        </label>
                    </div>

                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text" >Brand Name </span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Brad Name" name="brandName" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* Form => Type and Price row*/}
                <div className="md:flex   ">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text" >Type </span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Type" name="types" className="input input-bordered md:w-full" />
                        </label>
                    </div>

                    <div className="form-control w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text" >Price </span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Price" name="price" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* Form => short description and rating*/}
                <div className="md:flex   ">
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text" >Short Description </span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Short Description" name="description" className="input input-bordered md:w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text" >Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Rating" name="rating" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* Form image row */}
                <div className="   ">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text" >Photo URL </span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered md:w-full" />
                        </label>
                    </div>


                </div>
                <input type="submit" value="Add Product" className=" mt-4 btn btn-block bg-slate-700 text-white hover:text-black" />
            </form>
        </div>
    );
};

export default AddProduct;