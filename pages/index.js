import Link from 'next/link'

function Home() {
  return (
    <div>
    <h1>Ghost AIO Recaptcha Test Site</h1>
    <ul>
      <li>
        <Link href="/recaptcha-test">
          <a>Standard Recaptcha Test</a>
        </Link>
      </li>
      <li>
        <Link href="/invisible-recaptcha-test">
          <a>Invisible Recaptcha Test</a>
        </Link>
      </li>
      <li>
        <Link href="/v3-recaptcha-test">
          <a>v3 Recaptcha Test</a>
        </Link>
      </li>
    </ul>
    </div>
  )
}

export default Home