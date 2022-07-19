
let items = {
  root: {
    label: 'Profile',
    icon: 'fa-solid fa-user'
  },
  children: [
    {
      label: 'My List',
      icon: 'fa-solid fa-list-check'
    },
    {
      label: 'Statistics',
      icon: 'fa-solid fa-chart-pie'
    }
  ]
};

let drop = new DropDown(items, "profile-menu-root");
drop.render();