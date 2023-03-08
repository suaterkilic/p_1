import Link from 'next/link'
const Logo = () => {
  return (
    <>
        <Link href="/">
            <img className="img-fluid" src="/images/logo.svg" />
        </Link>
    </>
  )
}

export default Logo