import Header from "./components/Header";
import Home from "./components/Home";
import Spacer from "./components/Spacer";

function App() {
  return (
    <div className="App">
      <Header />
      <Spacer size={48} />
      <Home />
    </div>
  );
}

export default App;
