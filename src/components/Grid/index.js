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
        title="Lena Last UX-designer"
        img={lena}
        info="Ethical squid yuccie, fingerstache farm-to-table swag 90's green juice jean shorts pug gochujang. Tilde snackwave selvage echo park, lomo offal kombucha 8-bit listicle pickled fanny pack pork belly normcore sartorial waistcoat. "
        email="lenalast@gmail.com"
        color="#FFF0C3"
      />
      <Card
        title="Daniel Bradshaw Manusförfattare"
        img={daniel}
        info="Ethical squid yuccie, fingerstache farm-to-table swag 90's green juice jean shorts pug gochujang. Tilde snackwave selvage echo park, lomo offal kombucha 8-bit listicle pickled fanny pack pork belly normcore sartorial waistcoat. "
        email="daniel.bradshaw.thorell@gmail.com"
        color="#FCD5CE"
      />
      <Card
        title="Oscar Elmgren Game Artist"
        img={oscar}
        info="Ethical squid yuccie, fingerstache farm-to-table swag 90's green juice jean shorts pug gochujang. Tilde snackwave selvage echo park, lomo offal kombucha 8-bit listicle pickled fanny pack pork belly normcore sartorial waistcoat. "
        email="oscar.elmgren@gmail.com"
        color="#D8E2DC"
      />
      <Card
        title="Réka Madarász Webbutvecklare"
        img={reka}
        info="Ethical squid yuccie, fingerstache farm-to-table swag 90's green juice jean shorts pug gochujang. Tilde snackwave selvage echo park, lomo offal kombucha 8-bit listicle pickled fanny pack pork belly normcore sartorial waistcoat. "
        email="mreka91@gmail.com"
        color="#CDB4DB"
      />
      <Card
        title="Moa Berg Webbutvecklare"
        img={moa}
        info="Ethical squid yuccie, fingerstache farm-to-table swag 90's green juice jean shorts pug gochujang. Tilde snackwave selvage echo park, lomo offal kombucha 8-bit listicle pickled fanny pack pork belly normcore sartorial waistcoat. "
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
