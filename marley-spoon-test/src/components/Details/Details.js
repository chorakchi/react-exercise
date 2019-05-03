import React from "react"
import {DetailWraper, Tag, Title, Content, Photo,Calories, PhotoWraper } from './styled'

class Details extends React.Component {
    render() {
        const { data } = this.props
        console.log(data)
        return (
            <div style={{display:"flex"}}>
                <DetailWraper >
                <Title>{data.name}</Title>
                <Content>{data.description}</Content>
                {data.tags ?  data.tags.map(item =><Tag >{item} </Tag>) : null}
                <Calories>Calories: {data.calories}</Calories>
            </DetailWraper>
            <PhotoWraper>
                <Photo src={data.photo}/>
                </PhotoWraper>
            </div>
        )
    }
}
export { Details }