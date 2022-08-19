import React from "react";
import { withRouter } from "../../../../helper/withRouter";
import classes from './viewBagButton.module.css'
class ViewBagButton extends React.Component{
  clickHandler = ()=>{
    this.props.navigate('/mybag', {replace : true})
  }
    render() {
      return (
        <button onClick={this.clickHandler}  className={classes.button}>view bag</button>
      )
    }
}

export default withRouter(ViewBagButton)