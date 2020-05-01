import React, { Component } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { v3 } from '../utils/keys';
import {ReCaptcha ,loadReCaptcha } from 'react-recaptcha-v3';
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
            />

      </div>
    );
  };
};
  

export async function getStaticProps() {


    const config = v3;
  
    return {
      props: {
        config,
      },
    }
}

// export default RecaptchaTest
export default dynamic(() => Promise.resolve(RecaptchaTest), {
  ssr: false
})