import React, { Component } from 'react'
import StarTrekLogo from '../images/star-trek-logo.jpg';
import axios from 'axios'


class Startrek extends Component {
  
  componentDidMount(){
    axios.get('/api/characters?nerd_type=startrek')
    .then( res => {
      console.log(res.data)
    })
    .catch( res => {
      console.log(res.data)
    })
  }

  render(){
    return(
      <div> 
        <img style={styles.logo} src={StarTrekLogo} alt='Star Trek Logo'/> 
      </div>
    )
  }
}
export default Startrek

const styles = {
  logo: {
    width: '175px',
  }
}
