import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const House = props => (
    <tr>
      <td>{props.house.title}</td>
      <td>{props.house.description}</td>
      <td>{props.house.guests}</td>
      <td>{props.house.pricing}</td>
    
      <td>
        <Link to={"/edit/"+props.house._id}>edit</Link> | <a href="#" onClick={() => { props.deleteHouse(props.house._id) }}>delete</a>
      </td>
    </tr>
  )
  
  export default class HouseList extends Component {
    constructor(props) {
      super(props);
  
      this.deleteHouse = this.deleteHouse.bind(this)
  
      this.state = {houses: []};
    }
  
    componentDidMount() {
      axios.get('http://localhost:5000/houses/')
        .then(response => {
          this.setState({ houses: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
    deleteHouse(id) {
      axios.delete('http://localhost:5000/houses/'+id)
        .then(response => { console.log(response.data)});
  
      this.setState({
        houses: this.state.houses.filter(el => el._id !== id)
      })
    }
  
    houseList() {
      return this.state.houses.map(currenthouse => {
        return <House house={currenthouse} deleteHouse={this.deleteHouse} key={currenthouse._id}/>;
      })
    }
  
    render() {
      return (
        <div>
          <h3>Listings</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>

                <th>Title</th>
                <th>Description</th>
                <th>Guests</th>
                <th>Price</th>
            
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { this.houseList() }
            </tbody>
          </table>
        </div>
      )
    }
  }