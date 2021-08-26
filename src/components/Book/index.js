import React from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "../Page/";
import FrontPage from "../FrontPage/";

import gif1 from "../../assets/images/Gif01.gif";
import gif2 from "../../assets/images/Gif02.gif";
import gif3 from "../../assets/images/Gif03.gif";
import gif4 from "../../assets/images/Gif04.gif";
import gif5 from "../../assets/images/Gif05.gif";
const Book = () => {
  return (
    <HTMLFlipBook
      width={500}
      height={600}
      minWidth={315}
      maxWidth={500}
      minHeight={400}
      maxHeight={700}
      maxShadowOpacity={0.5}
      showCover={false}
      flippingTime={800}
    >
      {/* <FrontPage>Mika</FrontPage> */}
      <Page></Page>
      <Page
        even="even"
        header="Förord"
        children={`Vi alla har någon gång känt oss utanför. Det finns dom som är utanför på ett sätt som blir förödande och kräver medmänsklighet för att övervinna. 
        \nHär får du följa Mika, hur hens liv tog en riktning hen aldrig kunde föreställa sig och att med kärlek kan vi alla få ett värdigare liv.
        \nVarsågod och börja ♡`}
      ></Page>
      <Page
        number="1"
        header="Akt 1"
        image={gif1}
        children="Mika vaknar som vanligt upp i sitt soldränkta sovrum med ett brett leende på läpparna.  Just den här dagen ska komma att bli alldeles speciell."
      ></Page>
      <Page
        number="2"
        header="Akt 1"
        even="even"
        image={gif2}
        children="Det går undan när Mika ränner fram längs gatorna, han är ivrig inför mötet med chefen och sin stora befordran."
      ></Page>
      <Page
        number="3"
        header="Akt 2"
        image={gif3}
        children="Väl på kontoret blir Mika blir överrumplad av chefens burdusa ton och den snabba vändningen.
Istället för att bli befordrad blir Mika avskedad med omedelbar verkan."
      ></Page>
      <Page
        number="4"
        header="Akt 2"
        even="even"
        image={gif4}
        children="I och med uppsägningen ställs Mikas liv på ända och i sin uppgivenhet och fattigdom tar han till flaskan."
      ></Page>
      <Page
        number="5"
        header="Akt 3"
        image={gif5}
        children="Mika blir av med sin lägenhet och hamnar på de kalla och hårda gatorna. Där strövar han omkring utan något mål eller riktning."
      ></Page>
      <Page
        number="6"
        header="Akt 3"
        even="even"
        children="Årstiderna passerar och Mika blir med tiden allt  mer missmodig. Han rakar sig inte och sover om nätterna på parkbänkar med ett lapptäcke han hittat i en soptunna.
"
      ></Page>
      <Page
        number="7"
        header="Akt 4"
        children="En dag springer Mark plötsligt på Mika och tar med honom hem.
"
      ></Page>
      <Page
        number="8"
        header="Akt 4"
        children="Efter vistelsen hos Mark förändras  Mikas liv till det bättre. Glad i hågen"
      ></Page>
      <Page number="9" header="The End" children="A nice goodbye ♡"></Page>
      <Page number="10" even="even"></Page>
      <FrontPage></FrontPage>
    </HTMLFlipBook>
  );
};

export default Book;
