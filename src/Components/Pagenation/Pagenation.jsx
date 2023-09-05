import React, { memo, useState } from "react";
import "./Pagenation.css";

export const Pagenation = memo(({ total }) => {
  const [active, setActive] = useState(1);
  const pagenation = Array.from({ length: total() / 20 }, (_, i) => i + 1);

  const handleActive = (page) => {
    setActive(page);
    total(page);
    if (page === 1) window.scrollTo(0, 0);
  };

  return (
    <div className="pagenation">
      {pagenation.map((page, index) => {
        return (
          <button
            style={{ backgroundColor: active === page ? "#ccc" : "" }}
            key={index}
            onClick={() => handleActive(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
});
