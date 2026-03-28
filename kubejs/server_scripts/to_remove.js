//Remove all tags from removed items
ServerEvents.tags("item", (event) => {
  global.itemsToRemove.forEach((id) => {
    event.removeAllTagsFrom(id);
  });
});

ServerEvents.recipes((event) => {
  //Remove recipes
  global.recipesToRemove.forEach((recipe) => {
    event.remove({ id: recipe });
  });

  //Replace items (both input and output) in recipes
  //Works for all vanilla and create mod recipes, except sequenced assembly, which have to be replaced manually
  global.itemsToReplace.forEach((item) => {
    event.replaceInput({}, item.old, item.new);
    event.replaceOutput({}, item.old, item.new);
  });

  //Remove recipes which have an item which is to be removed
  global.itemsToRemove.forEach((item) => {
    event.remove({ input: item });
    event.remove({ output: item });
  });

  //Remove recipes which have a fluid which is to be removed
  global.fluidsToRemove.forEach((fluid) => {
    event.remove({ input: Fluid.of(fluid) });
    event.remove({ output: Fluid.of(fluid) });
  });
});
