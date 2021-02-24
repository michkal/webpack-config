import React from "react"


import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapAdress extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBxDWPHlZOtggFNPaviHOw6keLvC6TpGw8'
})(MapContainer);