import DarkModeToggle from "./components/DarkModeToggle";
import LikeDislike from "./components/LikeDislike";
import ColorGenerator from "./components/ColorGenerator";
import Timer from "./components/Timer";

const App = () => {
  return (
    <div className="App">
      <h1>MI PROYECTO </h1>
      <DarkModeToggle />
      <hr />
      <LikeDislike />
      <hr />
      <ColorGenerator />
      <hr />
      <Timer />
    </div>
  );
};

