import React, {Component} from 'react'
import axios from 'axios'

export default class CreateUser extends Component {
    constructor(props) {
        super(props) 

        this.onChangeUser = this.onChangeUser.bind(this)
    
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
          user: ""
        }
    }

    onChangeUser(e) {
        this.setState({
            user: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            user: this.state.user
        }
        console.log(user)
        this.setState({
            user: ''
        })
    }
    render() {
        return (
          <div>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Username: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.user}
                  onChange={this.onChangeUser}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Create User"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        );
    }
}