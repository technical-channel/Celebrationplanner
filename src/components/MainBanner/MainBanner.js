import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import store1 from "../../assets/images/banner1.jpg";
import store2 from "../../assets/images/banner2.jpg";
import store3 from "../../assets/images/banner2.jpg";

import "./MainBanner.scss";

const MainBanner = () => {
  return (
    <div>
      <Carousel autoPlay={true}>
        <div>
          <img src={store1} />
        </div>
        <div>
          <img src={store2} />
        </div>
        <div>
          <img src={store3} />
        </div>
      </Carousel>
    </div>
  );
};

export default MainBanner;
