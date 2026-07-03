import React from "react";
import "./spotify.scss";
import MacWindow from "./MacWindow";

const Spotify = () => {
  return (
    <MacWindow width="30vw" height="60vh">
      <div className="spotify-window">
        {/* copied from Spotify-playlist */}
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/39yEFHNrv2IzDHxo7XaXi6?utm_source=generator&theme=0&si=75ff27710f8f422f"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;
