"use strict";

function render_structure (container) 
      container.innerHTML = `

    <header>
        <div id ="searchbar"></div>
        <h1>Title</h1>
        <div id ="Tools"></div>
    </header>
    <nav>
        <div id="filter"></div>
        <div id"text"></div>
        <div id"coloum"></div>
    </nav>
    <main></main>
    <footer>
        <div id="footerLeft"></div>
        <div id="footerRight></div>
    </footer>

    `;
    return {
      header: container.querySelector("header"),
      searchBar: container.querySelector("#searchBar"),
      h1: container.querySelector("h1"),
      icons: container.querySelector("#tools"),
      nav: container.querySelector("nav"),
      filter: container.querySelector("#filter"),
      text: container.querySelector("#text"),
      view: container.querySelector("#coloum"),
      main: container.querySelector("main"),
      footer: container.querySelector("footer"),
      footerLeft: container.querySelector("#footerLeft"),
      footerRight: container.querySelector("#footerRight"),
    };
  }