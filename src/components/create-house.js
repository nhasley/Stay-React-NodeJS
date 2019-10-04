import React, {Component} from 'react'

export default class CreateHouse extends Component {
    constructor(props) {
        super(props) 

        this.state = {
          title: "",
          description: "",
          guests: "",
          duration: "",
          user: ""
        };
    }

    render() {
        return (
            <div>
                <p>Create House</p>
            </div>
        )
    }
}