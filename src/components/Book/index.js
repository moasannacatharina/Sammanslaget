import { useCallback } from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "../Page";
import FrontPage from "../FrontPage/";

const Book = () => {
  const onFlip = useCallback((e) => {
    console.log("Current page: " + e.data);
  }, []);

  return (
    <HTMLFlipBook
      width={500}
      height={700}
      minWidth={315}
      maxWidth={500}
      minHeight={400}
      maxHeight={700}
      maxShadowOpacity={0.5}
      showCover={true}
      onFlip={onFlip}
    >
      <FrontPage>Mika</FrontPage>
      <Page
        number="1"
        // header="Start"
        children="Det här är berättelsen om ett ungt regnmoln, ett moln med framtidsutsikter och hopp om livet. Det är också berättelsen om hur det ibland kan vara tufft att ta motgångar och hur tufft det är att resa sig upp igen på egen hand och om hur en knuff i rätt rikning kan vara helt avgörande. Det här är berättelsen som vi valt att kalla “Utlämande Mika”."
      ></Page>
      <Page number="2" header="Akt 1" even="even"></Page>
      <Page number="3" header="Akt 1"></Page>
      <Page number="4" header="Akt 2" even="even"></Page>
      <Page number="5" header="Akt 2"></Page>
      <Page number="6" header="Akt 3" even="even"></Page>
      <Page number="7" header="Akt 3"></Page>
      <Page number="8" header="The End" even="even"></Page>
      <FrontPage></FrontPage>
    </HTMLFlipBook>
  );
};

export default Book;
