import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Background from "./components/Background";
import Header from "./components/Header";
import useScrollToNavigate from "./hooks/use_scroll_to_navigate";
import useWindowDimensions from "./hooks/use_window_dimensions";

function App() {
  const location = useLocation();
  const { height, width } = useWindowDimensions();
  useScrollToNavigate();

  useEffect(() => {
    if (!location.state?.scrolling) {
      let scrollTo;
      switch (location.pathname) {
        case "/about":
          scrollTo = 1;
          break;
        case "/portfolio":
          scrollTo = 2;
          break;
        case "/blog":
          scrollTo = 3;
          break;
        case "/contact":
          scrollTo = 4;
          break;
        default:
          scrollTo = 0;
          break;
      }
      window.scrollTo({
        top: scrollTo * height,
        left: 0,
        behavior: location.state?.behavior ?? "instant",
      });
    }
  }, [location, height]);

  return (
    <div id="App">
      <Header width={width} height={height} location={location.pathname} />
      <Home />
      <About />
      <Portfolio />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100dvh",
          scrollSnapAlign: "start",
        }}
      >
        Page 4 - {location.pathname}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100dvh",
          scrollSnapAlign: "start",
        }}
      >
        Page 5 - {location.pathname}
      </div>
      <Background height={height} />
    </div>
  );
}

export default App;
