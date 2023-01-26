import styled from 'styled-components';
import { Form } from 'formik';

type StyledFormProps = {
    position?: string;
    margin?: string;
  };

 const StyledForm = styled(Form)<StyledFormProps>`
  position: ${(props) => props.position || "relative"};
  margin: ${(props) => props.margin || "0 0 0 0"};
`;


export default StyledForm;