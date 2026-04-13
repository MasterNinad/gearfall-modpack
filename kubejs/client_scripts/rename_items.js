//Change display name

const items = [
  //Northstar: Items
  ["northstar:circuit", "Pulse Circuit"],
  ["northstar:advanced_circuit", "Advanced Pulse Circuit"],

  //TFMG: Items
  ["tfmg:empty_circuit_board", "Empty Plastic Circuit Board"],
  ["tfmg:coated_circuit_board", "Coated Plastic Circuit Board"],
  ["tfmg:etched_circuit_board", "Etched Plastic Circuit Board"],
  ["tfmg:unfinished_circuit_board", "Unfinished Basic Circuit Board"],
  ["tfmg:circuit_board", "Basic Circuit Board"],

  //Create Confectionery: Items
  ["create_confectionery:black_chocolate_bucket", "Dark Chocolate Bucket"],

  //Alex Caves: Items
  ["alexscaves:limestone_spear", "Dolomite Spear"],
  ["alexscaves:limestone", "Dolomite"],
  ["alexscaves:limestone_stairs", "Dolomite Stairs"],
  ["alexscaves:limestone_slab", "Dolomite Slab"],
  ["alexscaves:limestone_wall", "Dolomite Wall"],
  ["alexscaves:limestone_pillar", "Dolomite Pillar"],
  ["alexscaves:limestone_chiseled", "Dolomite Chiseled"],
  ["alexscaves:smooth_limestone", "Smooth Dolomite"],
  ["alexscaves:smooth_limestone_stairs", "Smooth Dolomite Stairs"],
  ["alexscaves:smooth_limestone_slab", "Smooth Dolomite Slab"],
  ["alexscaves:smooth_limestone_wall", "Smooth Dolomite Wall"],
  
  ["alexscaves:galena", "Cerussite"],
  ["alexscaves:galena_stairs", "Cerussite Stairs"],
  ["alexscaves:galena_slab", "Cerussite Slab"],
  ["alexscaves:galena_bricks", "Cerussite Bricks"],
  ["alexscaves:galena_wall", "Cerussite Wall"],
  ["alexscaves:galena_brick_stairs", "Cerussite Brick Stairs"],
  ["alexscaves:galena_brick_slab", "Cerussite Brick Slab"],
  ["alexscaves:galena_brick_wall", "Cerussite Brick Wall"],
  ["alexscaves:galena_iron_ore", "Cerussite Iron Ore"],
  ["alexscaves:energized_galena_neutral", "Energized Cerussite (Neutral)"],
  ["alexscaves:energized_galena_scarlet", "Energized Cerussite (Scarlet)"],
  ["alexscaves:energized_galena_azure", "Energized Cerussite (Azure)"],
  ["alexscaves:galena_spire", "Cerussite Spire"],
  ["alexscaves:packed_galena", "Packed Cerussite"],
  ["alexscaves:galena_pillar", "Cerussite Pillar"],
];

ClientEvents.lang("en_us", (event) => {
  items.forEach(([id, newName]) => {
    event.renameItem(id, newName);
  });

  //Dosen't work for some reason, maybe because it's an advancement?
  event.add("advancements.alexscaves.limestone.desc", "Obtain Dolomite");
});
