import style from "./Landing.module.scss";
import Lottie from "../../assets/Lotties/index";
const Landing = () => {
  return (
    <div className={style.landing}>
      <div className={style.landingContainer}>
        <div className={style.leftlanding}>
          <h1>Welcome to VedXpert</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            nemo sunt cum, voluptates facere aliquam sed illum! Pariatur
            repellendus necessitatibus ipsa in fugiat beatae fugit corrupti!
            Laborum suscipit incidunt odit?
          </p>
          <div className={style.landingbuttons}>
            <button>Explore Now</button>
            <button>Get Started</button>
          </div>
        </div>
        <div className={style.rightlanding}>
          <Lottie />
        </div>
      </div>
    </div>
  );
};

export default Landing;
