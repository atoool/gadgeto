/* eslint-disable react/prop-types */
import React from "react";
import "../css/VideoFooter.css";
import Ticker from "react-ticker";
import { Avatar, Button } from "@mui/material";
import { Favorite, IosShare, MusicNote, Visibility } from "@mui/icons-material";

function VideoFooter({ channel = "", song = "", likes = "", shares = "", avatarSrc = "" }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar src={avatarSrc} style={{ marginRight: 20 }} />
        <h6 style={{ alignSelf: "center" }}>{channel || "Product name"}</h6>
        <Button
          variant="outlined"
          size="small"
          style={{ borderColor: "#fff", color: "#fff", marginLeft: 20, marginTop: "3px" }}
        >
          Buy
        </Button>
      </div>
      <div className="videoFooter__ticker">
        <MusicNote className="videoFooter__icon" />
        <Ticker mode="smooth">
          {() => <h1>{song?.length > 25 ? `${song?.substring(0, 25)}...` : song}</h1>}
        </Ticker>
      </div>
      <div className="videoFooter__actions">
        <div className="videoFooter__actionsRight">
          <Favorite />
          <div className="videoFooter__stat">
            <p style={{ fontSize: 8 }}>{likes}</p>
          </div>
          <Visibility />
          <div className="videoFooter__stat">
            <p style={{ fontSize: 8, marginLeft: 8 }}>{shares}</p>
          </div>
          <IosShare color="inherit" fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
