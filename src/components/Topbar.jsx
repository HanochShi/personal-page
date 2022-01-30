import React, { forwardRef } from "react";
import { MenuOutlined } from "@ant-design/icons";

import "./Topbar.less";

const Topbar = forwardRef((props, ref) => {
  const { title, style, onMenuClick } = props;

  return (
    <div className="top-bar" style={style}>
      <div className="title" ref={ref}>
        {title}
      </div>
      <div className="menu-button" onClick={onMenuClick}>
        <MenuOutlined />
      </div>
    </div>
  );
});

export default Topbar;
