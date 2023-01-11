import styled from 'styled-components';

export const StyledLogoIconSVG = styled.svg<{ fill: string }>`
height: 27px;
width: 27px;
fill: ${props => props.fill};
padding: 7px;

path {
  filter: url(#drop-shadow);
}
`;