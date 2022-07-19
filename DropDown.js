// DropDown component module

// wrapping
class DropDown {

  constructor (items, id) {
    this.items = items;
    this.id = id;
    this.state_open = false;

    this.styles = {
      palette: {
          default: {
            background: '#123',
            color: '#fff'
          },
          active: {
            background: '#eee',
            color: '#234'
          }
      }
    }
  }

  render() {
    let rootDiv = document.getElementById(this.id);

    rootDiv.style.display = 'inline-block';
    rootDiv.style.display = 'Arial';
    rootDiv.style.minWidth = '200px';

    rootDiv.innerHTML = `
      <a href='#' style="
                    background: ${this.styles.palette.default.background};
                    color: ${this.styles.palette.default.color};
                    padding: 1em;
                    text-decoration: none;
                    display: block;"
      >
        ${this.items.root.label}
          <i class="${this.items.root.icon}" style="float: right;"></i>
      </a>
    `;
 
    if (this.state_open) {
      let html = '';
      for(let i=0; i<this.items.children.length; i++) {
        html += `
          <a href='#' style="
                        background: ${this.styles.palette.default.background};
                        color: ${this.styles.palette.default.color};
                        padding: 1em;
                        text-decoration: none;
                        display: block;"
          class='item'>
            ${this.items.children[i].label}
              <i class="${this.items.children[i].icon}" style="float: right;"></i>
          </a>
        `;
      }
      rootDiv.innerHTML += html;
    }

    let rootLink = document.querySelector(`#${this.id} > a`);
    rootLink.addEventListener('click', this.clickHandler.bind(this));

    let items = document.querySelectorAll(`#${this.id} > .item`);
    for (let i=0; i < items.length; i++) {
      items[i].addEventListener('mouseover', this.mouseoverHandler.bind(this));
    }

    for (let i=0; i < items.length; i++) {
      items[i].addEventListener('mouseout', this.mouseoutHandler.bind(this));
    }

  }

  clickHandler() {
    // HW1: upgrade the handler's logic
    // so it opens at first click and closes at the second one
    // toggling- comutare
    //HW2: make the code 'if else' compact

    this.state_open ? this.state_open = false : this.state_open = true;
 
    this.render();
  
  }

  mouseoverHandler(e) {
    // console.log(e);
    e.target.style.color = `${this.styles.palette.active.color}`;
    e.target.style.background = `${this.styles.palette.active.background}`;
  }

  //HW3 : create and bind the mouseoutHandler(e)
  // restore the default styles
  mouseoutHandler(e) {
    // console.log(e);
    e.target.style.color = `${this.styles.palette.default.color}`;
    e.target.style.background = `${this.styles.palette.default.background}`;
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