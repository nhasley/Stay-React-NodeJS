import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const House = props => (
    <tr>
        <td>
            {props.house.title}
        </td>
        <td>
            {props.house.description}
        </td>
        <td>
            {props.house.guests}
        </td>
        <td>
            ${props.house.pricing}
        </td>
        <td>
            <Link to={`/edit/${props.house._id}`}>Edit</Link>  | <a href="#" onClick={() => { props.deleteHouse(props.house._id) }}>Delete</a>
        </td>
    </tr>
)

export default class Listings extends Component {
    constructor(props) {
        super(props)
        this.deleteHouse = this.deleteHouse.bind(this)
        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/listings/').then(res => {
            this.setState({houses: res.data})
        }).catch((err) => {
            console.log(err)
        })
    }
    componentDidUpdate() {
        axios.get('http://localhost:3001/listings/').then(res => {
            this.setState({houses: res.data})
        }).catch((err) => {
            console.log(err)
        })
    }
    
    deleteHouse(id) {
        axios.delete('http://localhost:3001/listings/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          houses: this.state.houses.filter(el => el._id !== id)
        })
      }
    // houseList(){
    //     return this.state.houses.map((currentHouse, i) => {
    //         return <House house={currentHouse} deleteHouse={this.deleteHouse} key={i} />
    //     })
    // }
    houseList(){
        return this.state.houses.map(currenthouse => {
            return <House house={currenthouse} deleteHouse={this.deleteHouse} key={currenthouse._id}/>
        })
    }
    render() {
        return (
            <div>
                <h3>Listings</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Guests</th>
                            <th>Pricing</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.houseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}