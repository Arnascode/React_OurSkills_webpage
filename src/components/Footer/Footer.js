import css from './Footer.module.css';

function Footer() {
  return (
    <div className={css.footer}>
      <p className={css.center}>&copy; {new Date().getFullYear()} All rights reserved.</p>
    </div>
  );
}

export default Footer;
