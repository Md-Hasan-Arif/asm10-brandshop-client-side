import Brand from "../Brand/Brand";
import SecondBanner from "../SecondBanner/SecondBanner";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brand></Brand>
            <SecondBanner></SecondBanner>
        </div>
    );
};

export default Home;