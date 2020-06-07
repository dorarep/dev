import {NextPage} from "next";
import styled from 'styled-components';
import { AiFillTwitterCircle } from "react-icons/ai";

const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
`;

const Hero = styled.section`
  min-height: 100vh;
  align-items: center;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const About = styled.section``;

const Contact = styled.section``;

const Twitter = styled.a`
  color: #1DA1F2;
  font-size: 2rem;
`;

const HomePage: NextPage = () => (
  <>
    <Main>
      <Hero>
        <svg id="logomark" x="0px" y="0px" width="155px" height="155px" viewBox="0 0 155 155" enable-background="new 0 0 155 155">
          <polygon id="logomark-polyline" fill-rule="evenodd" clip-rule="evenodd" fill="#0CB9C7" points="128.25,26 24.75,129.5 5.81,58.81 57.56,7.06 "/>
        </svg>
        <div>
          <h1>dorarep</h1>
          <p>full-stack developer</p>
        </div>
      </Hero>
      <About>
        <h2>Languages</h2>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Ruby</li>
          <li>PHP</li>
        </ul>
        <h2>Certifications</h2>
        <ul>
          <li>AWS Certified Cloud Practitioner</li>
          <li>AWS Certified Solution Architect Associate</li>
        </ul>
      </About>
      <Contact>
        <h2>Contact</h2>
        <Twitter href='https://twitter.com/dorarep'><AiFillTwitterCircle /></Twitter>
      </Contact>
    </Main>
  </>
);

export default HomePage;
