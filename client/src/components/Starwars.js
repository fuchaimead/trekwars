import React, { Component } from 'react';
import StarWarsLogo from '../images/star-wars.png';
import axios from 'axios'
import {Grid, List} from 'semantic-ui-react'
import Character from './Character'
import Location from './Location'

class Starwars extends Component {
  state = { characters: [], locations: []}
  //Lifecyle method 
  componentDidMount(){
    axios.get('/api/characters?nerd_type=starwars')
    .then( res => {
      this.setState({characters: res.data})
    })
    .catch( res => {
      console.log(res.data)
    })
    axios.get('/api/locations?nerd_type=starwars')
    .then( res => {
      this.setState({locations: res.data})
    })
    .catch( res => {
      console.log(res.data)
    })
  }

  displayCharacters = () => {
    return this.state.characters.map( character => {
      return( <Character character={character} 
      deleteCharacter = {this.deleteCharacter}  /> )
    })
  }
  

  displayLocations = () => {
    return this.state.locations.map( location => {
      return(<Location location={location} /> )
    })
  }


  deleteCharater = (id) => {
    window.confirm("Delete Character?")
    axios.delete(`/api/characters/${id}`)
    .then( () => {
      const { characters } = this.state;
      this.setState({ characters: characters.filter( c => c.id !== id ) })
    })
  }

  render(){
    return(
      <div> 
        <img style={styles.logo} src={StarWarsLogo} alt='Star Wars Logo'/> 
        <Grid>
          <Grid.Column width={8} >
          <h1> Characters </h1> 
          <List>
           {this.displayCharacters() }
           </List>
          </Grid.Column>
          <Grid.Column width={8}>
          <h1> Planets </h1> 
          <List>
           { this.displayLocations() }
           </List>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
export default Starwars;

const styles = {
  logo: {
    width: '150px',
  }
}