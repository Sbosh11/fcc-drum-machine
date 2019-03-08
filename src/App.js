import React, { Component } from 'react';
import DrumData from './components/sound-list.json';
import DrumDetail from './components/drum-detail';
//import DrumKeyPad  from './components/drum-keypad';
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
      <h2>Drum Machine</h2>
<div id='main'>
  {DrumData.map(drumList => 
  { return <DrumDetail  
  drum={drumList} 
  key={`${drumList.keyCode}`}
 handleDisplayCallBack={this.handleDisplay}
    
  />

   })}
  
</div>
<div id='display'>{this.state.display}</div>
</div>
    )
  }
}

export default App;
