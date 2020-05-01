
import { standard } from '../utils/keys';
import dynamic from 'next/dynamic';
const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'))

function RecaptchaTest({ sitekey }) {
    return (
        <div>
            <h2>Google reCAPTCHA test</h2>
            <ReCAPTCHA
                sitekey={sitekey}
            />
        </div>
    )
  }

export async function getStaticProps() {

    const sitekey = standard;
  
    return {
      props: {
        sitekey,
      },
    }
}

export default RecaptchaTest