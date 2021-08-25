import { useCallback } from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "../Page";
import FrontPage from "../FrontPage/";

import gif1 from "../../assets/images/Gif01.gif";

const Book = () => {
  const onFlip = useCallback((e) => {
    console.log("Current page: " + e.data);
  }, []);

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
    >
      {/* <FrontPage>Mika</FrontPage> */}
      <Page
        number="1"
        header="Start"
        children="Det här är berättelsen om ett ungt regnmoln, ett moln med framtidsutsikter och hopp om livet."
        image={gif1}
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
