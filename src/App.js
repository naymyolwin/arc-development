import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import theme from "./ui/Theme";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Services from "./pages/Services";
import CustomSoftware from "./components/CustomSoftware";
import MobileApps from "./components/MobileApps";

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
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/services"
            render={(props) => (
              <Services
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/customsoftware"
            render={(props) => (
              <CustomSoftware
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            path="/mobileapps"
            render={(props) => (
              <MobileApps
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route path="/websites" component={() => <div>Websites</div>} />
          <Route path="/revolution" component={() => <div>Revolution</div>} />
          <Route path="/about" component={() => <div>About</div>} />
          <Route path="/contact" component={() => <div>Contact</div>} />
          <Route path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
