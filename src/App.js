import Footer from './components/Footer';
import Header from './components/Header';
import AboutSection from './modules/About';
import CommunitySection from './modules/Community';
import Contact from './modules/Contact';
import Dont from './modules/Dont';
import Faq from './modules/Faq';
import HowSection from './modules/How';
import MainSection from './modules/Main';
import RoadmapSection from './modules/Roadmap';
import TeamSection from './modules/Team';
import TokenomicsSection from './modules/Tokenomics';

function App() {
  return (
    <div className='wrapper'>
      <div className='content'>
        <Header />

        <MainSection />
        <AboutSection />
        <TokenomicsSection />
        <CommunitySection />
        <RoadmapSection />
        <HowSection />
        <Dont />
        <Faq />
        <Contact />
        <TeamSection />

        <Footer />
      </div>
    </div>
  );
}

export default App;
