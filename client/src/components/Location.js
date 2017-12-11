import React, { Component } from 'react';
import { List, Button, Input } from 'semantic-ui-react'
import axios from 'axios'

class Location extends Component {
  state = {editing: false, name: this.props.location.name} 
  
    toggleEdit = (cancel = false) => {
      if(cancel)
        this.setState({name: this.props.location.name })

      this.setState({ editing: !this.state.editing})
    }

 
  
    editLocation = () => {
      axios.put(`/api/locations/${this.props.location.id}`, {location: {name: this.state.name }})
      .then( res => {
        console.log(res)
        this.toggleEdit();
      })
      .catch( res => {
        console.log(res)
      });
    }

 
    handleChange = (e) => {
      this.setState({ name: e.target.value })    
    }
  render() {
    const { name} = this.state;  
    if(this.state.editing) 
      return (
        <List.Item> 
        <Input type="text" defaultValue={name} onChange={this.handleChange} />
        <Button onClick={() =>this.toggleEdit(true)}> Cancel </Button>
        <Button primary onClick={this.editLocation}> Save </Button>
        </List.Item>
      )
      else 
      return(
        <List.Item onClick={ this.toggleEdit } >
        {name}
        </List.Item>     
    )
  }
}



export default Location