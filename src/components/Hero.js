import classes from "./Hero.module.css";

function Hero({ cName, heroImg, title, text, buttonText, btnClass, onClick }) {
  return (
    <div className={classes[`${cName}`]}>
      <img alt="HeroImg" src={heroImg} /> {/* Use heroImg prop here */}
      <div className={classes["hero-text"]}>
        <h1>{title}</h1>
        <p>{text}</p>
        <button onClick={onClick} className={classes[`${btnClass}`]}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Hero;
