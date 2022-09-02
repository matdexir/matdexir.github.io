import { ReactTerminal } from "react-terminal";
import Whoami from "./commands/whoami";
import Links from "./commands/links";

function App() {
  const commands = {
    whoami: Whoami,
    contact: Links,
    cd: (directory) => `changed path to ${directory}`,
  };
  const prompt = "%";
  return (
    <div className="App">
      <div style={{ height: "60vh" }}>
        <ReactTerminal
          style={{ height: "60vh" }}
          prompt={prompt}
          commands={commands}
          theme="material-dark"
        />
      </div>
    </div>
  );
}

export default App;
