import React from "react";
import { Image } from "@aws-amplify/ui-react";
import logo from "./logo.png";

function LogoComponent(props) {
  return (
    <Image
      src={logo}
      alt="logo"
      width={66}
      style={{ cursor: "pointer" }}
      home={props.home}
    />
  );
}

export default LogoComponent;
