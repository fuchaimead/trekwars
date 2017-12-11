import React, { Component } from 'react';
import { List, Button, Input } from 'semantic-ui-react'
import axios from 'axios'
 
class Character extends Component {
  state = {editing: false, name: this.props.character.name };

  toggleEdit = (cancel = false) => {
    if(cancel)
      this.setState({name: this.props.character.name })
    this.setState({ editing: !this.state.editing})
  }

  editCharacter = () => {
    // get id of character for the axios call 
    // make the axios put call for our api to update the characters 
    // get updated name of the character 
    axios.put(`/api/characters/${this.props.character.id}`, {character: {name: this.state.name }})
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

  deleteCharacter = (id) => {
    axios.delete(`/api/characters/${this.props.character.id}`)
    .then(() => {
      console.log("Delete")
    })
  }


  render() {
    const { name, id } = this.state;

    if(this.state.editing)
    return(
      <List.Item>
        <Input type="text" defaultValue={name} onChange={this.handleChange} />
        <Button onClick={() =>this.toggleEdit(true)}> Cancel </Button>
        <Button primary onClick={this.editCharacter}> Save </Button>
        <Button onClick={this.deleteCharacter(id)}> Delete </Button>
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

export default Character;