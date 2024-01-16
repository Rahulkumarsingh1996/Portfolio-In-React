import React,{useEffect} from "react";


const Data = ({theamLight}) => {
  const textColorStyle = theamLight ? { color: 'white' } : null;

    // const backgroundButtonColorStyle = theamLight ? { color: 'white' } : null;
    // const textbuttonColorStyle = theamLight ? { color: 'black' } : null;
    const backgroundButtonColorStyle = theamLight ? { backgroundColor: 'white', color: 'black' } : null;
  useEffect(() => {
    console.log("theamLight in Home component:", theamLight);
  }, [theamLight]);

  return (
    <div className="home__data" >
      <h1 className="home__title" style={textColorStyle}>
        Rahul Singh
      </h1>
      <h3 className="home__subtitle" style={textColorStyle}>Front-end Developer </h3>
      <p className="home__description" style={textColorStyle}>I'm very passionate and dedicated to my work.</p><br/>

      <a href="#contact" className="button button--flex" style={backgroundButtonColorStyle} >
        say Hello<i class="uil uil-message"></i>
      </a>
    </div>
  );
};

export default Data;
