import './footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Davin Meas. All rights reserved.</p>
    </footer>
  );
}

export default Footer;