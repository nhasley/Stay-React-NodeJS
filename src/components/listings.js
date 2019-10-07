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
            {props.house.pricing}
        </td>
        <td>
            <Link to={`/edit/${props.house._id}`}>Edit</Link>
        </td>
    </tr>
)

export default class Listings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/houses/').then(res => {
            this.setState({houses: res.data})
        }).catch((err) => {
            console.log(err)
        })
    }
    componentDidUpdate() {
        axios.get('http://localhost:3001/houses/').then(res => {
            this.setState({houses: res.data})
        }).catch((err) => {
            console.log(err)
        })
    }

    houseList(){
        return this.state.houses.map((currentHouse, i) => {
            return <House house={currentHouse} key={i} />
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