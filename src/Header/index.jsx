import React, { useEffect, useState } from "react";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1024);
    }

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleMenu() {
    const menu = document.querySelector(".menu");
    const links = document.querySelector(".links");

    menu.classList.toggle("opened");
    links.classList.toggle("show");
  }

  return (
    <nav>
      <a href="/">
        <img src="/assets/img/logo_white.svg" alt="" />
      </a>
      <div className="links">
        <a href="#o-nas">O nas</a>
        <a href="#nasza-misja">Nasza misja</a>
        <a href="#nasze-dzialania">Nasze działania</a>
        <a href="#innowacje">Innowacje</a>
      </div>
      {isMobile && (
        <div className="menu" onClick={toggleMenu}>
          <div className="middle"></div>
        </div>
      )}
    </nav>
  );
}

export {Header};
