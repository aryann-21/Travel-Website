import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      {/* Top Section */}
      <div className={classes["top-row"]}>
        <div>
          <h1>Rajasthan Royale</h1>
          <p>Explore Rajasthan’s royal heritage, vibrant culture, and stunning beauty</p>
        </div>
        <div>
          <p className={classes["fb"]} style={{ cursor: 'pointer' }}>
            <i class="fa-brands fa-facebook"></i>
          </p>
          <p className={classes["tw"]} style={{ cursor: 'pointer' }}>
            <i class="fa-brands fa-square-twitter"></i>
          </p>
          <p className={classes["in"]} style={{ cursor: 'pointer' }}>
            <i class="fa-brands fa-square-instagram"></i>
          </p>
        </div>
      </div>{" "}
      {/* Bottom Section */}
      <div className={classes["bottom-row"]}>
        <div>
          <h4>Project</h4>
          <p>Changelog</p>
          <p>Status</p>
          <p>License</p>
          <p>All Versions</p>
        </div>
        <div>
          <h4>Community</h4>
          <p>GitHub</p>
          <p>Issues</p>
          <p>Project</p>
          <p>Twitter</p>
        </div>
        <div>
          <h4>Help</h4>
          <p>Support</p>
          <p>TroubleShooting</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h4>Others</h4>
          <p>Term of Service</p>
          <p>Privacy Policy</p>
          <p>License</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
