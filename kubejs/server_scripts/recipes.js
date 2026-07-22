ServerEvents.recipes((event) => {
  //Remove all default extruding recipes
  event.remove({ type: "create_mechanical_extruder:extruding" });

  //Vent related recipes
  const materials = [
    ["asurine", "create:asurine", "gearfall:biomes/cold"],
    ["bauxite", "tfmg:bauxite", "gearfall:biomes/mountain"],
    ["crimsite", "create:crimsite", "minecraft:is_nether"],
    ["lignite", "tfmg:lignite", "minecraft:is_overworld"],
    ["ochrum", "create:ochrum", "gearfall:biomes/hot"],
    ["veridium", "create:veridium", "gearfall:biomes/jungle"],
  ];
  materials.forEach(([name, block, biome]) => {
    //Impure blocks extraction from unlocked vents
    event.recipes.create_mechanical_extruder
      .extruding(Item.of(`kubejs:impure_${name}`), [
        BlockPredicate.of(block),
        BlockPredicate.of("minecraft:lava"),
      ])
      .catalyst(BlockPredicate.of(`kubejs:unlocked_${name}_vent`))
      .advanced(true)
      .consumeBlocks([false, true])
      .requirements([
        RecipeRequirement.minSpeed(128.0),
        RecipeRequirement.biomeTag(biome),
      ])
      .id(`gearfall:recipes/extruding_${name}_vent`);

    //Item application for unlocking vents
    event.recipes.create
      .item_application(
        [`kubejs:unlocked_${name}_vent`],
        [`kubejs:active_${name}_vent`, `kubejs:${name}_lava_key`],
      )
      .id(`gearfall:recipes/unlocking_${name}_vent_manual_only`);

    if (name === "crimsite") {
      event
        .custom({
          type: "tfmg:vat_machine_recipe",
          allowed_vat_types: ["tfmg:firebrick_lined_vat"],
          ingredients: [
            {
              amount: 2,
              item: `kubejs:impure_${name}`,
            },
          ],
          machines: ["tfmg:centrifuge"],
          min_size: 1,
          results: [
            {
              amount: 1,
              id: `${block}`,
            },
          ],
        })
        .id(`gearfall:recipes/${name}_purification`);
      return;
    }

    event
      .custom({
        type: "tfmg:vat_machine_recipe",
        allowed_vat_types: ["tfmg:cast_iron_vat", "tfmg:steel_vat"],
        ingredients: [
          {
            amount: 2,
            item: `kubejs:impure_${name}`,
          },
        ],
        machines: ["tfmg:centrifuge"],
        min_size: 1,
        results: [
          {
            amount: 1,
            id: `${block}`,
          },
        ],
      })
      .id(`gearfall:recipes/${name}_purification`);
  });

  //Replace amethyst shard with polished amethyst in certain recipes to make it more useful
  const requirePolishedAmethyst = [
    "northstar:crafting/telescope",
    "minecraft:spyglass",
    "create:crafting/logistics/pulse_timer",
  ];
  requirePolishedAmethyst.forEach((id) => {
    event.replaceInput(
      { id: id },
      "minecraft:amethyst_shard",
      "northstar:polished_amethyst",
    );
  });

  //Reparing anvil recipe
  event.recipes.create
    .item_application(
      ["minecraft:anvil"],
      ["minecraft:chipped_anvil", "minecraft:iron_block"],
    )
    .id("gearfall:recipes/repairing_chipped_anvil");
  event.recipes.create
    .item_application(
      ["minecraft:chipped_anvil"],
      ["minecraft:damaged_anvil", "minecraft:iron_block"],
    )
    .id("gearfall:recipes/repairing_damaged_anvil");

  //Added new recipe for Seething Fan Catalyst, since the original one is removed in to_remove_global.js
  event
    .shaped("create_connected:fan_seething_catalyst", ["A", "B", "C"], {
      A: "create:blaze_cake",
      B: "dndesires:burner",
      C: "create_connected:empty_fan_catalyst",
    })
    .id("create_connected:fan_seething_catalyst");

  //Replace minecraft:tuff crushing recipe with less output
  event.recipes.create
    .crushing(
      [
        CreateItem.of("minecraft:flint", 0.2),
        CreateItem.of("minecraft:gold_nugget", 0.05),
        CreateItem.of("create:zinc_nugget", 0.05),
        CreateItem.of("createaddition:electrum_nugget", 0.1),
      ],
      "minecraft:tuff",
    )
    .id("create:crushing/tuff");

  //Add cobblestone, stone and limestone extruding recipes
  event.recipes.create_mechanical_extruder
    .extruding(Item.of("minecraft:cobblestone"), [
      BlockPredicate.of("minecraft:water"),
      BlockPredicate.of("minecraft:lava"),
    ])
    .catalyst(BlockPredicate.of("minecraft:cobblestone"))
    .id(`gearfall:recipes/extruding_cobblestone`);
  event.recipes.create_mechanical_extruder
    .extruding(Item.of("minecraft:stone"), [
      BlockPredicate.of("minecraft:water"),
      BlockPredicate.of("minecraft:lava"),
    ])
    .catalyst(BlockPredicate.of("minecraft:stone"))
    .id(`gearfall:recipes/extruding_stone`);
  event.recipes.create_mechanical_extruder
    .extruding(Item.of("create:limestone"), [
      BlockPredicate.of("create:honey"),
      BlockPredicate.of("minecraft:lava"),
    ])
    .catalyst(BlockPredicate.of("create:limestone"))
    .id(`gearfall:recipes/extruding_limestone`);
  
  //Add liquid burning recipe for (chemica) liquid hydrogen
  event.custom({
    type: "createaddition:liquid_burning",
    burn_time: 6000,
    ingredients: [
      {
        type: "neoforge:tag",
        amount: 1000,
        tag: "c:liquid_hydrogen",
      },
    ],
    results: [],
    superheated: true,
  }).id("gearfall:recipes/liquid_hydrogen_burning");

  //Coarse dirt mixing recipe
  event.recipes.create.mixing(
    ['minecraft:coarse_dirt', 'minecraft:coarse_dirt', 'minecraft:coarse_dirt', 'minecraft:coarse_dirt'],
    ['minecraft:dirt', 'minecraft:dirt', 'minecraft:gravel', 'minecraft:gravel']
  ).id('gearfall:recipes/coarse_dirt_mixing');

  //Smelt rotten flesh into leather
  event.smelting('minecraft:leather', 'minecraft:rotten_flesh');

  //Crushing amethyst shard into xp
  event.recipes.create
    .crushing(
      [
      'create:experience_nugget',
        CreateItem.of('create:experience_nugget', 0.5),
        CreateItem.of("create_sa:heap_of_experience", 0.1),
      ],
      "minecraft:amethyst_shard",
    )
    .id("gearfall:recipes/amethyst_shard");

  //Crush limestone into limesand and white phosphorus
  event.recipes.create
    .crushing(
      [
        "tfmg:limesand",
        CreateItem.of("createbb:white_phosphorus", 0.75),
      ],
      Ingredient.of('#create:stone_types/limestone').withCount(1),
    )
    .id("create:crushing/limestone");
  
  //Mixing quartz and cobblestone into andesite
  event.recipes.create.mixing(
    ["minecraft:diorite", "minecraft:diorite"], 
    ["minecraft:cobblestone", "minecraft:cobblestone", "minecraft:quartz"]
  )
  .heated()
  .id("gearfall:recipes/diorite_mixing");

  //Replace granite crushing recipe to include rutile crystal
  event.recipes.create.milling(
    ["minecraft:red_sand", CreateItem.of("chemica:rutile_crystal", 0.01)],
    "minecraft:granite"
  )
  .id("create:milling/granite");

  //Replace nickel alloy armour block recipe
  event.recipes.create.mixing(
    "s_a_b:nickelalloysteel",
    ["s_a_b:steelblock", "tfmg:nickel_ingot"]
  )
  .heated()
  .id("sab_tfmg_compat:mixing_nickelalloysteel2");
});