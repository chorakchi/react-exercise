import React from "react"
import { StyledButton, Hover } from "./Styled"
const Button = ({ children, ...props }) => (
    <StyledButton
        {...props}
    >
        <Hover variant={[props.variant]} />
        {children}
    </StyledButton>
)
export { Button }