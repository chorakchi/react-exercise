import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from './../components/Grid';
import NewGameButton from './../components/NewGame';
import Palette from './../components/Palette';
import Stats from './../components/Stats';

class FloodItApp extends Component {

  render() {
    return (
      <div>
        <div>
          <Stats/>
          <NewGameButton/>
        </div>

        <div>
          <Grid/>
        </div>

        <div>
          <Palette/>
        </div>
      </div>
    );
  }
}



export default FloodItApp
