import styled from "styled-components";
import React from "react";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommend from "./Recommends";
import New from "./NewDisney";
import Orignals from "./Orignals";
import Trend from "./Trending";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { db } from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { collection,getDocs,} from "firebase/firestore";
function Home(props){
    const dispatch=useDispatch();
    const userName=useSelector(selectUserName);
    const usersref=collection(db,"movies");
    let recommends=[];
    let newDisneys=[];
    let originals=[];
    let trending=[];
    let recommendid=[];
    let newDisneyid=[];
    let originalid=[];
    let trendingid=[];
    useEffect(()=>{
        const getdata = async () => {
            const data=await getDocs(usersref);
             data.docs.map((doc)=>{
                // console.log(trending);
                switch (doc.data().type) {
                    case "recommend":
                      if(!recommendid.includes(doc.id))
                      recommends = [...recommends, { id: doc.id, ...doc.data() }];
                      recommendid=[...recommendid,doc.id];
                      break;
          
                    case "new":
                      if(!newDisneyid.includes(doc.id))
                      newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                      newDisneyid=[...newDisneyid,doc.id];
                      break;
          
                    case "original":
                      if(!originalid.includes(doc.id))
                      originals = [...originals, { id: doc.id, ...doc.data() }];
                      originalid=[...originalid,doc.id];
                      break;
          
                    case "trending":
                      if(!trendingid.includes(doc.id))
                      trending = [...trending, { id: doc.id, ...doc.data() }];
                      trendingid=[...trendingid,doc.id]
                      break;
                  }
             })
             dispatch(
                setMovies({
                  recommend: recommends,
                  newDisney: newDisneys,
                  original: originals,
                  trending: trending,
                })
              );
        }
        getdata();
    },[userName]); 
        
    return <Container>
        <ImgSlider />
        <Viewers></Viewers>
        <Recommend />
        <New></New>
        <Orignals id={'1234'}></Orignals>
        <Trend></Trend>
    </Container>;
}
const Container=styled.main`
    position:relative;
    min-height: calc(100vh - 250px);
    overflow-x:hidden;
    display:block;
    top:72px;
    padding:0 calc(3.5vw + 5px);
    &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
`
const BgImage=styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("./images/home-background.png ");
    position:absolute;
    top:0;
    right:0;
    left:0;
    z-index:-1;
`;
export default Home;