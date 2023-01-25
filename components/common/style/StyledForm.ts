import styled from 'styled-components';

type StyledFormProps = {
    position?: string;
    margin?: string;
  };

 const StyledForm = styled.form<StyledFormProps>`
  position: ${(props) => props.position || "relative"};
  margin: ${(props) => props.margin || "0 0 0 0"};
`;


export default StyledForm;