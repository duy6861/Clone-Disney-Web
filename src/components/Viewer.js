import styled from "styled-components";

const Viewer = (props) => {
  return (
    <Container>
      <Warp>
        <img src='/images/viewers-disney.png' alt="img" />
        <video autoPlay loop playsInline muted preload="auto">
          <source src='/videos/disney.mp4' type="video/mp4" />
        </video>
      </Warp>
      <Warp>
        <img src='/images/viewers-pixar.png' alt="img" />
        <video autoPlay loop playsInline muted preload="auto">
          <source src='/videos/1564676714-pixar.mp4' type="video/mp4" />
        </video>

      </Warp>
      <Warp>
        <img src='/images/viewers-marvel.png' alt="img" />
        <video autoPlay loop playsInline muted preload="auto">
          <source src='/videos/1564676115-marvel.mp4' type="video/mp4" />
        </video>

      </Warp>
      <Warp>
        <img src='/images/viewers-starwars.png' alt="img" />
        <video autoPlay loop playsInline muted preload="auto">
          <source src='/videos/1608229455-star-wars.mp4' type="video/mp4" />
        </video>

      </Warp>
      <Warp>
        <img src='/images/viewers-national.png' alt="img" />
        <video autoPlay={true} loop={true} playsInline={true} muted preload="auto">
          <source src='/videos/1564676296-national-geographic.mp4' type="video/mp4" />
        </video>
      </Warp>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 768px){
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`
const Warp = styled.div`
  padding-top: 56%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0  / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow :hidden ;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.50, 0.94);
  border: 3px solid rgba(249,249,249, 0.1);
  img{
    inset: 0;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  video{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
    pointer-events: none;
    visibility: visible;
  }
  &:hover {
    video{
      opacity: 1;
    }
    box-shadow: rgb(0 0 0  / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    scale: 1.05;
    border-color: rgba(249,249,249, 0.8);
}

`
export default Viewer