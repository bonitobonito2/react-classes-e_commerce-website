import React from "react";
import classes from './Cart.module.css'
class Card extends React.Component{


    render(){
        return <img alt = 'cart' className={classes.img} src="https://cdn-icons-png.flaticon.com/512/263/263142.png" />
    }
}

export default Card