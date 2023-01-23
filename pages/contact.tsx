import Head from 'next/head';
import styled from 'styled-components';

const Backgorund = styled.div`
background-color: lightblue;
`;

const Hero = styled.div`
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
`;

const Heading = styled.h1`
  color: blue;
  font-size: 10rem;
  font-weight: 900;
`;

const Contact: React.FC = () => {
  return (
    <Backgorund>
      <Head>
        <title>Contact</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>
        <Heading>Contact</Heading>
      </Hero>
      <Head>
        <title>Contact</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>
        <Heading>Contact</Heading>
      </Hero>
    </Backgorund>
  );
};

export default Contact;