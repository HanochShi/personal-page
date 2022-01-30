import React from "react";

import "./BottomBar.less";

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <div className="link-row">
        <span>关于作者</span>
        <span>联系作者</span>
        <span>打赏作者</span>
      </div>
      <div className="legal-row">©2022</div>
    </div>
  );
};

export default BottomBar;
