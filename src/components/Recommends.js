import styled from "styled-components";
import { Link } from "react-router-dom";
const Recommends = (props) => {
  return (
    <Container>
      <h4> Recommends For You</h4>
      <Content>
        <Wrap>
          <Link to='/'>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg' alt="img" />
          </Link>
        </Wrap>
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

`
export default Recommends