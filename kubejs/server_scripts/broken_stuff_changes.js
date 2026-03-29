//Give effects when "stuff" is consumed
ItemEvents.foodEaten((event) => {
  const { player } = event;

  switch (player.mainHandItem.id) {
    case "createbb:white_meth":
      event.player.runCommandSilent("effect give @s minecraft:nausea 8 0 true");
      event.player.runCommandSilent("effect give @s minecraft:speed 10 0 true");
      break;
    case "createbb:sudafed":
      event.player.runCommandSilent("effect give @s minecraft:nausea 5 0 true");
      event.player.runCommandSilent(
        "effect give @s minecraft:regeneration 5 0 true",
      );
      break;
    case "createbb:blue_meth":
      event.player.runCommandSilent(
        "effect give @s minecraft:nausea 10 0 true",
      );
      event.player.runCommandSilent("effect give @s minecraft:speed 20 0 true");
  }
});

ServerEvents.recipes((event) => {
  //Acetic Anhydride recipes
  event.recipes.create
    .mixing(
      [
        Fluid.of("createbb:acetic_anhydride", 100),
        Fluid.of("tfmg:sulfuric_acid", 100),
        "chemica:platinum_catalyst",
      ],
      [
        Fluid.of("chemica:sucrose_solution", 150),
        Fluid.of("tfmg:sulfuric_acid", 100),
        "chemica:platinum_catalyst",
      ],
    )
    .id("createbb:phase2/acetic_anhydride_using_sulfuric_acid");
  event.recipes.create
    .mixing(
      [
        Fluid.of("createbb:acetic_anhydride", 100),
        Fluid.of("chemica:hydrochloric_acid", 120),
        "chemica:platinum_catalyst",
      ],
      [
        Fluid.of("chemica:sucrose_solution", 150),
        Fluid.of("chemica:hydrochloric_acid", 120),
        "chemica:platinum_catalyst",
      ],
    )
    .id("createbb:phase2/acetic_anhydride_using_hydrochloric_acid");

  //Phenylacetic Acid recipe
  event.recipes.create
    .mixing(
      [Fluid.of("createbb:phenylacetic_acid", 100)],
      [Fluid.of("chemica:ethylbenzene", 100), Fluid.of("chemica:oxygen", 100)],
    )
    .id("createbb:phase2/phenylacetic_acid");

  //Methylamine recipe
  event.recipes.create
    .mixing(
      [
        Fluid.of("createbb:methylamine", 100),
        "createbb:aluminosilicate_catalyst",
      ],
      [
        Fluid.of("createbb:methanol", 10),
        Fluid.of("chemica:ammonia", 10),
        "createbb:aluminosilicate_catalyst",
      ],
    )
    .id("createbb:phase2/methylamine_mixing");

  //Methanol recipe
  event.recipes.create
    .mixing(
      [Fluid.of("createbb:methanol", 100)],
      [Fluid.of("chemica:methane", 100), Fluid.of("chemica:syngas", 50)],
    )
    .id("createbb:phase2/methanol_mixing");

  //Syngas filling recipe (it's technically a chemica recipe, but it is required in broken bad)
  event.recipes.create
    .filling("chemica:syngas_bucket", [
      Fluid.of("chemica:syngas"),
      "minecraft:bucket",
    ])
    .id("chemica:filling/syngas_bucket");
  
  //Iodine recipe
  event.recipes.create
    .mixing(
      [
        "createbb:iodine",
      ],
      [
        Fluid.of("chemica:brine", 100),
      ],
    )
    .heated()
    .id("createbb:phase1/iodine");
});
