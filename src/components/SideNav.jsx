import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

import "./SideNav.less";

const linkArr = [
  {
    title: "文章",
    link: "",
  },
  {
    title: "摄影作品",
    link: "",
  },
  {
    title: "视频",
    link: "",
  },
  {
    title: "音频",
    link: "",
  },
  {
    title: "古诗词",
    link: "",
  },
];

const SideNav = forwardRef((props, ref) => {
  const { onCloseClick } = props;

  return (
    <div className="side-nav" ref={ref}>
      <div className="button-row">
        <svg
          t="1643519033875"
          class="icon"
          viewBox="0 0 1045 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6700"
          width="24"
          height="24"
          onClick={onCloseClick}
        >
          <path
            d="M282.517333 213.376l-45.354666 45.162667L489.472 512 237.162667 765.461333l45.354666 45.162667L534.613333 557.354667l252.096 253.269333 45.354667-45.162667-252.288-253.44 252.288-253.482666-45.354667-45.162667L534.613333 466.624l-252.096-253.226667z"
            p-id="6701"
            fill="#000000"
          ></path>
        </svg>
      </div>
      <div className="item-list">
        {linkArr.map((item) => (
          <Link to={item.link} key={item.title}>
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
});

export default SideNav;
