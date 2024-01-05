import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Meal from "./components/Meal";
import TopNav from "./components/TopNav";
import Toppicks from "./components/Toppicks";


function App() {
  return (
    <div className="App">
        <TopNav/>
        <Featured/>
        <Delivery/>
        <Toppicks/>
        <Meal/>
    </div>
  );
}

export default App;
