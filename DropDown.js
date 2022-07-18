// DropDown component module

// wrapping
class DropDown {

  constructor (items, id) {
    this.items = items;
    this.id = id;
    this.state_open = false;
  }

  render() {
    let rootDiv = document.getElementById(this.id);
    rootDiv.innerHTML = `
      <a href='#'>
        ${this.items.root.label} 
      </a>
    `;
 
    if (this.state_open) {
      let html = '';
      for(let i=0; i<this.items.children.length; i++) {
        html += `
          <a href='#'>
            ${this.items.children[i].label} 
          </a>
        `;
      }
      rootDiv.innerHTML += html;
    }
    let rootLink = document.querySelector(`#${this.id} > a`);
    rootLink.addEventListener('click', this.handler.bind(this));
  }

  handler() {
    // HW1: upgrade the handler's logic
    // so it opens at first click and closes at the second one
    // toggling- comutare

    this.state_open ? this.state_open = false : this.state_open = true;
 
    this.render();
  
  }

}


// component lifecycle
//   create (obj) ------> render() <---\
//         V                           |
//         V                           |
//       click --->state--->open-------/


// code that contain THIS

// x--------------------------------->time ?
//         ^                 ^
//       render()           click