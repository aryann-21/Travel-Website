import classes from "./Hero.module.css";

function Hero({ cName, heroImg, title, text, buttonText, btnClass, onClick }) {
  return (
    <div className={classes[`${cName}`]}>
      {/* <img alt="HeroImg" src={heroImg} /> */}
      <img alt="HeroImg" src={'https://images.unsplash.com/photo-1534407672671-e77ce1342dc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
      <div className={classes["hero-text"]}>
        <h1>{title}</h1>
        <p>{text}</p>
        {/* Replace the anchor tag with a button */}
        <button onClick={onClick} className={classes[`${btnClass}`]}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Hero;
