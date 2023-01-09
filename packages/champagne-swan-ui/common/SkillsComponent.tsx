import React from 'react'
import styled from 'styled-components'

const SkillsContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
flex:0.5;
`;

const SkillInfoContainer = styled.div` 
display: flex;
text-align: center;
flex-direction: column;
color: white;
`;
const SkillScore = styled.h1` 
margin: 0;
font-size: 90px;
font-weight: 100;
`;
const SkillName = styled.h4` 
margin: 0;

`;


const SkillsComponent:React.FC = () => {
  return (
    <SkillsContainer className="hiro-content">
      <SkillInfoContainer>
        <SkillScore>{`50`}</SkillScore>
        <SkillName>{`TAPASZTALT KOLLÉGÁK`}</SkillName>
      </SkillInfoContainer>
      <SkillInfoContainer>
        <SkillScore>{`80`}</SkillScore>
        <SkillName>{`ELÉGEDETT ÜGYFÉL`}</SkillName>
      </SkillInfoContainer>
      <SkillInfoContainer>
        <SkillScore>{`150`}</SkillScore>
        <SkillName>{`SIKERES PROJECT`}</SkillName>
      </SkillInfoContainer>
      <SkillInfoContainer>
        <SkillScore>{`100`}</SkillScore>
        <SkillName>{`DARABOS GÉPPARK`}</SkillName>
      </SkillInfoContainer>
    </SkillsContainer>
  )
}

export default SkillsComponent