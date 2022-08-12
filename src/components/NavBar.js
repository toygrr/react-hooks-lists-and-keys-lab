import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const renderLinks = links.map((link) => (
    <a href={"#" + link} key={link}>
      {link}
    </a>
  ));

  return <nav>{renderLinks}</nav>;
}

export default NavBar;
