import styled from "styled-components";
import LogoImg from "../../Assets/logo.svg";
import { styles, colors } from "../../colors";

import Background from "./BgProcessing";

const Logo = styled.div`
  margin-top: 100px;
  color: ${styles.subtitle};
  p {
    font-size: 30px;
  }
`;

const Block = styled.div`
  margin-top: 30px;
  .title {
    font-weight: bold;
    &.resume {
      color: ${colors.main};
    }
  }
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
        <p>Sr. UX Designer, Engineer</p>
        <p></p>
      </Logo>
    </FloatContent>
    <FloatContent className="row">
      <Block className="col-3 offset-1">
        <p className="title">SKILLS</p>
        <p>Figma, Sketch, Adobe Illustrator</p>
        <p>
          Contextual Inquiry, Affinity Mapping, Wireframing, storyboading,
          Usability testing, Heuristic Evaluation
        </p>
        <p>
          JavaScript, HTML5, CSS3, ReactJS, NodeJS, D3.js, Storybook,
          Processing, Arduino
        </p>
      </Block>
    </FloatContent>
    <FloatContent className="row">
      <Block className="col-3 offset-1">
        <a className="title resume" href={"./ChetanKeshav_resume.pdf"}>
          RESUME
        </a>
      </Block>
    </FloatContent>
  </div>
);

export default Home;
