import React, { Component } from 'react'
import StarTrekLogo from '../images/star-trek-logo.jpg';
import axios from 'axios'
import {Grid, List} from 'semantic-ui-react'
import Location from './Location'
import Character from './Character'


class Startrek extends Component {
  state = { characters: [], locations: []}

  componentDidUpdate(){
    axios.get('/api/characters?nerd_type=startrek')
    .then( res => {
      console.log(res.data)
    })
    .catch( res => {
      console.log(res.data)
    })
    axios.get('/api/locations?nerd_type=startrek')
    .then( res => {
      console.log(res.data)
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


  displayLocations = () => {
    return this.state.locations.map( location => {
      return(<Location location={location} /> )
    })
  }

 

  render(){

    return(
      <div> 
        <img style={styles.logo} src={StarTrekLogo} alt='Star Trek Logo'/> 
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
           { this.displayLocations() }
           </List>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
export default Startrek;

const styles = {
  logo: {
    width: '175px',
  }
}
