import React, {Component} from 'react'

export default class CreateHouse extends Component {
    constructor(props) {
        super(props) 

        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangeGuests = this.onChangeGuests.bind(this)
        this.onChangePrice = this.onChangePrice.bind(this)
        this.onChangeUser = this.onChangeUser.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
          title: "",
          description: "",
          guests: 0,
          pricing: 0,
          user: "",
          users: []
        }
    }

    componentDidMount() {
        this.setState({
            users: ['test user'],
            user: 'test user'
        })
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }
    onChangeGuests(e) {
        this.setState({
            guests: e.target.value
        })
    }
    onChangePrice(e) {
        this.setState({
            pricing: e.target.value
        })
    }
    onChangeUser(e) {
        this.setState({
            user: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        const house = {
            title: this.state.title,
            description: this.state.description,
            guests: this.state.guests,
            pricing: this.state.pricing,
            user: this.state.user
        }
        console.log(house)
        window.location = '/'
    }
                        

    render() {
        return (
          <div>
            <h3>Create Listing</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Title: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label>Description: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div className="form-group">
                <label>Guests: </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.guests}
                  onChange={this.onChangeGuests}
                />
              </div>
              <div className="form-group">
                <label>Pricing: </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.pricing}
                  onChange={this.onChangePrice}
                />
              </div>
              <div className="form-group">
                <label>Username: </label>
                <select
                  ref="userInput"
                  required
                  className="form-control"
                  value={this.state.user}
                  onChange={this.onChangeUser}
                >
                  {this.state.users.map(function(user) {
                    return (
                      <option key={user} value={user}>
                        {user}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Create Listing"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        );
    }
}