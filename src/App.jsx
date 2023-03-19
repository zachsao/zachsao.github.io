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
      <Home />
      <Spacer size={48} />
      <Portfolio />
      <Spacer size={48} />
      <Resume />
      <Spacer size={48} />
    </div>
  );
}

export default App;
