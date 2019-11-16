import React from 'react';
import './../App.css';
import {Link} from 'react-router-dom';
import $  from 'jquery';

class Card extends React.Component{

  render(){
    return(

      <div className="Card">
        <div className="Card__image">
          <Link to="/SearchItem"><img src={require("./img/card_images/outer_image.webp")}/></Link>
        </div>
        <div className="Card__matter">
              <div className="Card__title"><h2>Roadster</h2></div>
              <div className="Card__description"><p>Mens Full Sleeve Cartigon</p></div>
              <div className="Card__buttons">
                <button className="btn btn--pink">Add to Cart</button>
                <button className="btn btn--grey">WishList</button>
              </div>
              <div className="Card__sizes">Sizes:&nbsp;S,&nbsp;M,&nbsp;L,&nbsp;XL</div>
              <div className="Card__price"><b>Rs.&nbsp;999</b></div>
        </div>




      </div>

    );

  }
}

export default Card;
