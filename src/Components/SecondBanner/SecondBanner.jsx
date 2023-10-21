import { Link } from "react-router-dom";


const SecondBanner = () => {
    return (
        <div className="mt-5">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/M2S3yq4/images-1.jpg)' }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Get 20% off</h1>
                        <p className="mb-5">Dont miss the chance</p>
                       
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;