import styled from 'styled-components';

export const StyledLogoIconSVG = styled.svg<{ fill: string }>`
height: 30px;
width: 30px;
fill: ${props => props.fill};
padding: 7px;

path {
  filter: url(#drop-shadow);
}
`;