import "./App.css";
import { ReactTerminal } from "react-terminal";
import Whoami from "./commands/whoami";
import Links from "./commands/links";
import Help from "./commands/help";
import Projects from "./commands/projects";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("material-dark");
  const WelcomeMessage = (
    <span>
      <span style={{ color: "yellowgreen" }}>
        <br />
        ##::::'##::::'###::::'########:'########::'########:'##::::'##:'####:'########::
        <br />
        ###::'###:::'## ##:::... ##..:: ##.... ##: ##.....::. ##::'##::. ##::
        ##.... ##:
        <br />
        ####'####::'##:. ##::::: ##:::: ##:::: ##: ##::::::::. ##'##:::: ##::
        ##:::: ##:
        <br />
        ## ### ##:'##:::. ##:::: ##:::: ##:::: ##: ######:::::. ###::::: ##::
        ########::
        <br />
        ##. #: ##: #########:::: ##:::: ##:::: ##: ##...:::::: ## ##:::: ##::
        ##.. ##:::
        <br />
        ##:.:: ##: ##.... ##:::: ##:::: ##:::: ##: ##:::::::: ##:. ##::: ##::
        ##::. ##::
        <br />
        ##:::: ##: ##:::: ##:::: ##:::: ########:: ########: ##:::. ##:'####:
        ##:::. ##:
        <br />
        ..:::::..::..:::::..:::::..:::::........:::........::..:::::..::....::..:::::..::
        <br />
      </span>
      <br />
      <a href="mailto:matthieudesir@gmail.com">matthieudesir@gmail.com</a>{" "}
      <br />
      <br />
      {Links} <br /> <br />
      Welcome to my obsession with terminals 😋 <br />
      Type "help" to explore what there is to offer 😁 <br /> <br />
    </span>
  );
  const toggle_theme = () => {
    if (theme === "material-dark") {
      setTheme("material-light");
    } else {
      setTheme("material-dark");
    }
  };

  const commands = {
    whoami: Whoami,
    toggle_theme: toggle_theme,
    // projects: Projects,
    help: Help,
    contact: Links,
    cd: (directory) => `changed path to ${directory}`,
  };

  const prompt = (
    <span>
      welcome@<span style={{ color: "yellowgreen" }}>matdexir</span>&gt;
    </span>
  );

  return (
    <div className="App">
      <div style={{ height: "100vh" }}>
        <ReactTerminal
          style={{ height: "100vh" }}
          prompt={prompt}
          commands={commands}
          welcomeMessage={WelcomeMessage}
          theme={theme}
          showControlBar={false}
          showControlButtons={false}
        />
      </div>
    </div>
  );
}

export default App;
