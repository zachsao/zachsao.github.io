import Header from "./components/Header";
import Home from "./components/Home";
import Spacer from "./components/Spacer";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Spacer size={48} />
      <Home id="home" />
      <Spacer size={48} />
      <Portfolio id="portfolio" />
      <Spacer size={48} />
      <Resume id="resume" />
    </div>
  );
}

export default App;
