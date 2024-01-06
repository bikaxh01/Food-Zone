import Nav from "./Components/Nav";
import styled from "styled-components";
import Hero from "./Components/Hero";
import { createGlobalStyle } from "styled-components";
import Cards from "./Components/Cards";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  
  *{
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-image: url("https://www.bookhubpublishing.com/wp-content/uploads/revslider/the7-book-header/bg-slider-book-1500x750.jpg");
  background-size: cover;
}`;

const URL = "http://localhost:9000/";

const App = () => {

  const[data,setdata]=useState(null)
  const [loader,setloader]=useState(false)
  const [Error,seterror]=useState(null)

    const response= async () => {
      setloader(true)
      try{
        
        const data =  await fetch(URL);
        const res = await data.json();
        setloader(false)
        setdata(res)
      }
       catch (error){
        seterror("Unable to fetch Data",error)
      }
    };
    
    if(Error) return <div>{Error}</div>
    if (loader) return <div>Loading...</div>

    
    
    
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Hero />
      <Cards />
    </>
  );
};

export default App;
