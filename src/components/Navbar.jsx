import React from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { useStateProvider } from "../utils/StateProvider";

import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

const Navbar = ({navBackground}) => {

  //userInfo from Spotify.jsx useEffect
  const [{ userInfo,currentlyPlaying }] = useStateProvider();


  return (
    <Container navBackground={navBackground}>
      <div className="logo">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
          alt="spotify-logo"
        ></img>
      </div>

    <div className="pills">

      <div className="avatar">
        <a href="#">
          <CgProfile />
          <span>{userInfo ? userInfo.userName : "..."}</span>
        </a>
      </div>
        <div className="compare">

          <DarkModeRoundedIcon sx={{color:"#ffffff"}}/>
        </div>
  </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 9vh;
  position: sticky;

  top: 0;
  transition: 0.3s ease-in-out;
  background-color: ${({ navBackground }) =>
    navBackground ?  "rgba(0,0,0,0.9)"
 : "none"};
 border-bottom-left-radius: 0.8rem;
 border-bottom-right-radius: 0.8rem;
 z-index: 1;

  .logo {
    text-align: left;
    width: 30%;
    margin: 1.5rem 2rem;
    img {
      max-inline-size: 7rem;
      block-size: auto;
    }
  }

  .search_bar {
    background-color: white;
    width: 30%;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    input {
      border: none;
      height: 2rem;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }

  .avatar {
    height: 2rem;
    background-color: black;
    padding: 0rem 0.1rem;
    padding-right: 1rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: flex;
      justify-content: center;
      padding: 1rem;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: white;
      font-weight: bold;
      svg {
        font-size: 1.3rem;
        background-color: #282828;
        border-radius: 1rem;
        color: #c7c5c5;
      }
    }
  }

  .pills {
    display: flex;
    gap: 1rem;
    justify-content:center ;
    .compare {
      background-color: black;
      border-radius: 1rem;
      align-content:center;
      width: 2rem;
      height: 2rem;
    }
  }
`;


export default Navbar;
