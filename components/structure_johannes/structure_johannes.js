function render_structureJohannes (parent)
{
  const container = document.createElement("div")
  container.id="wrapper"
  container.innerHTML = `
  <div> </div>
  <header>
      <div></div>
      <h1> </h1>

      <section>
          <div></div>
          <div></div>
          <div></div>
      </section>
  </header>
  <section>
      <div></div>
      <div>
          <div></div>
          <div></div>
          <div></div>
      </div>
  </section>
  <main>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
  </main>
  <footer>
      <div>
          <div></div>
          <div></div>
      </div>
  </footer>
  `;
parent.appendChild(container)

}