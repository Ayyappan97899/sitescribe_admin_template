class Title extends HTMLElement {

    connectedCallback() {
      this.innerHTML = `
      <h2 class="page-title ms-2">
      Welcome Vertical layout !
      </h2>
          `
    }
  }
  
  
  
  customElements.define('main-title', Title);
