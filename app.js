
let items = {
  root: {
    label: 'Profile',
    icon: '1'
  },
  children: [
    {
    label: 'My List',
      icon: '2'
    },
    {
      label: 'Statistics',
        icon: '3'
      }
  ]
};

let drop = new DropDown(items, "profile-menu-root");
drop.render();