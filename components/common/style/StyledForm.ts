import styled from 'styled-components';

type StyledFormProps = {
    position?: string;
  };

 const StyledForm = styled.form<StyledFormProps>`
  position: ${(props) => props.position || "relative"};
`;


export default StyledForm;