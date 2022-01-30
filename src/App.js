import { useLayoutEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import routes from "./routes";
import "./App.less";
import Topbar from "./components/Topbar";
import SideNav from "./components/SideNav";

function App() {
  const topbarTitleRef = useRef(null);
  const sideNavRef = useRef(null);
  const overlayRef = useRef(null);
  const mainAreaRef = useRef(null);
  const topbarWrapperRef = useRef(null);

  // 顶栏自适应缩放
  useLayoutEffect(() => {
    let ticking;
    const originalFontSize = topbarTitleRef.current.style.fontSize;

    const scrollListener = window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(function () {
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

  const onMenuClick = () => {
    console.log("menu clicked");
    console.log(sideNavRef.current.style);
    sideNavRef.current.style.right = 0;
    overlayRef.current.style.display = "block";
    mainAreaRef.current.style.width = "calc(100% - 200px)";
    topbarWrapperRef.current.style.width = "calc(100% - 200px)";
  };

  const onSideNavCloseClick = () => {
    console.log("close clocked");
    sideNavRef.current.style.right = "-200px";
    overlayRef.current.style.display = "none";
    mainAreaRef.current.style.width = "100%";
    topbarWrapperRef.current.style.width = "100%";
  };

  const onOverlayClick = () => {
    onSideNavCloseClick();
  };

  return (
    <>
      <div className="overlay" ref={overlayRef} onClick={onOverlayClick}></div>
      <div className="top-bar-wrapper" ref={topbarWrapperRef}>
        <Topbar title="BEE" ref={topbarTitleRef} onMenuClick={onMenuClick} />
      </div>
      <SideNav ref={sideNavRef} onCloseClick={onSideNavCloseClick} />
      <div className="main-area" ref={mainAreaRef}>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={route.element}
            ></Route>
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
