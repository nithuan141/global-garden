import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

export const MAP_API_KEY = 'AIzaSyDmdNYP71cM7GUjxc5mDrn09j0SowsSStM';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class PublicTreemap extends Component {
  static defaultProps = {
    center: {
      lat: 56.865878,
      lng: 24.279200
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: MAP_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={56.86587822348912 }
            lng={24.27920080145046}
            text="Trees "
          />

        <Marker
            key={'place.id'}
            text={'Tree'}
            lat={ 56.871659}
            lng={24.271937}
          />

        </GoogleMapReact>
      </div>
    );
  }
}

export default PublicTreemap;