import React, { Component } from 'react';
import { invisible } from '../utils/keys';
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = React.createRef();
function RecaptchaTest({ sitekey }) {
    return (
        <div>
            Google Invisible reCAPTCHA test
            <form onSubmit={() => { recaptchaRef.current.execute(); }}>
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={sitekey}
                size="invisible"
                badge="inline"
                // onChange={() => {}}
            />
            <button
            type="submit"
            id="test"
            // onClick={() => {
            //     recaptchaRef.current.execute();

            //     setTimeout(() => {

            //     })
            // }}
            >Test Recaptcha</button>
            </form>
        </div>
    )
  }

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    const sitekey = invisible;
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        sitekey,
      },
    }
}

export default RecaptchaTest