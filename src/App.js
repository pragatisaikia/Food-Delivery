import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import TopNav from "./components/TopNav";
import Toppicks from "./components/Toppicks";


function App() {
  return (
    <div className="App">
        <TopNav/>
        <Featured/>
        <Delivery/>
        <Toppicks/>
    </div>
  );
}

export default App;
