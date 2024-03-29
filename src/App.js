import Categories from "./components/Categories";
import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Meal from "./components/Meal";
import Newsletter from "./components/Newsletter";
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
        <Categories/>
        <Newsletter/>
        <Footer/>
    </div>
  );
}

export default App;
