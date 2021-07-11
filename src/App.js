import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import theme from "./ui/Theme";
import Footer from "./components/Footer";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route path="/services" component={() => <div>Services</div>} />
          <Route
            path="/customsoftware"
            component={() => <div>Custom Software</div>}
          />
          <Route path="/mobileapps" component={() => <div>Mobile Apps</div>} />
          <Route path="/websites" component={() => <div>Websites</div>} />
          <Route path="/revolution" component={() => <div>Revolution</div>} />
          <Route path="/about" component={() => <div>About</div>} />
          <Route path="/contact" component={() => <div>Contact</div>} />
          <Route path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;
