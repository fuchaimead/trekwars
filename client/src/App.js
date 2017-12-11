import React, { Component } from 'react';
import Starwars from './components/Starwars';
import Startrek from './components/Startrek';
import Character from './components/Character'
import Location from './components/Location'
import {Button, Container} from 'semantic-ui-react'

class App extends Component {
  state = { starwars: true };

  toggleNerds = () => {
    this.setState({ starwars: !this.state.starwars });
  }

  render() {
    if(this.state.starwars)
      return( 
        <Container>
         <Starwars /> 
          <Button basic color="yellow" onClick={this.toggleNerds}> Toggle Star Trek </Button>
        </Container> 
      );
    else
      return( 
         <Container>
         <Startrek /> 
        <Button basic color="yellow" onClick={this.toggleNerds}> Toggle Star Wars </Button>
        </Container> 
     );
  }
}

export default App;
