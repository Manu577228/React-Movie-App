import HeroBanner from "./heroBanner/HeroBanner";
import Popular from "./popular/Popular";
import "./style.scss";
import Trending from "./trending/Trending";
import TopRated from "./topRated/TopRated";

function Home() {
  return (
    <div>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
}

export default Home;
