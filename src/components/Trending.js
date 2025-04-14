import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Trending = (props) => {
  const trending = useSelector((state) => state.movie.trending)
  console.log(trending)
  return (
    <Container>
      <h4> Trending For You</h4>
      <Content>
        {
          trending && trending.map((item, key) => <Wrap key={key}>

            <Link to={`/detail/${item.id}`}>
              <img src={item.cardImg}
                alt="img" />
            </Link>
          </Wrap>
          )
        }
      </Content>
    </Container>
  )
}

const Container = styled.div`
  padding: 0 0 26px;
`
const Content = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media(max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0,1fr));
  }

`
const Wrap = styled.div`
padding-top: 56%;
border-radius: 10px;
box-shadow: rgb(0 0 0  / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor: pointer;
overflow: hidden;
position: relative;
transition: all 250ms ease-in-out;
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
  transition: opacity 500ms ease-in-out;
  top: 0;
}
&:hover{
  opacity: 1;
  box-shadow: rgb(0 0 0  / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 73%) 0px 30px 22px -10px;
  scale: 1.05;
  border-color: rgba(249,249,249, 0.8);
}
`
export default Trending