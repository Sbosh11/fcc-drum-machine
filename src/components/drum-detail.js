import React, { Component } from 'react';




class DrumDetail extends Component {
constructor(props){
    super(props)
    this.handlePlay = this.handlePlay.bind(this);
    this.handleKeyClicked = this.handleKeyClicked.bind(this);
}


 componentDidMount() {
    document.addEventListener('keydown', this.handleKeyClicked);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyClicked);
  }


  
 handleKeyClicked  = (event) => {
 if (event.keyCode === this.props.drum.keyCode){
this.audio.play()
this.audio.currentTime = 0
const {handleDisplayCallBack} = this.props
handleDisplayCallBack(this.props.drum.id)

 }
 }

// OnClick Play
handlePlay = () => {
    this.audio.play()
    this.audio.currentTime =0;
   const {handleDisplayCallBack} = this.props
   handleDisplayCallBack(this.props.drum.id)
  
}



  render() {
      const {drum} = this.props;
    
    return (
 

   <div className='drum-pad'  id={drum.id}  onClick={this.handlePlay} >
   
 
  <audio ref ={ref => this.audio = ref} className='clip' 
  src={drum.url}
  id={drum.letter}>
  </audio>
  
   {drum.letter}
   
   </div>


    )
  }
}

export default DrumDetail;
