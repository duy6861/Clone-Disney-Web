import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const ImgSlide = (props) => {
  let setting = {
    dots: true,  // Hiển thị các dấu chấm để điều hướng
    infinite: true,  // Lặp lại carousel vô hạn
    speed: 500,  // Thời gian chuyển tiếp
    slidesToShow: 1,  // Số lượng slide hiển thị một lúc
    slidesToScroll: 1,  // Số lượng slide cuộn mỗi lần
    autoplay: true,  // Tự động chuyển tiếp
  }
  return (
    <div>
      <Carousel {...setting}>
        <Wrap>
          <a href="/">
            <img src="/images/slider-badging.jpg" alt="img-slide">

            </img>
          </a>
        </Wrap>
        <Wrap>
          <a href="/">
            <img src="/images/slider-scale.jpg" alt="img-slide">

            </img>
          </a>
        </Wrap>
        <Wrap>
          <a href="/">
            <img src="/images/slider-badag.jpg" alt="img-slide">

            </img>
          </a>
        </Wrap>
        <Wrap>
          <a href="/">
            <img src="/images/slider-scales.jpg" alt="img-slide">

            </img>
          </a>
        </Wrap>
      </Carousel>
    </div>
  )

}
const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button{
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover{
      opacity: 1;
     transition: opacity 0.2s ease 0s;
    }
    
  }
  ul li button{
      &:before{
        font-size: 10px;
        color: rgb(158, 158, 171)
      }
    }
    ul li.slick-active button:before {
    color: #fff;  /* Màu trắng cho chấm đang được chọn */
  }
  .slick-list{
    overflow: initial;
  }
  .slick-prev{
    left: -75px;
  }
  .slick-next{
    right: -75px;
  }
`
const Wrap = styled.div`
border-radius: 4px;
cursor: pointer;
position: relative;
a{
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  display: block;
  position: relative;
  padding: 4px;

  img{
    width: 100%;
    height: 100%;
  }
  &:hover{
    padding: 0;
    border: 4px solid rgba(249,249,249,0.8);
    transition: border 200ms ease
  }

}
`
export default ImgSlide