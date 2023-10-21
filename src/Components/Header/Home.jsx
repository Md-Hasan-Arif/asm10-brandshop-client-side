import Brand from "../Brand/Brand";
import SecondBanner from "../SecondBanner/SecondBanner";
import Trend from "../Trend";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brand></Brand>
            <SecondBanner></SecondBanner>
            <Trend></Trend>
        </div>
    );
};

export default Home;