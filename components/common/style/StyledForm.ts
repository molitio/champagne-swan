import styled from 'styled-components';
import { Form } from 'formik';

type StyledFormProps = {
    position?: string;
  };

 const StyledForm = styled(Form)<StyledFormProps>`
  position: ${(props) => props.position || "relative"};
`;


export default StyledForm;