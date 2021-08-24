import HTMLFlipBook from "react-pageflip";
import Page from "../../components/page/index.js";
import FrontPage from "../../components/FrontPage/index.js";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="book">
        <HTMLFlipBook width={500} height={700} showCover={true}>
          <FrontPage>The life of Mika</FrontPage>
          <Page number="1" header="Start"></Page>
          <Page number="2" header="hehe" even="true"></Page>
          <Page number="3" header="snart slut"></Page>
          <Page number="4" header="nästan" even="true"></Page>
          <Page number="5" header="snart slut"></Page>
          <Page number="6" header="nästan" even="true"></Page>
          <Page number="7" header="snart slut"></Page>
          <Page number="8" header="nästan" even="true"></Page>
          <FrontPage>The End</FrontPage>
        </HTMLFlipBook>
      </div>
    </>
  );
};

export default Home;
