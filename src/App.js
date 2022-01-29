import { useLayoutEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import routes from "./routes";
import "./App.less";
import Topbar from "./components/Topbar";

function App() {
  const topbarTitleRef = useRef(null);

  // 顶栏自适应缩放
  useLayoutEffect(() => {
    let ticking;
    const originalFontSize = topbarTitleRef.current.style.fontSize;

    const scrollListener = window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          console.log(window.scrollY);
          if (window.scrollY > 24) {
            topbarTitleRef.current.style.fontSize = "24px";
          } else if (window.scrollY < 12) {
            topbarTitleRef.current.style.fontSize = originalFontSize;
          }
          ticking = false;
        });
        ticking = true;
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <>
      <Topbar title="BEE" ref={topbarTitleRef} />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            element={route.element}
          ></Route>
        ))}
      </Routes>
    </>
  );
}

export default App;
