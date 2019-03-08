import React, { Component } from 'react';




class DrumKeyPad extends Component {
constructor(props){
    super(props)

    this.state = {
      display: ''
    }

    this.handleKeyClicked = this.handleKeyClicked.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
}


    // change code below this line
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyClicked);
    }
    componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyClicked);
    }
  handleDisplay = display => this.setState ({display})
  
 handleKeyClicked  = (event) => {
 if (event.keyCode === 81){
//this.audio.play()
//this.audio.currentTime = 0
this.handleDisplay(this.props.id)
console.log(this.state.display);
 }
 }
  

  render() {
    //  const {drum} = this.props;
    return (
 

      <div id='display'>{this.state.display}</div>


    )
  }
}

export default DrumKeyPad;
