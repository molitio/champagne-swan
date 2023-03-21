import styled from "styled-components";

export const SkillsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: auto;
  padding: 2em;
  background-color: ${(props) =>
    props?.theme?.palette?.background?.default ?? ""};
`;

export const SkillInfoContainer = styled.div`
  display: flex;
  flex: 25%;
  text-align: center;
  flex-direction: column;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  color: ${(props) => props?.theme?.palette?.text?.tertiary ?? ""};
  margin-top: 40px;
  margin-bottom: 40px;
  filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.2));

  @media (max-width: 1440px) {
    flex: 50%;
  }
`;

export const SkillScore = styled.h1`
  margin: 0;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 6.8em;

  @media (max-width: 975px) {
    font-size: 5em;
  }
`;

export const SkillName = styled.h4`
  margin: 0;
  font-size: 1.5em;

  @media (max-width: 975px) {
    font-size: 1em;
  }
`;
