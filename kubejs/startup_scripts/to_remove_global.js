Platform.mods.kubejs.name = "Gearfall";

global.itemsToReplace = [
  //Northstar: Items
  { old: "northstar:salt", new: "chemica:salt" },
  { old: "northstar:iron_cogwheel", new: "tfmg:steel_cogwheel" },
  { old: "northstar:iron_large_cogwheel", new: "tfmg:large_steel_cogwheel" },
  { old: "northstar:titanium_ingot", new: "chemica:titanium_ingot" },
  { old: "northstar:titanium_nugget", new: "chemica:titanium_nugget" },
  { old: "northstar:titanium_sheet", new: "chemica:titanium_sheet" },
  { old: "northstar:hardened_precision_mechanism", new: "tfmg:steel_mechanism" },
];

const replaceOld = global.itemsToReplace.map(function (item) {
  return item.old;
});
global.itemsToRemove = [
  //Northstar: Items
  "northstar:rutile_concentrate",
  "northstar:sodium_catalyst",
  "northstar:electrolysis_machine",

  //Northstar: Buckets of Fluids
  "northstar:methane_bucket",
  "northstar:sulfuric_acid_bucket",
  "northstar:brine_bucket",
  "northstar:liquid_hydrogen_bucket",
  "northstar:hydrocarbon_bucket",
  "northstar:titanium_tetrachloride_bucket",

  //Create Dreams and Desires: Items
  "dndesires:splashing_sail",
  "dndesires:haunting_sail",
  "dndesires:smoking_sail",
  "dndesires:blasting_sail",
  "dndesires:seething_sail",
  "dndesires:freezing_sail",
  "dndesires:sanding_sail",
  "dndesires:dragon_breathing_sail",

  //Create Broken Bad: Items
  "createbb:cyanide",
  "createbb:nitrogen",

  //Create Broken Bad: Buckets of Fluids
  "createbb:oxygen_bucket",
  "createbb:ammonia_bucket",
].concat(replaceOld);

global.fluidsToRemove = [
  //Northstar: Fluids
  "northstar:methane",
  "northstar:sulfuric_acid",
  "northstar:brine",
  "northstar:liquid_hydrogen",
  "northstar:hydrocarbon",
  "northstar:titanium_tetrachloride",

  //Northstar: Fluids without buckets
  "northstar:carbon",
  "northstar:chlorine",
  "northstar:oxygen",
  "northstar:hydrogen",

  //Create Broken Bad: Fluids
  "createbb:oxygen",
  "createbb:ammonia",
];

global.recipesToRemove = [
  //Northstar: Recipes
  "northstar:electrolysis/brine",
  "northstar:crushing/sand",
  "northstar:mixing/titanium1",
  "northstar:mixing/titanium2",
  "northstar:mixing/brine",
  "northstar:mixing/hydrocarbon_from_sodium",
  "northstar:mixing/hydrocarbon_from_carbon",
  "northstar:sequenced_assembly/titanium",
  "northstar:filling/sodium_catalyst",
  "northstar:compacting/brine_to_salt",
  `northstar:compacting/carbon_from_biofuel`,
  `northstar:compacting/carbon_from_coal`,
  "create:crushing/basalt",
  "northstar:crafting/iron_large_cogwheel",
  "northstar:crafting/iron_large_cogwheel_from_small",
  "northstar:crafting/iron_cogwheel",
  "northstar:mechanical_crafting/electrolysis_machine",
  "northstar:sequenced_assembly/hardened_precision_mechanism",

  //Create Connected: Recipes
  "create_connected:item_application/seething_catalyst_from_empty_using_deployer",
];

//Remove items from creative tabs, including search tab (this is brute force approach, every item is checked for every tab, but it works :)
const tabs = [
  "northstar:items",
  "northstar:tech",
  "minecraft:search",
  "dndesires:base_tab",
  "createbb:createbb",
];
tabs.forEach((tab) => {
  StartupEvents.modifyCreativeTab(tab, (event) => {
    for (const id of global.itemsToRemove) {
      event.remove(id);
    }
  });
});
