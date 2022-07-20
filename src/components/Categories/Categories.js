import { Link } from "react-router-dom";

import Title from "../Title/Title";
import Category from "./Category/Category";

import shirt from "../../assets/images/categories/gift1.jpg";
import shoes from "../../assets/images/categories/gift2.jpg";
import head from "../../assets/images/categories/gift3.jpeg";

const Categories = () => {
  return (
    <>
      <section className="py-5 section-bg">
        <div className="container">
          <Title title="BROWSE OUR CATEGORIES" />
          <div className="row">
            <div className="col-6 col-md-4 mb-4 mb-md-0 mx-auto">
              <Link to="/shirts">
                <Category image={shirt} title="Gifts" />
              </Link>
            </div>
            <div className="col-6 col-md-4 mx-auto mb-4 mb-md-0 ">
              <Link to="/shoes">
                <Category image={shoes} title="Candle Light Dinner" />
              </Link>
            </div>
            <div className="col-6 col-md-4 mx-auto mb-4 mb-md-0">
              <Link to="/headphones">
                <Category image={head} title="Book A Room" />
              </Link>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-6 col-md-4 mb-4 mb-md-0 mx-auto">
              <Link to="/shirts">
                <Category image={shirt} title="Gifts" />
              </Link>
            </div>
            <div className="col-6 col-md-4 mx-auto mb-4 mb-md-0 ">
              <Link to="/shoes">
                <Category image={shoes} title="Candle Light Dinner" />
              </Link>
            </div>
            <div className="col-6 col-md-4 mx-auto mb-4 mb-md-0">
              <Link to="/headphones">
                <Category image={head} title="Book A Room" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
