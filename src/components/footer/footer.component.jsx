import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-item">
        <h2>HELP & INFORMATION</h2>
        <p>Contact us</p>
        <p>Shipping information</p>
        <p>Exchange and return</p>
        <p>Track order</p>
        <p>Privacy policy</p>
        <p>Terms and conditions</p>
      </div>
      <div className="footer-item">
        <h2>ABOUT US</h2>
        <p>About MADNESS</p>
        <p>Find a store</p>
      </div>
      <div className="footer-item">
        <h2>PAYMENT METHOD</h2>
        <ul>
          <i className="payment_1"></i>
          <i className="payment_2"></i>
          <i className="payment_3"></i>
          <i className="payment_4"></i>
          <i className="payment_5"></i>
        </ul>
      </div>
      <div className="footer-item">
        <h2>FOLLOW US</h2>
        <p>Facebbok</p>
        <p>Instagram</p>
        <p>WeChat</p>
        <p>Weibo</p>
      </div>
    </div>
  );
};
export default Footer;
