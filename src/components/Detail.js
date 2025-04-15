import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from '../firebase'
import { doc, getDoc } from "firebase/firestore";
import Modal from 'react-modal';
import YouTube from 'react-youtube'
const Detail = (prop) => {
  const customStyles = {
    overlay: {
      position: 'fixed',
      zIndex: 9999
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  // youtube
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleTrailer = () => {
    setModalIsOpen(true)
  }
  const { id } = useParams()
  const [detailData, setDetailData] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "movies", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDetailData(docSnap.data());
        } else {
          console.log("No such document in Firebase");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };

    if (id) fetchData();
  }, [id]);

  return (
    <Container>
      <Background>
        <img alt="img" src={detailData.backgroundImg} />
      </Background>
      <ImgTitle>
        <img alt="img" src={detailData.titleImg} />
      </ImgTitle>
      <ContentMedia>
        <Control>
          <Player>
            <img src="/images/play-icon-black.png" alt="play" />
            <span>Play</span>
          </Player>
          <Trailer onClick={() => handleTrailer()}>
            <img src="/images/play-icon-white.png" alt="play" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span></span>
            <span></span>
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="img" />
            </div>
          </GroupWatch>
        </Control>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMedia>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      > <YouTube videoId={detailData.videoId} opts={opts} /></Modal>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`
const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img{
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px){
      width: initial
    }
  }

`
const ImgTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img{
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`
const ContentMedia = styled.div`
max-width: 874px;
`
const Control = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0;
  min-height: 56px;

`
const Player = styled.div`
  font-size: 1rem;
  margin: 0 22px 0 0;
  padding: 0 24px;
  height: 56px;
  border-radius: 4px ;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  background: rgb(249, 249, 249);
  color: rgb(0, 0, 0);
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  transition: all ease 300ms;
  img{
    width: 32px;
  }
  &:hover{
    background: rgb(198, 198, 198);
    color: rgb(38, 38, 38)
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0 12px;
    font-size: 12px;
    margin: 0 10px 0 0;
    img{
      width: 25px;
    }
  }
`
const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

`
const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span{
    background-color: rgb(249,249,249);
    display: inline-block;
      &:first-child {
        height: 2px;
        transform: translate(1px, 0px) rotate(0deg);
        width: 16px;
      }

      &:nth-child(2) {
        height: 16px;
        transform: translateX(-8px) rotate(0deg);
        width: 2px;
      }
      }
`
const GroupWatch = styled.div`
height: 44px;
width: 44px;
display: flex;
border-radius: 50%;
justify-content :center ;
align-items: center;
cursor: pointer;
background: white;
div{
  height: 40px;
  width: 40px;
  background: rgb(0,0,0);
  border-radius: 50%;
  img{
    width: 100%;
  }
}
`
const SubTitle = styled.div`
color: rgb(249,249,249);
font-size: 15px;
min-height: 20px;

@media (max-width : 768px){
  font-size: 12px;
}
`
const Description = styled.div`
line-height: 1.4;
font-size:20px;
padding: 16px 0;
color: rgb(249,249,249);
@media (max-width: 768px){
  font-size: 14px;
}
`
export default Detail
