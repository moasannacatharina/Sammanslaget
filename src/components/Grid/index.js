import "./index.css";
import image from "../../assets/images/yrgo.png";

import Card from "../Card";

const Grid = () => {
  return (
    <div className="grid">
      <Card
        title="Lena Last UX-designer"
        img={image}
        info="Ethical squid yuccie, fingerstache farm-to-table swag 90's green juice jean shorts pug gochujang. Tilde snackwave selvage echo park, lomo offal kombucha 8-bit listicle pickled fanny pack pork belly normcore sartorial waistcoat. "
        email="mail@gmail.com"
        color="#FFF0C3"
      />
      <Card
        title="Daniel Bradshaw Manusförfattare"
        img={image}
        info="Ethical squid yuccie, fingerstache farm-to-table swag 90's green juice jean shorts pug gochujang. Tilde snackwave selvage echo park, lomo offal kombucha 8-bit listicle pickled fanny pack pork belly normcore sartorial waistcoat. "
        email="mail@gmail.com"
        color="#FCD5CE"
      />
      <Card
        title="Oscar Elmgren Game Artist"
        img={image}
        info="Ethical squid yuccie, fingerstache farm-to-table swag 90's green juice jean shorts pug gochujang. Tilde snackwave selvage echo park, lomo offal kombucha 8-bit listicle pickled fanny pack pork belly normcore sartorial waistcoat. "
        email="mail@gmail.com"
        color="#D8E2DC"
      />
      <Card
        title="Réka Madarász Webbutvecklare"
        img={image}
        info="Ethical squid yuccie, fingerstache farm-to-table swag 90's green juice jean shorts pug gochujang. Tilde snackwave selvage echo park, lomo offal kombucha 8-bit listicle pickled fanny pack pork belly normcore sartorial waistcoat. "
        email="mail@gmail.com"
        color="#CDB4DB"
      />
      <Card
        title="Moa Berg Webbutvecklare"
        img={image}
        info="Ethical squid yuccie, fingerstache farm-to-table swag 90's green juice jean shorts pug gochujang. Tilde snackwave selvage echo park, lomo offal kombucha 8-bit listicle pickled fanny pack pork belly normcore sartorial waistcoat. "
        email="mail@gmail.com"
        color="#CCDBFD"
      />
      <Card color="hotpink" />
    </div>
  );
};
export default Grid;
