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
  }

  displayCharacters = () => {
    return this.state.characters.map( character => {
      return( <Character character={character} /> )
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
           { this.displayCharacters() }
           </List>
          </Grid.Column>
          <Grid.Column width={8}>
          <h1> Planets </h1> 
          <List>
      
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