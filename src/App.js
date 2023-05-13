import Header from './components/Header/Header';
import PopularDestinationsSection from './components/Sections/PopularDestinationsSection';
import HotelsSection from './components/Sections/HotelsSections/HotelsSection';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <PopularDestinationsSection />
      <HotelsSection />
    </div>
  );
}

export default App;
