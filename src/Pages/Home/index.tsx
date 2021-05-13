import styled from "styled-components";
import LogoImg from "../../Assets/logo.svg";
import { styles } from "../../colors";

import Background from "./BgProcessing";

const Logo = styled.div`
  margin-top: 100px;
  color: ${styles.subtitle};
  p {
    font-size: 30px;
  }
`;

const Skills = styled.div`
  margin-top: 20px;
`;

const FloatContent = styled.div`
  position: relative;
  z-index: 2;
`;

const Home = () => (
  <div className="container-fluid position-relative">
    <Background />
    <FloatContent className="row">
      <Logo className="col offset-1">
        <img src={LogoImg} />
        <p>UX Designer, Engineer</p>
      </Logo>
      <Skills>
        <p className="title">SKILLS</p>
      </Skills>
    </FloatContent>
  </div>
);

export default Home;
