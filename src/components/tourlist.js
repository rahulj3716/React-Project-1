import React, { Component } from 'react'
import Tour from './tour';
import './tourlist.scss';
import {tourData} from '../tourinfo.js';

export default class Tourlist extends Component {
    constructor(props){
        super(props);
        this.state={
            tours:tourData
        };
    }
    removetour = id =>{
        const tours = this.state.tours;
        const sortedtours = tours.filter(tour=>(tour.id !== id));
        this.setState({
            tours:sortedtours
        });
    }
  render() {
      const tours=this.state.tours;
      console.log(tours);
    return (
      <div className="tourlist">
        {tours.map(tour =>{
            return(
                <Tour key={tour.id} tour={tour} removetour={this.removetour}/>
            )
            
        })

        }
      </div>
    )
  }
}
