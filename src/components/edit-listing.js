import React, {Component} from 'react'
import axios from 'axios'

export default class EditListing extends Component {

    constructor(props){
        super(props)

        this.onChangePhoto = this.onChangePhoto.bind(this)
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangeGuests = this.onChangeGuests.bind(this)
        this.onChangePricing = this.onChangePricing.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            photo: '',
            title: '',
            description: '',
            guests: '',
            pricing: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/listings/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    photo: response.data.photo,
                    title: response.data.title,
                    description: response.data.description,
                    guests: response.data.guests,
                    pricing: response.data.pricing
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    onChangePhoto(e) {
        this.setState({
            photo: e.target.value
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
    onChangePricing(e) {
        this.setState({
            pricing: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        const obj = {
            photo: this.state.photo,
            title: this.state.title,
            description: this.state.description,
            guests: this.state.guests,
            pricing: this.state.pricing
        }
        axios.post(`http://localhost:3001/listings/update/${this.props.match.params.id}`, obj).then(res => console.log(res.data))

        this.props.history.push('/listings')
    }
    render() {
        return (
            <div>
                <h3>Edit Listing</h3>
                <form className="listform" onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Photo: </label>
                        <input type="text" className='form-control' value={this.state.photo} onChange={this.onChangePhoto}/>
                    </div>
                    <div className='form-group'>
                        <label>Title: </label>
                        <input type="text" className='form-control' value={this.state.title} onChange={this.onChangeTitle}/>
                    </div>
                    <div className='form-group'>
                        <label>Description: </label>
                        <input type="text" className='form-control' value={this.state.description} onChange={this.onChangeDescription}/>
                    </div>
                    <div className='form-group'>
                        <label>Guests: </label>
                        <input type="number" className='form-control' value={this.state.guests} onChange={this.onChangeGuests}/>
                    </div>
                    <div className='form-group'>
                        <label>Pricing: </label>
                        <input type="number" className='form-control' value={this.state.pricing} onChange={this.onChangePricing}/>
                    </div>
                    <div className='form-group'>
                        <input type='submit' value='Update Listing' className="btn"/>
                    </div>
                </form>
            </div>
        )
    }
}