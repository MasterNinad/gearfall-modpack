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
  "dndesires:asphalt",
  "dndesires:white_asphalt",
  "dndesires:orange_asphalt",
  "dndesires:magenta_asphalt",
  "dndesires:light_blue_asphalt",
  "dndesires:yellow_asphalt",
  "dndesires:lime_asphalt",
  "dndesires:pink_asphalt",
  "dndesires:gray_asphalt",
  "dndesires:light_gray_asphalt",
  "dndesires:cyan_asphalt",
  "dndesires:purple_asphalt",
  "dndesires:blue_asphalt",
  "dndesires:brown_asphalt",
  "dndesires:green_asphalt",
  "dndesires:red_asphalt",
  "dndesires:black_asphalt",

  //Create Broken Bad: Items
  "createbb:cyanide",
  "createbb:nitrogen",
  "createbb:brine",
  "createbb:crushed_copper",
  "createbb:crushed_zinc",
  "createbb:copper_zinc_catalyst",

  //Create Broken Bad: Buckets of Fluids
  "createbb:oxygen_bucket",
  "createbb:ammonia_bucket",
  "createbb:hydrogen_bucket",

  //Create: Things and Misc: Item
  "create_things_and_misc:neon_tube",

  //Artifacts: Items
  "artifacts:everlasting_beef",
  "artifacts:eternal_steak",
  "artifacts:lucky_scarf",
  "artifacts:scarf_of_invisibility",
  "artifacts:rooted_boots",
  "artifacts:warp_drive",

  //Create Casing: Items
  "createcasing:shadow_steel_configurable_gearbox",
  "createcasing:shadow_steel_chain_conveyor",
  "createcasing:shadow_steel_gearshift",
  "createcasing:shadow_steel_clutch",
  "createcasing:shadow_steel_automatic_clutch",
  "createcasing:shadow_steel_deployer",
  "createcasing:shadow_steel_portable_storage_interface",
  "createcasing:shadow_steel_encased_fan",
  "createcasing:shadow_steel_mechanical_harvester",
  "createcasing:refined_radiance_gearbox",
  "createcasing:vertical_refined_radiance_gearbox",
  "createcasing:refined_radiance_mixer",
  "createcasing:refined_radiance_depot",
  "createcasing:refined_radiance_encased_chain_drive",
  "createcasing:refined_radiance_adjustable_chain_gearshift",
  "createcasing:refined_radiance_configurable_gearbox",
  "createcasing:refined_radiance_chain_conveyor",
  "createcasing:refined_radiance_press",
  "createcasing:refined_radiance_gearshift",
  "createcasing:refined_radiance_clutch",
  "createcasing:refined_radiance_automatic_clutch",
  "createcasing:refined_radiance_deployer",
  "createcasing:refined_radiance_portable_storage_interface",
  "createcasing:refined_radiance_encased_fan",
  "createcasing:refined_radiance_mechanical_harvester",
  "createcasing:refined_radiance_mechanical_saw",
  "createcasing:refined_radiance_mechanical_drill",
  "createcasing:refined_radiance_mechanical_plough",
  "createcasing:refined_radiance_mechanical_roller",
  "createcasing:shadow_steel_gearbox",
  "createcasing:vertical_shadow_steel_gearbox",
  "createcasing:shadow_steel_press",
  "createcasing:shadow_steel_mixer",
  "createcasing:shadow_steel_depot",
  "createcasing:shadow_steel_encased_chain_drive",
  "createcasing:shadow_steel_adjustable_chain_gearshift",
  "createcasing:shadow_steel_mechanical_roller",
  "createcasing:shadow_steel_mechanical_plough",
  "createcasing:shadow_steel_mechanical_drill",
  "createcasing:shadow_steel_mechanical_saw",

  //Create: Items
  "create:refined_radiance_casing",
  "create:shadow_steel_casing",
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
  "createbb:hydrogen",
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

  //Create Dreams and Desires: Recipes
  "dndesires:hydraulic_compacting/veridium_gen",
  "dndesires:hydraulic_compacting/asurine_gen",
  "dndesires:hydraulic_compacting/crimsite_gen",
  "dndesires:hydraulic_compacting/ochrum_gen",
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
