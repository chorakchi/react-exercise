import React from 'react'

class Sample extends React.Component {
    render(){
        return(<div className="sample" name="hi">
        <div name="hi"></div>
            {this.props.name}
        </div>)
    }
}
export default Sample