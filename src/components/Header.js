import React from "react";

//Child
function Header(props) {
  /*
    SKELETON: 
    <section ClassName="et-slide" id=props.this.headers.id>
    <h1>props.this.headers.name</h1>
    <h3>props.this.headers.slogan</h3>
    */
  return (
    <section className="et-slide" id={"tab-"+ props.id} key={props.key}>
      <h1>{props.name}</h1>
      <h3>{props.slogan}</h3>
    </section>
  );
}

export default Header;
