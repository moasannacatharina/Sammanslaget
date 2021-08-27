import React from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "../Page/";
import FrontPage from "../FrontPage/";

import gif1 from "../../assets/images/Gif01.gif";
import gif2 from "../../assets/images/Gif02.gif";
import gif3 from "../../assets/images/Gif03.gif";
import gif4 from "../../assets/images/Gif04.gif";
import gif5 from "../../assets/images/Gif05.gif";
import gif6 from "../../assets/images/Gif06.gif";
import gif7 from "../../assets/images/Gif07.gif";
import gif51 from "../../assets/images/Gif5.5.gif";
import arstid from "../../assets/images/Gif-Arstider.gif";

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
      <Page image=""></Page>
      <Page
        image=""
        even="even"
        header="Prolog"
        children={`Alla har vi någon gång känt oss utanför på något sätt. För vissa personer kan utanförskapet
        bli förödande och då krävs det medmänsklighet för att man ska kunna komma tillbaka upp på
        fötterna.
        \nI den här berättelsen får vi lära känna Molnet Mika vars liv en dag tar en plötslig vändning
        helt ur det blå.
        \nDet här är en berättelse om vikten av kärlek och betydelsen av medmänsklighet för att
        kunna leva ett värdigt liv.`}
      ></Page>
      <Page
        number="1"
        image={gif1}
        children="Mika vaknar som vanligt upp i sitt soldränkta sovrum med ett brett leende på läpparna.  
        Just den här dagen ska komma att bli alldeles speciell."
      ></Page>
      <Page
        number="2"
        even="even"
        image={gif2}
        children="När Mika ränner fram längs gatorna går det undan, han skuttar fram i sin iver inför mötet med
        chefen. Idag ska han äntligen få sin välförtjänta befordran,
        som han har längtat!"
      ></Page>
      <Page
        number="3"
        image={gif3}
        children="Väl på kontoret blir Mika överrumplad av chefens burdusa ton.
        Mika kan känna av hur hela världen snurrar när chefen meddelar att Mika,
        istället för att bli befordrad, får sparken med omedelbar verkan.
        Det blir ett ohyggligt nederlag för Mika."
      ></Page>
      <Page
        number="4"
        even="even"
        image={gif4}
        children="I och med uppsägningen ställs Mikas liv på ända.
        Mika saknar medel att ta sig samman och tappar så småningom fattningen.
        I sin uppgivenhet och fattigdom tar han till flaskan medan räkningarna tornar upp sig.
        Mika försöker i den mån han kan att repa sig men han klarar helt enkelt inte av att sköta
        motgången på egen hand."
      ></Page>
      <Page
        number="5"
        image={gif5}
        children="Mika har nått botten och utan verktygen som krävs för att återhämta sig går allt utför.
        Han blir i allt elände av med sin lägenhet och hamnar på de nakna och grymma gatorna som
        inte är välkomnande mot någon.
        Där strövar han omkring i sin ensamhet utan mål eller mening.
        Det blir vår och det blir sommar, hösten passerar och vintern är sträng."
      ></Page>
      <Page
        number="6"
        image={arstid}
        even="even"
        children="Tiden går och Mikas situation blir allt värre, om nätterna sover han på de parkbänkar han
        hittar.
        Han vet inte vart han ska vända sig eller vad han kan göra för att komma tillbaka upp på
        fötterna igen. Livet känns allt mer hopplöst."
      ></Page>
      <Page
        number="7"
        image={gif6}
        children="En dag springer en godhjärtad kille vid namn Mark plötsligt på Mika.
        Mark känner medlidande och ömhet för Mika som utan varken kärlek eller närhet blivit utstött
        och vresig.
        Mark beslutar att ta med Mika hem till sig för att hjälpa honom.
        Mika är inledningsvis tveksam till att ta emot hjälp, men lugnet som Mark utstrålar och
        respekten som han visar Mika gör att han successivt blir allt tryggare."
      ></Page>
      <Page
        number="8"
        image={gif51}
        even="even"
        children="Mark berättar att han tidigare i livet varit i samma situation som Mika men att även om
        det kan kännas hopplöst så måste Mika förstå att det finns hjälp att få man måste bara
        vara beredd att våga ta emot den.
        Under några intensiva månader så tränar Mika och Mark regelbundet ihop, de lyfter vikter,
        springer, äter hälsosam kost och pratar om hur man ska hantera motgångar."
      ></Page>
      <Page
        number="9"
        image={gif7}
        children="Med tiden blir Mika mer och mer lik sitt gamla frodiga jag och de båda blir goda vänner.
        Efter vistelsen hos Mark förändras Mikas liv till det bättre. Glad i hågen och med nytt mod
        kan Mika med hjälpen från sin nya vän återgå till sitt självgående liv. Den här gången är
        han stärkt av vetskapen att det alltid finns hjälp runt hörnet för den som behöver det."
      ></Page>
      <Page
        number="10"
        header="Epilog"
        children={`Om du eller någon du möter befinner sig i en liknande situation som Mikas så finns det
        alltid hjälp att få. Räddningsmissionen bedriver ett 30-tal olika verksamheter för att hjälpa
        utsatta i samhället. 
        \nDe jobbar med akuta, långsiktiga samt förebyggande insatser.
        \nBesök Räddningsmissionens hemsida. ♡`}
        image=""
        even="even"
      ></Page>

      <FrontPage></FrontPage>
    </HTMLFlipBook>
  );
};

export default Book;
