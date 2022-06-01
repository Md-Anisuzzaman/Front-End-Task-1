import Header from "./Components/Header/Header";

import './App.css'
import Banner from "./Components/Header/Banner";

import Content from "./Components/Contents/Content";
import Footer from "./Components/Footer/Footer";
import Available from "./Components/Available/Available";
import Review from "./Components/Review/Review";
import SlidingContent from "./Components/Sliding/SlidingContent";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Available />
      <Content />
      <Review />
      <SlidingContent />
      <Footer />
    </div>
  );
}

export default App;
