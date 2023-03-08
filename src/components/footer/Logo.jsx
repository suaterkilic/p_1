import Link from "next/link";

const Logo = () => {
  return (
    <>
      <div class="col-lg-2 item">
        <Link href="/">
          <img src="/images/footer-logo.svg" />
        </Link>
      </div>
    </>
  );
};

export default Logo;
