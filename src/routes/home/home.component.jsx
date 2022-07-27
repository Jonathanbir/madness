import { useState } from "react";
import Slider from "react-slick";
import Video from "../../components/video/video.component";
import Banner from "../../components/banner/banner.component";
import { Link } from "react-router-dom";
import { useMedia } from "../../utils/hook/useMedia";

import "slick-carousel/slick/slick.css";
import "./home.styles.scss";

const Home = () => {
  const [hover, setHover] = useState(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const media = useMedia();

  const background = {
    banner01:
      "https://www.mdnsonline.com/image/data/Banners/20220326/banner_1_1.jpg",
    banner02:
      "https://www.mdnsonline.com/image/data/Banners/20220326/banner_2_1.jpg",
    banner03:
      "https://www.mdnsonline.com/image/data/Banners/20220326/banner_3_1.jpg",
    banner04:
      "https://www.mdnsonline.com/image/data/Banners/20220326/banner_4_1.jpg",
  };

  const mobileBanner = [
    "https://www.mdnsonline.com/image/data/Banners/20220326/banner_1_1.jpg",
    "https://www.mdnsonline.com/image/data/Banners/20220326/banner_2_1.jpg",
    "https://www.mdnsonline.com/image/data/Banners/20220326/banner_3_1.jpg",
    "https://www.mdnsonline.com/image/data/Banners/20220326/banner_4_1.jpg",
  ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        style={{
          width: "8px",
          height: "8px",
          backgroundColor: "white",
          opacity: i === currentIdx ? "0.8" : "0.2",
          margin: "0 6px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      />
    ),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "24px",
          left: "0px",
          right: "0px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ padding: 0, margin: 0, display: "flex" }}> {dots} </ul>
      </div>
    ),
    afterChange: (idx) => setCurrentIdx(idx),
  };

  return (
    <>
      {media === "desktop" ? (
        <div className="background">
          <Video />
          <div
            className="full-screen"
            style={{
              backgroundImage: `url(${hover})`,
            }}
          >
            <div className="home-background">
              <Banner
                title="MADNESS"
                onMouseEnter={() => setHover(background.banner01)}
                onMouseLeave={() => setHover(null)}
              />
              <Banner
                title="JPAN COLLECTION"
                onMouseEnter={() => setHover(background.banner02)}
                onMouseLeave={() => setHover(null)}
              />
              <Banner
                title="MAD_SUPPLY"
                onMouseEnter={() => setHover(background.banner03)}
                onMouseLeave={() => setHover(null)}
              />
              <Banner
                title="COLLABORATIONS"
                onMouseEnter={() => setHover(background.banner04)}
                onMouseLeave={() => setHover(null)}
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <Slider {...settings}>
            {mobileBanner.length > 0 &&
              mobileBanner.map((item) => (
                <Link to="shop/shirts">
                  <div key={item.idx}>
                    <div
                      className="banner-mobile"
                      style={{
                        backgroundImage: `url(${item})`,
                      }}
                    />
                  </div>
                </Link>
              ))}
          </Slider>
        </>
      )}
    </>
  );
};

export default Home;
