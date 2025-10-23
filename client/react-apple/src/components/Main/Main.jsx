import Alert from "../../components/Alert/Alert";
import IpadPro from "../../components/IpadPro/IpadPro";
import MacBookAir from "../../components/MacBookAir/MacBookAir";
import IphoneElevenPro from "../../components/IphoneElevenPro/IphoneElevenPro";
import IphoneAndCovidSection from "../../components/IphoneAndCovidSection/IphoneAndCovidSection";
import AppleTvAndWatch from "../../components/AppleTvAndWatch/AppleTvAndWatch";
import ArcadeAndAppleCard from "../../components/ArcadeAndAppleCard/ArcadeAndAppleCard";
import { YoutubeVideos } from "../../components/YoutubeVideos/YoutubeVideos";


function App() {
  return (
    <>
      <Alert />
      <IpadPro />
      <MacBookAir />
      <IphoneElevenPro />
      <IphoneAndCovidSection />
      <AppleTvAndWatch />
      <ArcadeAndAppleCard />
      {/* <YoutubeVideos /> */}
    </>
  );
}

export default App;
