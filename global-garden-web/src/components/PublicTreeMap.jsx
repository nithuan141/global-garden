import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import { GetAllTree } from '../service/treedataservice';

export const MAP_API_KEY = 'AIzaSyDmdNYP71cM7GUjxc5mDrn09j0SowsSStM';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class PublicTreemap extends Component {
  static defaultProps = {
    center: {
      lat: 59.91921097726422, //56.865878,
      lng: 10.75191402715559 // 24.279200
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

        {GetAllTree().map(item => <Marker
            key={`${item.lat}-${item.lng}`}
            text={'Tree'}
            lat={ item.lat}
            lng={item.lng}
          />)}

        </GoogleMapReact>
      </div>
    );
  }
}

export default PublicTreemap;