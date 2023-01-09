import Head from 'next/head';
import styled from 'styled-components';

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightgreen;
`;

const Heading = styled.h1`
  color:green;
  font-size: 10rem;
  font-weight: 900;
`;

const Services: React.FC = () => {
  return (
    <>
      <Head>
        <title>Services</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>
        <Heading>Services</Heading>
      </Hero>
      <Head>
        <title>Services</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>
        <Heading>Services</Heading>
      </Hero>
    </>
  );
};

export default Services;