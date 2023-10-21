import { useLoaderData, useParams } from "react-router-dom";
import DetailsLayout from "../../Second components/DetailsLayout";


const BrandDetails = () => {

    const Details = useLoaderData();
    // console.log(Details)
    const name = useParams()
    console.log(name)
    const Brands = Details.filter(detail => detail.BrandName === name.brandName)
    // console.log(Brands)



    return (
        <div>

            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Np19Bn1/images-16.jpg" className="w-full h-screen" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/yhhpQBB/z-1.jpg" className="w-full h-screen" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/bJnhGLS/adidas-2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1   md:grid-cols-3 lg:grid-cols-3 container mx-auto gap-4 mt-3">
                {
                    Brands.map(brand => <DetailsLayout key={brand._id} brand={brand}></DetailsLayout>)
                }
            </div>

        </div>
    );
};

export default BrandDetails;