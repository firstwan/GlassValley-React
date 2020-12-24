import React, { Component } from 'react';

class Item extends Component {
    state = { 
        item: this.props.item 
    }
    render() { 
        return (
            
        <tr>            
            <td>{this.state.item.key}</td> 
            <td>{this.state.item.value}</td>
            <td><button className="btn btn-danger" onClick={() => this.props.onDelete(this.state.item.key)}>Delete</button></td>
        </tr>
    )
    }
}
 
export default Item;