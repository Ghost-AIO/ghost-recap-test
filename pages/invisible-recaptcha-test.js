import React, { Component } from 'react';
import { invisible } from '../utils/keys';
import dynamic from 'next/dynamic';

const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'))
// import ReCAPTCHA from 'react-google-recaptcha';

const recaptchaRef = React.createRef();
function RecaptchaTest({ sitekey }) {
    return (
        <div>
            <h2>Google Invisible reCAPTCHA test</h2>
            <form onSubmit={() => { recaptchaRef.current.execute(); }}>
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={sitekey}
                size="invisible"
                badge="inline"
            />
            <button id="test" onClick={() => { recaptchaRef.current.execute(); }}>Test Recaptcha</button>
            </form>
        </div>
    )
  }

export async function getStaticProps() {

    const sitekey = invisible;
  
    return {
      props: {
        sitekey,
      },
    }
}

export default RecaptchaTest