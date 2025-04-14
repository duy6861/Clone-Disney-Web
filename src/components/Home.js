import styled from "styled-components"
import ImgSlide from "./ImgSlide"
import Viewer from "./Viewer"
import Recommends from "./Recommends"
import NewDisney from "./NewDisney"
import Originals from "./Originals"
import Trending from "./Trending"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import db from '../firebase'
import { collection, onSnapshot } from "firebase/firestore";
import { setMovies } from "../features/MovieSlice"
const Home = (props) => {
  const dispatch = useDispatch();
  const usersName = useSelector((state) => state.user.name);

  useEffect(() => {
    onSnapshot(collection(db, "movies"), (snapshot) => {
      let recommends = [];
      let newDisney = [];
      let originals = [];
      let trending = [];
      snapshot.docs.forEach((doc) => {
        console.log(doc.data())
        switch (doc.data().type) {
          case 'recommend':
            recommends.push({ id: doc.id, ...doc.data() });
            break;
          case 'new':
            newDisney.push({ id: doc.id, ...doc.data() });
            break;
          case 'original':
            originals.push({ id: doc.id, ...doc.data() });
            break;
          case 'trending':
            trending.push({ id: doc.id, ...doc.data() });
            break;
          default:
            break;
        }
      })
      dispatch(setMovies({
        recommend: recommends,
        newDisney: newDisney,
        original: originals,
        trending: trending,
      })
      );
    });
  }, [usersName])
  return (
    <Container>
      <ImgSlide />
      <Viewer />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
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