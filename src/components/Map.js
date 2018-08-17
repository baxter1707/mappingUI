import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import '../leaflet.css';
import { connect } from 'react-redux'


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


const MyPopupMarker = ({ children, position }) => (
  <Marker position={position}>
    <Popup>{children}</Popup>
  </Marker>
)

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <div>{items}</div>
}


export  class CustomMap extends Component {
  state = {
    lat: 29.78,
    lng: -95.39,
    zoom: 9
  }


  render() {
    const center = [this.state.lat, this.state.lng]

    let markers = []

    let jsonCoordinates = this.props.coordinates.map((bike,i)=>{
        markers = [
        ...markers,
        {key:'marker'+ i, position: bike.geometry.coordinates.reverse()}
        ]
        i++
    })

    return (
      <Map center={center} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyMarkersList markers={markers} />
      </Map>
    )
  }
}

const mapStateToProps = state => {
  return{
    coordinates : state.coordinates
  }
}

export default connect(mapStateToProps,null)(CustomMap)
