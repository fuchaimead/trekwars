import React, { Component } from 'react';
import { List, Button, Input } from 'semantic-ui-react'
import axios from 'axios'

class Location extends Component {
  state = {editing: false, name: this.props.location.name} 

  // toggleEdit = (cancel = false) => {
  //   if(cancel) 
  //     this.setState({name: this.props.location.name })
  //   this.setState({ editing: !this.state.editing})
  // }


  render() {
    const { name } = this.state;    
      return (
        <List.Item> 
        {name}
        </List.Item>
      )
  }
}



export default Location