import styled, { css } from "styled-components"

const StyledButton = styled.div`
border: 0;
margin: 0;
cursor: pointer;
display: inline-flex;
outline: none;
padding: 0;
position: relative;
align-items: center;
border-radius: 0;
vertical-align: middle;
justify-content: center;
-moz-appearance: none;
text-decoration: none;
background-color: transparent;
padding: 8px 16px;
font-size: 0.875rem;
min-width: 64px;
box-sizing: border-box;
min-height: 36px;
font-weight: 500;
line-height: 1.4em;
border-radius: 4px;
text-transform: uppercase;

color: ${props => props.color == "primary" ? "#fff" : "#000"} ;
background-color: ${props => props.color == "primary" ? "rgb(26,115,232)" : props.color == "none" ? "transparent" :  props.color ? props.color : "transparent"};
box-shadow: ${ props => (props.color != "none" || !props.color ) ? "0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)" : "none" };

${props => props.variant && css`
margin: 8px;
width: ${props.variant === "fab" ? "56px" : "64px"};
height: ${props.variant === "fab" ? "56px" : "64px"};
padding: 0;
min-width: 0;
border-radius: 50%;
overflow:hidden;
`}

&::-moz-focus-inner {
  border: 0;
}
`;

const Hover = styled.div`
${props => props.variant && css`
border-radius: ${props.variant == "fab" ? "400px" : "4px"};
`};
    position: absolute;
top: 0;
  left: 0;
  bottom: 0;
  right: 0;
&:hover{
    background-color: rgba(0, 0, 0, 0.1);
}

`;

export { StyledButton, Hover }