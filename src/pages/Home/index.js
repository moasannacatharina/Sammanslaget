import HTMLFlipBook from "react-pageflip";
import Page from "../../components/Page";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="book">
        <HTMLFlipBook width={500} height={700}>
          <Page number="1" header="Start"></Page>
          <Page number="2" header="hehe" even="true"></Page>
          <Page number="3" header="snart slut"></Page>
          <Page number="4" header="the END" even="true"></Page>
        </HTMLFlipBook>
      </div>
    </>
  );
};

export default Home;
