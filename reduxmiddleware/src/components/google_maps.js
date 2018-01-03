/*global google*/
import React, { Component } from 'react';

class GoogleMap extends Component{

    componentDidMount() {
        //creating embeded google maps.. this.ref.map
       // takes html elements
new google
    .maps
    .Map(this.refs.map, {

            zoom :12,
            center:{
                lat: this.props.lat,
                lng:this.props.lon
            }
        });
      
    }
    
//method
    render(){
        //this.refs.map
return <div ref="map"/>;
}

}

export default GoogleMap;
