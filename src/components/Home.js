import styled from "styled-components"
import ImgSlide from "./ImgSlide"
import Viewer from "./Viewer"
import Recommends from "./Recommends"
const Home = (props) => {
  return (
    <Container>
      <ImgSlide />
      <Viewer />
      <Recommends />
    </Container>
  )

}
const Container = styled.section`
    position: relative;
    min-height: calc( 100vh - 250px );
    overflow-x: hidden;
    display: block;
    
    top:72px;
    padding: 0 3.5vw;
    &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed; 
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
 
  `

export default Home