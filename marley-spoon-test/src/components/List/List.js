import React from "react"
import {ItemList} from "./ItemList"
import { ListWraper } from "./styled";

class List extends React.Component {
    render() {
        const { data } = this.props
        return (<ListWraper>
            {data.map(item => 
                <ItemList
                id = {item.id}
                onClick= {()=>{
                    this.props.onCLickItem(item.id)}}
                data = {item}/>
            )}
        </ListWraper>)
    }
}
export { List }