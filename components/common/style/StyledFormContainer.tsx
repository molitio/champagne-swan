import styled from "styled-components";

export const StyledFormContainer = styled.div`
display: flex;
justify-content: space-around;

@media (max-width: 1440px) {
    flex-direction: column;
    text-align: center;
}
`;