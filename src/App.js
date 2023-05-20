import Header from './components/Header/Header';
import PopularDestinationsSection from './components/Sections/PopularDestinationsSection';
import HotelsSection from './components/Sections/HotelsSection/HotelsSection';
import ActivitiesSection from './components/Sections/ActivitiesSection/ActivitiesSection';
import TripsSection from './components/Sections/TripsSection/TripsSection';

function App() {
  return (
    <div className="App">
      <Header />
      <PopularDestinationsSection />
      <HotelsSection />
      <TripsSection />
      <ActivitiesSection />
    </div>
  );
}

export default App;
