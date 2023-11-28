function render_structure ()
{
  const container = document.querySelector("#wrapper")
  container.innerHTML = 

<header>
  <div id="search-icon"></div>
  <div id="search-box"></div>
  <h1 id="theshoe-box"></h1>
  <div id="account-icon"></div>
  <div id="heart-icon"></div>
  <div id="shopping-icon"></div>
</header>

<div id="filter-bar">
  <div id="filter-button"></div>
  <h2 id="filter-text"></h2>
  <div id="view-icon"></div>
  <div id="viewthree-colums"></div>
  <div id="viewfour-colums"></div>
</div>
     
<main id="product-list"</main>

<footer>
  <h3  id="info-text"></h3>
  <div id="about-buttom"></div>
  <p id=""></p>
</footer>


  return {
    header: container.querySelector("header"),
    filter-bar: container.querySelector("#filter-bar"),
    product-list: container.querySelector("#product-list"),
    footer: container.querySelector("#footer"),
  };
}