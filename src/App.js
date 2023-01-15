import Banner from './components/Banner';
import FormColaborador from './components/pages/FormColaborador';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Banner/>
      <FormColaborador/>
      <Team teamName="Programação"/>
      <Team teamName="Front-end"/>
    </div>
  );
}

export default App;
