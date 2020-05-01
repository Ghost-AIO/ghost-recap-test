
import { standard } from '../utils/keys';
import ReCAPTCHA from "react-google-recaptcha";
function RecaptchaTest({ sitekey }) {
    return (
        <div>
            Google reCAPTCHA test
            <ReCAPTCHA
                sitekey={sitekey}
                // onChange={() => {}}
            />,
        </div>
    )
  }

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    const sitekey = standard;
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        sitekey,
      },
    }
}

export default RecaptchaTest