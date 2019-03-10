import React, { Component } from 'react'
import './tour.scss';

export default class Tour extends Component {
      state={
          showinfo:false
      }
    handleclick =()=>{
        console.log("clicked");
        this.setState({
            showinfo:!this.state.showinfo
        })
    }
  render() {
        const {removetour} = this.props;
    const {id,city,img,name,info}=this.props.tour;
    return (
      <div className="tour">
        <div className="tour-img">
            <img src={img} alt="sorry"/>
            <span className="close-btn" onClick={()=>{removetour(id)}}><i className="fas fa-window-close"></i></span>
        </div>
        <div className="tour-info">
            <h3>{city}</h3>
            <h4>{name}</h4>
            <h5>
                info{" "}
                <span className="info" onClick={()=>{this.handleclick()}}><i className="fas fa-caret-square-down"></i></span>
                {this.state.showinfo && <p>{info}</p>}
            </h5>

        </div>
      </div>
    )
  }
}
