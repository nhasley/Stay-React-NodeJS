import React from 'react'
// import jwt_decode from 'jwt-decode'

const Profile = props => {
  return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{props.user.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{props.user.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default Profile