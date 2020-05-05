import React, { Component } from 'react';
import { invisible } from '../utils/keys';
import dynamic from 'next/dynamic';
import Router from 'next/router';
import ReCAPTCHA from 'react-google-recaptcha';

const recaptchaRef = React.createRef();

class InvisibleRecaptcha extends Component {

  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      statusMessage:"Click the Test reCAPTCHA button to test invisble reCAPTCHA"
    }
  }
  testInvisible(e) {

    e.preventDefault();

    this.setState({
      statusMessage:"Testing invisible reCAPTCHA now"
    });

    return setTimeout(() => {
      recaptchaRef.current.execute();
    }, 500);
  
  
  }
  onChange(value) {
    console.log(value);

    this.setState({ 
      statusMessage:"Test Completed"
    });
  }
  render() {
      return (
        <div>
            <h2>Google Invisible reCAPTCHA test</h2>
            <form onSubmit={this.testInvisible.bind(this)}>
              <h3>{this.state.statusMessage}</h3>
            <ReCAPTCHA
                onChange={this.onChange.bind(this)}
                ref={recaptchaRef}
                sitekey={this.props.sitekey}
                size="invisible"
                badge="inline"
            />
            <br></br>
            <button id="test" type="submit">Test reCAPTCHA</button>
            </form>
            <br></br>
            <button onClick={() => Router.reload()}>Reset</button>
        </div>
    )
  }
}

export async function getStaticProps() {

    const sitekey = invisible;
  
    return {
      props: {
        sitekey,
      },
    }
}

export default dynamic(() => Promise.resolve(InvisibleRecaptcha), {
  ssr: false
});