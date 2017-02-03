import React, { Component } from 'react'
import {Link} from 'react-router'
import Progress from './Progress'
import validator from 'validator'

class Personal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      first: '',
      last: '',
      DOB: '',
      phone: '',
      validEmail: false,
      validPassword: false,
      validFirst: false,
      validLast: false,
      validDOB: false,
      validPhone: false
    }
  }

  handleEmail(e) {
    const email = e.target.value
    this.setState({email})
    if(validator.isEmail(email)) {
      this.setState({validEmail: true})
    }
  }

  validatePassword(password) {
    if(password.length < 10) {
      this.setState({validPassowrd: false})
      return 'weak'
    }
    if(password.length < 12) {
      this.setState({validPassowrd: true})
      return 'medium'
    }
    if(password.length >=12) {
      this.setState({validPassword: true})
      return 'excellent'
    }
  }
  
  handlePassword(e) {
    const password = e.target.value
    this.setState({password})
    if(this.validatePassword(password) !== 'weak') {
      e.target.classList.add('form-control-danger')
    }
  }

  handleFirst(e) {
    const first = e.target.value
    this.setState({first})
    if(validator.isAlphanumeric(first)) {
      this.setState({validFirst: true})
    }
  }

  handleLast(e) {
    const last = e.target.value
    this.setState({last})
    if(validator.isAlphanumeric(last)) {
      this.setState({validLast: true})
    }
  }

  handleDOB(e) {
    const DOB = new Date(e.target.value)
    const eighteenYears = 567648000
    this.setState({DOB})
    if(Date.now() - DOB.getTime() >= eighteenYears) {
      this.setState({validDOB: true})
    }
  }

  handlePhone(e) {
    const phone = e.target.value
    this.setState({phone})
    const digits = phone.split('-').join('').split('(').join('').split(')').join('')
    if(digits.search(/[0-9]+/) > -1) {
      this.setState({validPhone: true})
    }
  }

  handleClick() {
    console.log(this.state.validEmail , this.state.validPassword , this.state.validFirst , this.state.validLast , this.state.validDOB , this.state.validPhone)
    if(this.state.validEmail && this.state.validPassword && this.state.validFirst && this.state.validLast && this.state.validDOB && this.state.validPhone) {
      console.log('sdfs',this.context)
      this.context.router.push('/image')
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Personal Information</h1>

          <Progress percent={10} />

          <form > 
            <div className="form-group">
              <label>Email</label>
              <input onChange={this.handleEmail.bind(this)} className="form-control" type="email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input onChange={this.handlePassword.bind(this)} className="form-control" type="password" />
              {/* <div className="form-control-feedback">Weak Password</div> */}
            </div>

            <div className="form-group">
              <label>First Name</label>
              <input onChange={this.handleFirst.bind(this)} className="form-control" type="text" />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input onChange={this.handleLast.bind(this)} className="form-control" type="text" />
            </div>

            <div className="form-group">
              <label>Date of Birth</label>
              <input onChange={this.handleDOB.bind(this)} className="form-control" type="date" />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input onChange={this.handlePhone.bind(this)} className="form-control" type="tel" />
            </div>

          </form>
          <button onClick={this.handleClick.bind(this)} className="btn btn-primary">Next</button>
      </div>
    );
  }
}

Personal.contextTypes = {
  router: React.PropTypes.func
}

export default Personal;