import "./grid.css";
//import image from "../../assets/images/yrgo.png";
import mika from "../../assets/images/Mika-About.png";
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
        name="Daniel Bradshaw Thorell"
        title="Manusförfattare"
        img={daniel}
        info="Som manusförfattare i det här projektet har min roll inneburit att utveckla berättelsen samt narrativ. I samarbete med Game Artist har jag hjälpt till att skissa upp bilder i relation till texterna och under projektets gång utbytt idéer av hur illustrationerna ska korrelera med texten."
        email="daniel.bradshaw.thorell@gmail.com"
        color="#FCD5CE"
      />
      <Card
        name="Oscar Elmgren"
        title="Game Artist"
        img={oscar}
        info="I min roll som Game Artist i det här projektet har jag ritat och animerat bilder.  Jag har tillsammans med manusförfattaren utvecklat storyn  och  animerat GIF:ar så att de ska överensstämma med texterna."
        email="oscar.elmgren@gmail.com"
        color="#D8E2DC"
      />
      <Card
        name="Réka Madarász"
        title="Webbutvecklare"
        img={reka}
        info="Som webbutvecklare hade jag uppgiften att utveckla interaktivitet, implementera design från UX utvecklaren, integrera bilder och text från Game Artist samt Manusförfattare och att möjliggöra att bidraget kan existera på webben. Jag deltog i idéprocessen var vi kom på överens om tema och design och hur sidan ska se ut."
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
        <img src={mika} alt="Mika walking away with briefcase" />
      </div>
    </div>
  );
};
export default Grid;
