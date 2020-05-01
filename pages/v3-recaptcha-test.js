import React, { Component } from 'react';
import Router from 'next/router';
import { v3 } from '../utils/keys';
import {ReCaptcha ,loadReCaptcha } from "react-recaptcha-v3";
const axios = require('axios');



class RecaptchaTest extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      recaptchaResponse:null
    }
  }
  componentDidMount() {
    loadReCaptcha(this.props.config.sitekey);
  }
  verifyCallback = (token) => {
    // Here you will get the final recaptchaToken!!!  
    axios.post('/api/verify', { token }).then(response => {
      this.setState({ recaptchaResponse: JSON.stringify(response.data, null, 4) });
    });

  }

  render() {

    if (this.state.recaptchaResponse) {
      return (
        <div>
        <h2>reCAPTCHA v3 test results </h2>
        <br></br>
        <code>{this.state.recaptchaResponse}</code>
        <br></br>
        <br></br>
        <button onClick={() => Router.reload()}>Reset</button>
      </div>
      )
    }
    return (
      <div>
       <h2> reCAPTCHA v3 test</h2>
            <ReCaptcha 
                sitekey={this.props.config.sitekey}
                action={this.props.config.action}
                verifyCallback={this.verifyCallback}
                // onChange={() => {}}
            />

      </div>
    );
  };
};
  

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    const config = v3;
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        config,
      },
    }
}

export default RecaptchaTest