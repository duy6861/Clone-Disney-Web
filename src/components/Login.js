import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src='/images/cta-logo-one.svg' alt="img" />
          <SignUp>GET ALL THERE</SignUp>
          <p>
            Get Premier Access to Ray and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/06/2022, the price of Disney+ and The Disney Bundle wil increase by $1
          </p>
          <CTALogoTwo src='/images/cta-logo-two.png' alt="img" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  )
}

const Container = styled.section`
overflow: hidden;
display: flex;
  `

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display : flex ;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`
const BgImage = styled.div`
  background-image: url('/images/login-background.jpg');
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`
const CTA = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  width: 100%;
p{
  color: hsla(0, 0%,95.3%,1);
  font-size: 14px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
}
`
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width:100%
`
const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 1rem 0;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  text-align: center;
&:hover{
  background-color: #0483ee
}
transition: background-color 300ms linear;
`
const CTALogoTwo = styled.img`
min-width: 600px;
margin-bottom: 20px;
display: inline-block;
vertical-align: bottom;
width: 100%;
`
export default Login;
