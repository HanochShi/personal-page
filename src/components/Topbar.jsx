import React, { forwardRef } from "react";
import { MenuOutlined } from "@ant-design/icons";

import "./Topbar.less";

const Topbar = forwardRef((props, ref) => {
  const { title, style } = props;

  return (
    <div className="top-bar" style={style}>
      <div className="title" ref={ref}>
        {title}
      </div>
      <div className="menu-button">
        <MenuOutlined />
      </div>
    </div>
  );
});

export default Topbar;
