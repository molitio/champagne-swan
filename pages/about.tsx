import Head from 'next/head';
import styled from 'styled-components';

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: pink;
`;

const Heading = styled.h1`
  color: red;
  font-size: 10rem;
  font-weight: 900;
`;

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>
        <Heading>ABOUT</Heading>
      </Hero>
      <Head>
        <title>About</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>
        <Heading>ABOUT</Heading>
      </Hero>
    </>
  );
};

export default About;
