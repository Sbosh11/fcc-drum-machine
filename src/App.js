import React, { Component } from 'react';
import DrumData from './components/sound-list.json';
import DrumDetail from './components/drum-detail';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)

   this.state = {
     display: ''
   
    
   }
  }
    

handleDisplay = display =>this.setState ({display})



  render() {
  
    return (
      <div className='App' id='drum-machine'>
      <h3>Drum Machine</h3>
<div id='main'>
  {DrumData.map(drumList => 
  { return <DrumDetail  
  drum={drumList} 
  key={`${drumList.keyCode}`}
 handleDisplayCallBack={this.handleDisplay}
    
  />

   })}
  
</div>
<h4 id='display'>{this.state.display}</h4>
<p id='author'>Coded by Sibongile Thanjekwayo</p>
</div>
    )
  }
}

export default App;
