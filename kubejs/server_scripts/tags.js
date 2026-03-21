ServerEvents.tags("item", (event) => {
  const multimeters = [
    "tfmg:gray_multimeter",
    "tfmg:light_gray_multimeter",
    "tfmg:brown_multimeter",
    "tfmg:cyan_multimeter",
    "tfmg:purple_multimeter",
    "tfmg:orange_multimeter",
    "tfmg:black_multimeter",
    "tfmg:multimeter",
    "tfmg:white_multimeter",
    "tfmg:blue_multimeter",
    "tfmg:light_blue_multimeter",
    "tfmg:red_multimeter",
    "tfmg:green_multimeter",
    "tfmg:lime_multimeter",
    "tfmg:pink_multimeter",
    "tfmg:magenta_multimeter",
    "tfmg:yellow_multimeter",
  ];
  multimeters.forEach((multimeter) => {
    event.add("tfmg:multimeters", multimeter);
  });

  const caution_blocks = [
    "tfmg:gray_caution_block",
    "tfmg:light_gray_caution_block",
    "tfmg:brown_caution_block",
    "tfmg:cyan_caution_block",
    "tfmg:purple_caution_block",
    "tfmg:orange_caution_block",
    "tfmg:white_caution_block",
    "tfmg:blue_caution_block",
    "tfmg:light_blue_caution_block",
    "tfmg:red_caution_block",
    "tfmg:green_caution_block",
    "tfmg:lime_caution_block",
    "tfmg:pink_caution_block",
    "tfmg:magenta_caution_block",
    "tfmg:yellow_caution_block",
  ];
  caution_blocks.forEach((caution_block) => {
    event.add("tfmg:caution_blocks", caution_block);
  });

  const cable_hubs = [
    "tfmg:brass_cable_hub",
    "tfmg:copper_cable_hub",
    "tfmg:steel_cable_hub",
    "tfmg:aluminum_cable_hub",
    "tfmg:steel_casing_cable_hub",
    "tfmg:heavy_cable_hub",
  ];
  cable_hubs.forEach((cable_hub) => {
    event.add("tfmg:cable_hubs", cable_hub);
  });

  const pumpjack_parts = [
    "tfmg:pumpjack_hammer",
    "tfmg:pumpjack_crank",
    "tfmg:pumpjack_hammer_part",
    "tfmg:pumpjack_hammer_head",
    "tfmg:pumpjack_hammer_connector",
    "tfmg:large_pumpjack_hammer_part",
    "tfmg:large_pumpjack_hammer_head",
    "tfmg:large_pumpjack_hammer_connector",
    "tfmg:pumpjack_base",
  ];
  pumpjack_parts.forEach((pumpjack_part) => {
    event.add("tfmg:pumpjack_parts", pumpjack_part);
  });

  const raw_materials = [
    "northstar:raw_martian_iron_ore",
    "northstar:raw_tungsten_ore",
    "northstar:raw_glowstone_ore",
    "chemica:raw_antimony",
    "chemica:raw_chromite",
    "chemica:raw_cobalt",
    "chemica:raw_molybdenum",
    "chemica:raw_platinum",
    "chemica:raw_silver",
    "chemica:raw_vanadium",
    "chemica:raw_tungsten",
    "chemica:raw_tin",
  ];
  raw_materials.forEach((raw_material) => {
    event.add("c:raw_materials", raw_material);
  });

  const plates = [
    "chemica:graphite_sheet",
    "chemica:iridium_sheet",
    "chemica:magnesium_sheet",
    "chemica:silver_sheet",
    "chemica:tantalum_sheet",
    "chemica:tin_sheet",
    "chemica:titanium_sheet",
    "chemica:carbon_fiber_composite_sheet",
    "chemica:cured_epoxy_sheet",
    "chemica:polyethylene_sheet",
    "chemica:polytetrafluoroethylene_sheet",
    "chemica:polyvinyl_chloride_sheet",
  ];
  plates.forEach((plate) => {
    event.add("c:plates", plate);
  });

  const fan_catalysts = [
    "create_connected:fan_ending_catalyst_dragon_head",
    "create_connected:fan_ending_catalyst_dragons_breath",
    "create_connected:fan_sanding_catalyst",
    "create_connected:fan_freezing_catalyst",
    "create_connected:fan_seething_catalyst",
    "create_connected:fan_haunting_catalyst",
    "create_connected:fan_splashing_catalyst",
    "create_connected:fan_smoking_catalyst",
    "create_connected:fan_blasting_catalyst",
    "create_connected:empty_fan_catalyst",
  ].concat(event.get("colorful_catalysts:dyed_catalysts").getObjectIds());
  fan_catalysts.forEach((fan_catalyst) => {
    event.add("gearfall:fan_catalysts", fan_catalyst);
  });
});
