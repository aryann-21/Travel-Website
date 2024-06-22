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
          <a className={classes["fb"]} style={{ cursor: 'pointer' }}>
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a className={classes["tw"]} style={{ cursor: 'pointer' }}>
            <i class="fa-brands fa-square-twitter"></i>
          </a>
          <a className={classes["in"]} style={{ cursor: 'pointer' }}>
            <i class="fa-brands fa-square-instagram"></i>
          </a>
        </div>
      </div>{" "}
      {/* Bottom Section */}
      <div className={classes["bottom-row"]}>
        <div>
          <h4>Project</h4>
          <a>Changelog</a>
          <a>Status</a>
          <a>License</a>
          <a>All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a>GitHub</a>
          <a>Issues</a>
          <a>Project</a>
          <a>Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a>Support</a>
          <a>TroubleShooting</a>
          <a>Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a>Term of Service</a>
          <a>Privacy Policy</a>
          <a>License</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
