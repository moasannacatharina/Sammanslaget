import "./grid.css";
//import image from "../../assets/images/yrgo.png";
import rectangle from "../../assets/images/Rectangle.png";
import daniel from "../../assets/images/daniel.jpeg";
import lena from "../../assets/images/lena.jpg";
import moa from "../../assets/images/moa-min.jpeg";
import oscar from "../../assets/images/Oscar.jpg";
import reka from "../../assets/images/reka.jpg";

import Card from "../Card";

const Grid = () => {
  return (
    <div className="grid">
      <Card
        name="Lena Last"
        title="UX-designer"
        img={lena}
        info="I rollen som UX-designer tog jag lead i vårt team och började med att starta en idégenereringsprocess. När grundidén var på plats delade jag in oss i mindre team och påbörjade arbetet. 
        Jag gjorde digitala skisser och grafisk profil i Figma och delade min helhetsvision med teamet som sedan webbutvecklarna fick implementera. 
        
        Eftersom jag har en bakgrund i webbutveckling, stöttade jag webbutvecklarna där det behövdes. Jag tog även beslut i avgränsningar och riktning vid behov för att inte fastna i processen och möta deadline. "
        email="lenalast@gmail.com"
        color="#FFF0C3"
      />
      <Card
        name="Daniel Bradshaw"
        title="Manusförfattare"
        img={daniel}
        info="Ethical squid yuccie, fingerstache farm-to-table swag 90's green juice jean shorts pug gochujang. Tilde snackwave selvage echo park, lomo offal kombucha 8-bit listicle pickled fanny pack pork belly normcore sartorial waistcoat. "
        email="daniel.bradshaw.thorell@gmail.com"
        color="#FCD5CE"
      />
      <Card
        name="Oscar Elmgren"
        title="Game Artist"
        img={oscar}
        info="Ethical squid yuccie, fingerstache farm-to-table swag 90's green juice jean shorts pug gochujang. Tilde snackwave selvage echo park, lomo offal kombucha 8-bit listicle pickled fanny pack pork belly normcore sartorial waistcoat. "
        email="oscar.elmgren@gmail.com"
        color="#D8E2DC"
      />
      <Card
        name="Réka Madarász"
        title="Webbutvecklare"
        img={reka}
        info="Ethical squid yuccie, fingerstache farm-to-table swag 90's green juice jean shorts pug gochujang. Tilde snackwave selvage echo park, lomo offal kombucha 8-bit listicle pickled fanny pack pork belly normcore sartorial waistcoat. "
        email="mreka91@gmail.com"
        color="#CDB4DB"
      />
      <Card
        name="Moa Berg"
        title="Webbutvecklare"
        img={moa}
        info="Som webbutvecklare i detta projekt har mina uppgifter bestått i att ta teamets idéer och anpassa dem till webben. 
        Tillsammans med Réka har jag skapat en projektstruktur i React och implementerat tillverkade delar som text och bilder, styling och andra grafiska element som försetts av vår UX-designer, Game Artist och Manusförfattare. Jag har även arbetat med att göra vår hemsida interaktiv och löst hosting av hemsidan så att den kan avnjutas av alla."
        email="bergmoa@gmail.com"
        color="#CCDBFD"
      />
      <div className="rectangle-card">
        <img src={rectangle} alt="cartoon brain with a set of weights" />
      </div>
    </div>
  );
};
export default Grid;
