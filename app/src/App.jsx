import Nav from "./Components/Nav";
import styled from "styled-components";
import Hero from "./Components/Hero";


const Styled=styled.div`
  font-family: 'Poppins', sans-serif;
`

const App = () => {

  return <Styled><Nav/><Hero className='bgimg' /></Styled>;
};

export default App;
