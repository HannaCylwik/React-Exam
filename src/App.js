import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";
import Catalog from "./components/catalog/Catalog";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import "./App.css";

class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <Menu />
          <Route exact path="/" component={Home} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/about" component={About} />
        </Router>
        <Footer />
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     products: state,
//   };
// };

export default App;
