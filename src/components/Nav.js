import React from "react";

function Nav(props) {
  /*
    SKELETON: 
    <a className="et-hero-tab" href="#"+{props.this.header.href}>
    {props.this.header.name}</a>
  */
  return (
    <a className="et-hero-tab" href={props.href} key={props.key}>
      {props.name}
    </a>
  );
}

export default Nav;
