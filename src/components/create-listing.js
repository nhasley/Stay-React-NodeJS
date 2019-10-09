import React, {Component} from 'react';
import axios from 'axios'

export default class CreateListing extends Component {
                 constructor(props) {
                   super(props);

                   this.onChangeTitle = this.onChangeTitle.bind(this);
                   this.onChangeDescription = this.onChangeDescription.bind(
                     this
                   );
                   this.onChangeGuests = this.onChangeGuests.bind(this);
                   this.onChangePricing = this.onChangePricing.bind(this);
                   this.onSubmit = this.onSubmit.bind(this);

                   this.state = {
                     title: "",
                     description: "",
                     guests: 0,
                     pricing: 0,
                   };
                 }

                 onChangeTitle(e) {
                   this.setState({
                     title: e.target.value
                   });
                 }

                 onChangeDescription(e) {
                   this.setState({
                     description: e.target.value
                   });
                 }

                 onChangeGuests(e) {
                   this.setState({
                     guests: e.target.value
                   });
                 }
                 onChangePricing(e) {
                   this.setState({
                     pricing: e.target.value
                   });
                 }

                 onSubmit(e) {
                   e.preventDefault();

                   const newHouse = {
                       title: this.state.title,
                       description: this.state.description,
                       guests: this.state.guests,
                       pricing: this.state.pricing
                   }

                   axios.post('http://localhost:3001/listings/add', newHouse).then(res => (res.data))

                   this.setState({
                     title: "",
                     description: "",
                     guests: 0,
                     pricing: 0
                   });
                 }
                 render() {
                   return (
                     <div className="listform" style={{ marginTop: 20 }}>
                       <h3>Add Listing</h3>
                       <form onSubmit={this.onSubmit}>
                         <div className="form-group">
                           <label>Title: </label>
                           <input
                             type="text"
                             className="form-control"
                             value={this.state.title}
                             onChange={this.onChangeTitle}
                           />
                         </div>
                         <div className="form-group">
                           <label>Description: </label>
                           <input
                             type="text"
                             className="form-control"
                             value={this.state.description}
                             onChange={this.onChangeDescription}
                           />
                         </div>
                         <div className="form-group">
                           <label>Guests: </label>
                           <input
                             type="number"
                             className="form-control"
                             value={this.state.guests}
                             onChange={this.onChangeGuests}
                           />
                         </div>
                         <div className="form-group">
                           <label>Pricing: </label>
                           <input
                             type="number"
                             className="form-control"
                             value={this.state.pricing}
                             onChange={this.onChangePricing}
                           />
                         </div>
                         <div className="form-group">
                           <input
                             type="submit"
                             value="Create Listing"
                             className="btn"
                           />
                         </div>
                       </form>
                     </div>
                   );
                 }
               }