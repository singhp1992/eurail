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
            </Tabs>
          </div>

      </section>
    );
  }
}

export default App;
