import Link from "next/link";
import { useRouter } from "next/router";
import en from 'locales/en'
import tr from 'locales/tr'
const Menu = () => {

  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  const t = locale === 'en' ? en : tr

  const changeLocale = (e) => {
    const locale = e
    router.push('/', '/', {locale}) 

  }

  return (
    <>
      <nav>
        <Link href="/">{t.product}</Link>
        <Link href="/">{t.services}</Link>
        <Link href="/agencies">{t.agencies}</Link>
        <Link href="/pricing">{t.pricing}</Link>
        <Link href="/">{t.resources}</Link>
      </nav>
      <Link className="btn-get-started" href="/">
        <span>{t.getStarted}</span>
      </Link>
      <Link className="login-btn" href="/">
        {t.login}
      </Link>
      <div className="lang">
        <a href="#">
          <span>{defaultLocale.toUpperCase()}</span> <img src="/images/down-arr.svg" alt="" />
        </a>
        <div className="drop">
          <a onClick={() => changeLocale('en')}>EN</a>
          <a onClick={() => changeLocale('tr')}>TR</a>
        </div>
      </div>
    </>
  );
};


export default Menu;
