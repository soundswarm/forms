import React, { Component } from 'react'
import {Link} from 'react-router'
import Progress from './Progress'
import validator from 'validator'

class Image extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photo: '',
      imagePreviewUrl: ''
    }
  }

  handlePhoto(e){
    e.preventDefault()
    const reader = new FileReader();
    const photo = e.target.files[0];
    reader.readAsDataURL(photo)
    console.log(reader, photo)
    reader.onloadend = () => {
      this.setState({
        photo,
        imagePreviewUrl: reader.result
      });
    }
  }

  handleClick() {
    if(this.state.email.validEmail && this.state.password.validPassword) {

    }
  }

  render() {
    return (
      <div className="container">
        <h1>Profile Photo</h1>

          <Progress percent={20} />

          <form > 

            <label>Upload a profile photo</label>
            <div className="form-group">
              <img src={this.state.imagePreviewUrl} className="photo-preview"/>
            </div>

            <div className="form-group">
              <label className="custom-file">
                <input onChange={this.handlePhoto.bind(this)} type="file" id="file" className="custom-file-input" />
                <span className="custom-file-control"></span>
              </label>
            </div>

          </form>
          <button onClick={()=>{this.context.router.push('/personal')}} className="btn btn-primary left">Back</button>
          <button onClick={this.handleClick} className="btn btn-primary right">Next</button>
      </div>
    );
  }
}

Image.contextTypes = {
  router: React.PropTypes.func
}

export default Image;