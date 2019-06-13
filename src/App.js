import React, { Component } from 'react';
import './App.css';
import { render } from "react-dom";

import Tabs from './components/Tabs';
import Tab from './components/Tab'

class App extends Component {
  state= {
    alphabets:[
      { name:"A" },{ name: "B" },{ name: "C" },{ name: "D"},
      { name: "E" }, { name: "F" }, { name: "G" }, { name: "H" },
      { name: "I" }, { name: "J" }, { name: "K" }, { name: "L" },
      { name: "M" }, { name: "N" }, { name: "O" }, { name: "P" },
      { name: "Q" }, { name: "R" }, { name: "S" }, { name: "T" },
      { name: "U" }, { name: "V" }, { name: "W" }, { name: "X" },
      { name: "Y" }, { name: "Z" }
    ]
  }


  render() {
    return (        
      <section>
        <header>
          Contact List
        </header>
          <div class="contact-cards">
            <Tabs>
                {this.state.alphabets.map ( alphabet =>
                <Tab label={alphabet.name}/>
                )}
            </Tabs>
          </div>

      </section>
    );
  }
}

export default App;
