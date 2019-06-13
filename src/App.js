import React, { Component } from 'react';
import './App.css';
import { render } from "react-dom";

import Tabs from './components/Tabs';

class App extends Component {
  render() {
    return (        
      <section>
        <header>
          Contact List
        </header>
          <div class="contact-cards">
            <Tabs>
              <div label="A">
                All the A's
              </div>
              <div label="B">
                All the B's
              </div>
              <div label="C">
                All the C's
              </div>
              <div label="D">
              </div>
              <div label="E">
              </div>
              <div label="F">
              </div>
              <div label="G">
              </div>
              <div label="H">
              </div>
              <div label="I">
              </div>
              <div label="J">
              </div>
              <div label="K">
              </div>
              <div label="L">
              </div>
              <div label="M">
              </div>
              <div label="N">
              </div>
              <div label="O">
              </div>
              <div label="P">
              </div>
              <div label="Q">
              </div>
              <div label="R">
              </div>
              <div label="S">
              </div>
              <div label="T">
              </div>
              <div label="U">
              </div>
              <div label="V">
              </div>
              <div label="W">
              </div>
              <div label="X">
              </div>
              <div label="Y">
              </div>
              <div label="Z">
              </div>
            </Tabs>
          </div>

      </section>
    );
  }
}

export default App;
