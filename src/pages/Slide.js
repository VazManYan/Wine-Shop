import ImageSlider from "./ImageSlider";

const Slide = () => {
  const slides = [
    { url: "http://localhost:3000/SlideImages/Slide1.jpg"},
    { url: "http://localhost:3000/SlideImages/Slide2.jpg"},
    { url: "http://localhost:3000/SlideImages/Slide3.jpg"},
    { url: "http://localhost:3000/SlideImages/Slide4.jpg"},
    { url: "http://localhost:3000/SlideImages/Slide5.jpg"},
    { url: "http://localhost:3000/SlideImages/Slide6.jpg"},
    { url: "http://localhost:3000/SlideImages/Slide7.jpg"},
    { url: "http://localhost:3000/SlideImages/Slide8.jpg"},    
  ];
  const containerStyles = {
    width: '100%',
    height: "420px",
   
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} parentWidth={window.innerWidth} />
      </div>
    </div>
  );
};

export default Slide;


 