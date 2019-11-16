import React from 'react';
import './../App.css';
import {Link} from 'react-router-dom';

class Popup extends React.Component{
  state={
    visible:"visible"
  }

    render(){
      const {visible}=this.state
      return(

    <div className="popup">
      <div className="popup__content">
          <h1>Available Brands </h1>
            <div  className="popup__close">&times;</div>
      </div>
    </div>



      );


    }
}
export default Popup;
