import React from "react";

import "./Card.less";

const Card = (props) => {
  const { imgUrl, title, titleFontSize, content, contentFontSize } = props;

  return (
    <div className="index-card">
      {imgUrl && <img src={imgUrl} alt="" />}
      {(title || content) && (
        <div className="text-area">
          <p className="title" style={{ fontSize: titleFontSize || "20px" }}>
            {title}
          </p>
          <p
            className="content"
            style={{ fontSize: contentFontSize || "14px" }}
          >
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;
