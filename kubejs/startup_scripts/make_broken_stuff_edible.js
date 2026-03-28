ItemEvents.modification((event) => {
  //White Stuff
  event.modify("createbb:white_meth", (item) => {
    item.setFood({
      saturation: 1,
      canAlwaysEat: true,
      eatSeconds: 1.2,
      nutrition: 1,
    });
  });

  //Sudafed
  event.modify("createbb:sudafed", (item) => {
    item.setFood({
      saturation: 2,
      canAlwaysEat: true,
      eatSeconds: 1.4,
      nutrition: 1,
    });
  });

  //Blue Stuff
  event.modify("createbb:blue_meth", (item) => {
    item.setFood({
      saturation: 2,
      canAlwaysEat: true,
      eatSeconds: 1.4,
      nutrition: 2,
    });
  });
});
