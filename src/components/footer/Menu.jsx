import Link from 'next/link'
const Menu = () => {
  return (
    <>
        <div className="col-lg-2 link-area">
          <Link href="/">Peki</Link>
          <Link href="/about">About</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="col-lg-2 link-area">
          <Link href="/">Product</Link>
          <Link href="/">Whatsapp</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Facebook</Link>
          <Link href="/">Twitter</Link>
          <Link href="/integrations">Integrations</Link>
        </div>
        <div className="col-lg-2 link-area">
          <Link href="/">Services</Link>
          <Link href="/reccomendations">Reccomendations Engine</Link>
          <Link href="/sentiment">Sentiment Analysis</Link>
          <Link href="/prediction">Prediction Model</Link>
        </div>
        <div className="col-lg-2 link-area">
          <Link href="/">Agencies</Link>
          <Link href="/agencies">Hire Agency</Link>
          <Link href="/">Become a Partner</Link>
        </div>
        <div className="col-lg-2 link-area">
          <Link href="/">Resources</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/learn">Learn</Link>
          <Link href="/">Get Inspired</Link>
        </div>
    </>
  );
};

export default Menu;
