import { useState, useRef } from "react";
import "./Reel.css";

export default function Reel({ mesureRef, reel }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(reel?.body?.length < 80);
  return (
    <div className="reel-card" ref={mesureRef}>
      <div className="reel-card-overlay" />
      <img
        src={`https://picsum.photos/${1000 + reel?.id}`} // this static image
        className="reel-card-content"
        alt="reel-content"
      />
      <div className="description card-top">
        <img
          src={`https://picsum.photos/${50 + reel?.id}`}
          className="user-avatar"
          alt="user-avatar"
        />
        <span>{reel?.email?.split("@")[0]}</span>
      </div>
      <div
        ref={ref}
        className={`description card-bottom ${visible ? "open" : ""}`}
        onClick={() => {
          setVisible(!visible);
          ref.current.scrollTo({
            top: 0,
            left: 0,
            animated: true,
          });
        }}
      >
        <p>{reel?.body}</p>
      </div>
    </div>
  );
}
