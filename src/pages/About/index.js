import "./about.css";
import image from "../../assets/images/yrgo.png";

import Grid from "../../components/Grid";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <header>Vi som skapat Molnet Mika</header>
        <Grid />
      </div>
      <div>
        <footer>
          <div>
            <img src={image} alt="yrgo" />
          </div>
          <div>
            <p>
              YRGO yh-utbildning är vår gemensamma nämnare. Gå in på yrgo.se för
              att få veta mer om våra utbildningar!
            </p>
          </div>

          <div className="yrgo-link">
            <a href="https://yrgo.se">GO! →</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
