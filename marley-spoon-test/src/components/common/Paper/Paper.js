import React from "react"
import {StyledPaper} from "./Styled"
const Paper = ({children, ...props}) => (
<StyledPaper
{...props}
>
    {children}
</StyledPaper>
)

export {Paper}