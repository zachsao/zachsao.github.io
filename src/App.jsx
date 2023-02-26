import Header from "./components/Header";
import Home from "./components/Home";
import Spacer from "./components/Spacer";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <Header />
      <Spacer size={48} />
      <Home />
      <Spacer size={48} />
      <Resume />
    </div>
  );
}

export default App;
