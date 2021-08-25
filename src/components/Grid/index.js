import "./index.css";

import Card from "../Card";

const Grid = () => {
  return (
    <div className="grid">
      <Card
        title="Lena Last UX-designer"
        img="heheh"
        info="Jag är en trevlig prick"
        email="mail@gmail.com"
        color="#FFF0C3"
      />
      <Card
        title="Daniel Bradshaw Manusförfattare"
        img="heheh"
        info="HEJ!"
        email="mail@gmail.com"
        color="#FCD5CE"
      />
      <Card
        title="Oscar Elmgren Game Artist"
        img="heheh"
        info="HEJ!"
        email="mail@gmail.com"
        color="#D8E2DC"
      />
      <Card
        title="Réka Madarász Webbutvecklare"
        img="heheh"
        info="HEJ!"
        email="mail@gmail.com"
        color="#CDB4DB"
      />
      <Card
        title="Moa Berg Webbutvecklare"
        img="heheh"
        info="HEJ!"
        email="mail@gmail.com"
        color="#CCDBFD"
      />
      <Card color="hotpink" />
    </div>
  );
};
export default Grid;
