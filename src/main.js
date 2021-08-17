import About from "./about";

import "./styles/style.css";
import Cards from "./cards";
import Navbar from "./navbar";
import Slider from "react-slick";

import React, {useState, useEffect} from "react";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import data  ,{paragraph} from "./data"
import classes from "./styles/section.module.css"



const mainApp = () => {
  // const isMobile = useMediaQuery({ query: "(max-width: 600px)"})

  return ( <Home/>  );
};




const Home =()=>{
    let strin = "Hello, My Name Is Prince";
    strin = [...strin];
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <section className="section body ">
          <h1 class="h1">
            {strin.map((e) => {
              if (e == " ") return <div className="charWidth">{e}</div>;
              return <span className="span">{e}</span>;
            })}
          </h1>
        
            <p className="subtitle">Welcome to my website!</p>
        
        </section>
        <About/>
        <Sections />
        <section className={`card-list list`} style={{ marginTop:"5rem"}}>
          {data.map((item) => (
            <Cards {...item} />
          ))}
        </section>
        <div className="abs">
          <Slider {...settings} className="list">
            {data.map((item) => (
              <Cards className="absolute"  {...item} />
            ))}
          </Slider>
        </div>
      </main>
    </div>
  );
}
const Sections = ()=>{
  const [comp, setcomp] = useState(false)
  const {section, para, rev} = classes     

  return (
    <section className={section}>
     {paragraph.map(({img, text}, index)=>{
return <Compon img={img} text ={text} index={index}/>
     }) }
    </section>
  );
}
const Compon = ({text, index, img})=>{
    const [comp, setcomp] = useState(false);
    const { para, rev, container } = classes;
  useEffect(() => {
  //  if  setcomp(!comp);
  if (index % 2 === 0) setcomp(true);
  else setcomp(false);
  }, []);

return (
  <div className={comp ? rev:container}>
    <img className={para} src={img} alt="image" />
    <div className={para}>
      <p>{text}</p>
    </div>
  </div>
);

}
export default mainApp;
