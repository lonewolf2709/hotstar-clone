import styled from "styled-components";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick"
const ImgSlider=(props)=>{
    let settings={
        dots:true,
        infinte:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
    };
    return <div>
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src="/images/slider-badag.jpg" alt=""></img>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-scale.jpg" alt=""></img>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-badging.jpg" alt=""></img>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-scales.jpg" alt=""></img>
                </a>
            </Wrap>
            {/* <div>
                <h2>1</h2>
            </div>
            <div>
                <h2>2</h2>
            </div>
            <div>
                <h2>3</h2>
            </div> */}

        </Carousel>
    </div>;
}
const Carousel=styled(Slider)`
  margin-top:20px;

  &>button{
    opacity:0;
    height:100%;
    width:5vw;
    z-index:3;
    &:hover{
    opacity:1;
    transition:opacity 0.2s ease 0s;
  }
  }

  ul li button{
    &:before{
        font-size:10px;
        color:rgb(150,158,171);
    }
  }
  li.slick-active button:before{
    color:white;
  }
  ${'' /* .slick-list{
    overflow:initial;
  } */}
  .slick-prev {
    left:-75px;
  }
  .slick-next {
    right:-75px;
  }

`
const Wrap=styled.div`
   border-radius:4px;
   position:relative;
   cursor:pointer;
   a{
    border-radius:4px;
    box-shadow:rgb(0 0 0/69%) 0px26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
    display:block;
    position:relative;
    padding:4px;
    img{
        width:100%;
        height:100%;
    }
    &:hover{
        padding:0px;
        transition-duration:300ms;
        border:2px white solid;
   }
   }
`
export default ImgSlider;