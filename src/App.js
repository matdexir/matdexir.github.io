import { ReactTerminal } from "react-terminal";
import Whoami from "./commands/whoami";
import Links from "./commands/links";
import Help from "./commands/help";
import Projects from "./commands/projects";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("material-dark");
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
    projects: Projects,
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
      <div style={{ height: "60vh" }}>
        <ReactTerminal
          style={{ height: "60vh" }}
          prompt={prompt}
          commands={commands}
          theme={theme}
        />
      </div>
    </div>
  );
}

export default App;
