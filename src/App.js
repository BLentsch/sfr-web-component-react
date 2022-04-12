import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Auto Complete Component: <br/><br/></h2>
          <auto-complete id="autocomp" data=""></auto-complete>
        </header>
      </div>
    );
  }


  fetchList() {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
        .then(response => response.json())
        .then(json => {
            console.log(json);

            var jsonRes = json.results;

            var array = [];

            for (var i = 0; i < jsonRes.length; i++) {
                var obj = jsonRes[i];

                array.push(obj.name);
            }

            var listOfElems = document.getElementById("autocomp");
            console.log(array);
            
            listOfElems.setAttribute("data", array);
        }).catch(function(error) {
            console.log(error);
        });
  }

  componentDidMount() {
    this.fetchList();
  }
}