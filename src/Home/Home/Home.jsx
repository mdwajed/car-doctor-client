import Contact from "../../Pages/Contact";
import Features from "../../Pages/Features";
import OurProducts from "../../Pages/OurProducts";
import Team from "../../Pages/Team";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Service from "./Service/Service";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
    return (
        <>
       <Banner></Banner>
      <AboutUs></AboutUs>
      <Service></Service>
      <Contact></Contact>
      <OurProducts></OurProducts>
      <Team></Team>
      <Features></Features>
      <Testimonial></Testimonial>
      </>
    );
};

export default Home;