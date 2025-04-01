import React, { useState } from "react";
import Slider from "react-slick";
import "./style.css";
// import toast_milk from "../../assets/images/toast_milk.jpeg";
// import peach from "../../assets/images/peach.jpeg";
// import organicKiwi from "../../assets/images/organic-kiwi.jpeg";
// import redApple from "../../assets/images/red-apple.jpeg";

const CatSlider = () => {
  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
  ]);

  // const imageData = [
  //   {name:"toast and milk",
  //     url: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2025/2/17/9a80557e-0883-4cfc-8df8-131cc16b982e_5b72d6ab-7048-43ea-bd5d-f272416a4063",
  //   },
  //   {name:"masalas",
  //     url: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2025/2/17/2149e719-73f0-4109-a9f7-bb0c048f5f76_19da0609-b66c-4a58-aadc-9beec4a41a44",
  //   },
  //   {name:"Dry Fruit",
  //     url: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2025/2/17/2b94f8e8-6844-456d-b08d-76ec62165ffa_5aa2f885-3f5a-47aa-8795-2db52c7c1b41",
  //   },
  //   {name:"Meat-Seafood",
  //     url: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2025/2/27/6e4ae802-2187-410d-8b2b-5fd5f6e8e783_9208c4aa-06b7-4114-a4e9-343fa0e09a91",
  //   },
  //   {name:"Bakery",
  //     url: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2025/2/17/957f6644-12d4-4c73-be97-fd3eec4661e9_c7bd6a25-3b67-4663-a2ae-6b96f47c05e3",
  //   },
  //   {name:"Vegetables",
  //     url: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2025/2/17/bd6ddd23-fd3b-45e5-98b5-0ee5bf9e1a90_6b0a8824-66a7-4daa-a9c1-8cea12161588",
  //   },
  //   {name:"Fruits",
  //     url: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2025/2/17/f5e00d95-997e-4279-8dfd-1c2bbc5ace34_60228eb0-54da-4804-95eb-74ac84e006d6",
  //   },
  //   {name:"Cake & Milk",
  //     url: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2025/2/17/567052d8-9618-4ceb-bda1-f195fa78a2cc_eb30370f-cbe4-4e93-b4c1-d9c71622a11f",
  //   },
  //   {name:"Tea & Coffee",
  //     url: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2024/7/3/d0d4bf84-e337-4c4d-8320-0be4dde066a3_1a0e4888-355d-49b1-9a8c-2a9b8e71f678",
  //   },
  //   {name:"Snacks",
  //     url: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2025/3/4/50eba797-b232-4e97-b578-e60886b6a165_6ced657f-8c05-4e35-a01b-1631129664af",
  //   },
  // ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: 2000,
    centerMode: true,
  };
  return (
    <>
      <div className="catSliderSection">
        <div className="container-fluid">
          <h2 className="hd">Features Categories</h2>

          <Slider {...settings} className="cat_slider_Main">
            {itemBg.length !== 0 &&
              itemBg.map((item, key) => {
                return (
                  <div className="item">
                    <div className="info" style={{ background: item }}>
                      {/* {imageData.length !== 0 &&
                        imageData.map((image, key) => {
                          return (
                          <div className="info" style={{ background: item }}>
                            <img src={image.url}/>
                            <h5>{image.name}</h5>
                            <p>26 items</p>
                          </div>
                          )
                        })} */}
                      <img
                        src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2025/2/17/9a80557e-0883-4cfc-8df8-131cc16b982e_5b72d6ab-7048-43ea-bd5d-f272416a4063"
                        alt="toast and milk"
                      />
                      <h5>Rice & Atta</h5>
                      <p>26 items</p>
                    </div>
                  </div>
                );
              })}

            {/* <div className="item">
              <div className="info">
                <img
                  src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2025/2/17/9a80557e-0883-4cfc-8df8-131cc16b982e_5b72d6ab-7048-43ea-bd5d-f272416a4063"
                  alt="toast and milk"
                />
                <h5>Rice & Atta</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2025/2/17/2149e719-73f0-4109-a9f7-bb0c048f5f76_19da0609-b66c-4a58-aadc-9beec4a41a44" />
                <h5>Masalas</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2025/2/17/2b94f8e8-6844-456d-b08d-76ec62165ffa_5aa2f885-3f5a-47aa-8795-2db52c7c1b41" />
                <h5>DryFruit</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2025/2/27/6e4ae802-2187-410d-8b2b-5fd5f6e8e783_9208c4aa-06b7-4114-a4e9-343fa0e09a91" />
                <h5>Meat-Seafood</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2025/2/17/957f6644-12d4-4c73-be97-fd3eec4661e9_c7bd6a25-3b67-4663-a2ae-6b96f47c05e3" />
                <h5>Bakery</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2025/2/17/bd6ddd23-fd3b-45e5-98b5-0ee5bf9e1a90_6b0a8824-66a7-4daa-a9c1-8cea12161588" />
                <h5>Vegetables</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2025/2/17/f5e00d95-997e-4279-8dfd-1c2bbc5ace34_60228eb0-54da-4804-95eb-74ac84e006d6" />
                <h5>Fruits</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2025/2/17/567052d8-9618-4ceb-bda1-f195fa78a2cc_eb30370f-cbe4-4e93-b4c1-d9c71622a11f" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2024/7/3/d0d4bf84-e337-4c4d-8320-0be4dde066a3_1a0e4888-355d-49b1-9a8c-2a9b8e71f678" />
                <h5>Tea & Coffee</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2025/3/4/50eba797-b232-4e97-b578-e60886b6a165_6ced657f-8c05-4e35-a01b-1631129664af" />
                <h5>Snacks</h5>
                <p>26 items</p>
              </div>
            </div> */}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CatSlider;
