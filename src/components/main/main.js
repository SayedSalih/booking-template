import React, { useState } from "react";
 
function Main (props) {
  let placeData = props.placeData;
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div>
      <h1>Other Popular Destinations</h1>
      <div id="grid-wrapper" className="grid-pattern">
        {
          placeData && placeData.map((item, index)=>{
            return(
              <section className="card" key={index} >
                <div className={index === activeIndex ? 'selected' : null}>
                <div className="button-container">
                  <img src={`${item.imgurl}`} alt="Thumbnail"/>
                  <div className="container-items">
                    <h5><b>{item.name}</b></h5> 
                    <p>
                      <span>{item.description}</span>
                      <a href="details">Details</a>
                    </p>
                  </div>
                  <span className= "select-button">
                    <button className={index === activeIndex ? "fa fa-check" : "fa fa-plus"} alt="select item" data-index={index} onClick={() => setActiveIndex(index)}></button>
                  </span>
                </div>
                </div>
              </section>
            )
          })
        }
      </div>
    </div>
  );
}

export default Main;