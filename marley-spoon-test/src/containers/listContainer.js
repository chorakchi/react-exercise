import React from "react"
import { connect } from 'react-redux'
import List from './../components/List'
import {PopUp, Button} from  './../components/common'
import Details from './../components/Details'
import {fetchListOfRecipes} from './../redux/actions'


class ListContainer extends React.Component{

    state={
        showDeatails: false
    }

    handlerOpenDetails = (id) => {
        this.setState({showDeatails : true})
        this.setState({deatails : this.props.getListOfRecipes.items[this.props.getListOfRecipes.items.findIndex(item => id === item.id)]})
 
    }

    handlerClose = ()=>{
        this.setState({showDeatails: false})
    }

    componentDidMount(){
        this.props.dispatch(fetchListOfRecipes())
    }
render(){
    const { getListOfRecipes } = this.props
    return(
        <React.Fragment>
            <List
            data = {getListOfRecipes.items ? getListOfRecipes.items : []}
            onCLickItem={this.handlerOpenDetails}
            />
            <PopUp show={this.state.showDeatails} width = "50%" height = "50%" >
            <Button onClick={this.handlerClose} style={{margin: "10px"}}>Close</Button>
            {this.state.deatails ?
                  <Details data = {this.state.deatails}/>
                  : null}
            </PopUp>
        </React.Fragment>
    )
}
}

 const mapStateToProps = state => {
    const { getListOfRecipes } = state
    return { getListOfRecipes }
    }
    
    export default connect(mapStateToProps)(ListContainer)

 
