import React from "react";
import classes from './totalAmount.module.css'

class TotalAmount extends React.Component{

    render(){
        return <div>
            <span className={classes.myBag}>my bag,</span>
            <span>{this.props.totalAmount} items</span>
            </div>
    }
}

export default TotalAmount