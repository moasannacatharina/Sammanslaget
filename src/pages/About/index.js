import "./about.css";
import image from "../../assets/images/yrgo.png";

import Card from "../../components/Card";

const About = () => {
  return (
    <>
      <header>Vi som skapat "Utelämnade Mika"</header>
      <div className="grid">
        <Card
          title="Lena Last UX-designer"
          img="heheh"
          info="Jag är en trevlig prick"
          email="mail@gmail.com"
          color="yellow"
        />
        <Card
          title="Daniel Bradshaw Manusförfattare"
          img="heheh"
          info="HEJ!"
          email="mail@gmail.com"
          color="pink"
        />
        <Card
          title="Oscar Elmgren Game Artist"
          img="heheh"
          info="HEJ!"
          email="mail@gmail.com"
          color="green"
        />
        <Card
          title="Réka Madarász Webbutvecklare"
          img="heheh"
          info="HEJ!"
          email="mail@gmail.com"
          color="purple"
        />
        <Card
          title="Moa Berg Webbutvecklare"
          img="heheh"
          info="HEJ!"
          email="mail@gmail.com"
          color="blue"
        />
        <Card color="hotpink" />
      </div>
      <footer>
        <img src={image} alt="yrgo" />
        <p>
          YRGO yh-utbildning är vår gemensamma nämnare. Gå in på yrgo.se för att
          få veta mer om våra utbildningar!
        </p>
        <a href="https://yrgo.se">Go! →</a>
      </footer>
    </>
  );
};

export default About;
