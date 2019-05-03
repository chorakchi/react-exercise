import React from "react"
import {Item, Tag, Title, Content } from './styled'
import {Paper} from './../common'

class ItemList extends React.Component {
    render() {
        const { data } = this.props
        return (
            <Paper>
            <Item {...this.props}>
                <Title>{data.name}</Title>
                <Content>{data.description}</Content>
                {data.tags ?  data.tags.map(item =><Tag >{item} </Tag>) : null}
            </Item>
            </Paper>
        )
    }
}
export { ItemList }