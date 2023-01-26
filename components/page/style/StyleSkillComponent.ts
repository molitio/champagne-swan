import styled from 'styled-components';

export const SkillsContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;

@media (max-width: 1440px) {
   margin: auto;
  }

`;

export const SkillInfoContainer = styled.div` 
display: flex;
text-align: center;
flex-direction: column;
color: white;
margin-top: 40px;
margin-bottom: 40px;
 filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.2));
 flex:25%;
 
 
 @media (max-width: 1440px) {
   flex:50%;
  }
`;

export const SkillScore = styled.h1` 
margin: 0;
font-size: 90px;
font-weight: 100;
`;

export const SkillName = styled.h4` 
margin: 0;
`;