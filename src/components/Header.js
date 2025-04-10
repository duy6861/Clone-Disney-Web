import styled from "styled-components";
import { auth, provider } from "../firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux'
import { setUserLoginDetail, setSignOutState } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Header = (props) => {

  const usersName = useSelector((state) => state.user.name)
  const userPhoto = useSelector((state) => state.user.photo)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        navigate('/home')
      }
    })
  }, [usersName])

  const handleAuth = () => {
    if (!usersName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user)
        })
        .catch((error) => {
          console.error("Error signing in: ", error);
        })
    }
    else if (usersName) {
      signOut(auth)
        .then(() => {
          dispatch(setSignOutState());
          navigate('/')
        })
    }
  }
  const setUser = (user) => {
    dispatch(setUserLoginDetail({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    }))
  }
  return (
    <Nav>
      <Logo>
        <img src='/images/logo.svg' alt="logo" />
      </Logo>
      {
        !usersName ?
          <Login onClick={handleAuth}>LOGIN</Login> : <>
            <NavMenu>
              <a href="/home">
                <img src='/images/home-icon.svg' alt="img" />
                <span>HOME</span>
              </a>
              <a href="/home">
                <img src='/images/search-icon.svg' alt="img" />
                <span>SEARCH</span>
              </a>
              <a href="/home">
                <img src='/images/watchlist-icon.svg' alt="img" />
                <span>WATCHLIST</span>
              </a>
              <a href="/home">
                <img src='/images/original-icon.svg' alt="img" />
                <span>ORIGINALS</span>
              </a>

            </NavMenu>
            <SignOut>
              <UserAvatar src={userPhoto} alt={usersName} />
              <DropDown onClick={handleAuth}>
                <span>SIGN OUT</span>
              </DropDown>
            </SignOut>

          </>
      }

      {/* <Login onClick={() => handleAuth()}>Login</Login> */}
    </Nav>
  );
}

const Nav = styled.nav`
position: fixed;
height: 70px;
top: 0;
left: 0;
right: 0;
background-color: #090b13;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
letter-spacing: 16px;
z-index: 3;
`
const Logo = styled.a`
width: 80px;
padding: 0;
margin-top: 4px;
max-height: 70px;
font-size: 0;
display: inline-block;
img{
  display: block;
  width: 100%;
}
`
const NavMenu = styled.div`
display: flex;
align-items: center;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
padding: 0;
margin:0;
position: relative ;
margin-right: auto;
@media (max-width: 768px) {
  display: none;
}
a{
    display: flex;
    align-items: center;
    padding: 0 12px;
    img{
      height: 24px;
      min-width: 24px;
      z-index: auto;
    }
    span{
      color: rgb(249,249,249);
      font-size: 16px;
      letter-spacing: 1.5px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;
      &:before{
        background-color: rgb(249,249,249); 
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        position: absolute;
        height: 2px;
        opacity: 0;
        right: 0;
        left: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        width: auto;
        visibility: hidden;
      }
    }
  
    &:hover{
      span:before {
        opacity: 1 !important;
        transform: scaleX(1);
        visibility: visible;
      }
    }
  }
`
const Login = styled.a`
  background-color: rgba(0,0,0,0.6) ;
  padding: 8px 16px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid rgb(249,249,249);
  border-radius: 4px;
  cursor: pointer;
  transition:  all 0.2s ease ;

&:hover{
  background-color: rgb(249,249,249);
  color: rgb(0,0,0);
}
`
const UserAvatar = styled.img`
  height: 100%;
  border-radius :50% ;
  width: 100%;

`

const DropDown = styled.div`
 position: absolute;
  top: 48px;
  right: 0px;
  background-color: rgb(19,19,19);
  border: 1px solid rgb(151,151,151,0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  width: 100px;
  /* display: none; */
  opacity: 0;
  visibility: hidden;
  transform:translateY(0)
  
`
const SignOut = styled.div`
 position: relative;
 height: 48px;
 width: 48px;
 display: flex;
 cursor: pointer;
 align-items: center;
 justify-content: center;
&:hover{
  ${DropDown}{
    /* display: block; */
    opacity: 1;
    visibility: visible;
    transition: all 1s ease;
    transform: translateY(-10px);
  }
}
`
export default Header