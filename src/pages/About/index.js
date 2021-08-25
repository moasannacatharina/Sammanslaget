import "./about.css";
import image from "../../assets/images/yrgo.png";

import Grid from "../../components/Grid";

const About = () => {
  return (
    <div className="about-container">
      <header>Vi som skapat Molnet Mika</header>
      <Grid />
      <footer>
        <img src={image} alt="yrgo" />
        <p>
          YRGO yh-utbildning är vår gemensamma nämnare. Gå in på yrgo.se för att
          få veta mer om våra utbildningar!
        </p>
        <a href="https://yrgo.se">GO! →</a>
      </footer>
    </div>
  );
};

export default About;
