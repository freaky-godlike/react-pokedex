import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/I.jpeg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="avatar" className="profile-image"/>
      <h1 className="profile-text">Hi, I'm Godlike</h1>
      <h2 className="profile-text">The Creator of the Futuristic Pokedex</h2>
      <h4 className="profile-text">This project is created for My Development Journey</h4>
      <div className="profile-links">
        <a href="https://github.com/hrik-das">
          <FaGithub/>
        </a>
        <a href="https://x.com/Hrikdas1?s=09">
          <FaTwitter/>
        </a>
        <a href="https://www.linkedin.com/in/hrik-das-8637132b2">
          <FaLinkedin/>
        </a>
      </div>
    </div>
  );
}
export default Wrapper(About);