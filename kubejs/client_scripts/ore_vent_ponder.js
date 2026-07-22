Ponder.tags((event) => {
    event.createTag(
        "gearfall:ore_vents",
        "kubejs:dormant_lignite_vent",
        "Vents",
        "Use ore vents to automate resources",
        [
            "kubejs:dormant_lignite_vent",
            "kubejs:dormant_asurine_vent",
            "kubejs:dormant_ochrum_vent",
            "kubejs:dormant_bauxite_vent",
            "kubejs:dormant_crimsite_vent",
            "kubejs:dormant_veridium_vent",
            "kubejs:unlocked_lignite_vent",
            "kubejs:unlocked_asurine_vent",
            "kubejs:unlocked_ochrum_vent",
            "kubejs:unlocked_bauxite_vent",
            "kubejs:unlocked_crimsite_vent",
            "kubejs:unlocked_veridium_vent",
            "kubejs:active_lignite_vent",
            "kubejs:active_asurine_vent",
            "kubejs:active_ochrum_vent",
            "kubejs:active_bauxite_vent",
            "kubejs:active_crimsite_vent",
            "kubejs:active_veridium_vent",
            "kubejs:lignite_lava_key",
            "kubejs:asurine_lava_key",
            "kubejs:ochrum_lava_key",
            "kubejs:bauxite_lava_key",
            "kubejs:crimsite_lava_key",
            "kubejs:veridium_lava_key"
        ]
    );
});

Ponder.registry((event) => {
  event.create(["kubejs:dormant_lignite_vent",
            "kubejs:dormant_asurine_vent",
            "kubejs:dormant_ochrum_vent",
            "kubejs:dormant_bauxite_vent",
            "kubejs:dormant_crimsite_vent",
            "kubejs:dormant_veridium_vent",
            "kubejs:unlocked_lignite_vent",
            "kubejs:unlocked_asurine_vent",
            "kubejs:unlocked_ochrum_vent",
            "kubejs:unlocked_bauxite_vent",
            "kubejs:unlocked_crimsite_vent",
            "kubejs:unlocked_veridium_vent",
            "kubejs:active_lignite_vent",
            "kubejs:active_asurine_vent",
            "kubejs:active_ochrum_vent",
            "kubejs:active_bauxite_vent",
            "kubejs:active_crimsite_vent",
            "kubejs:active_veridium_vent",
            "kubejs:lignite_lava_key",
            "kubejs:asurine_lava_key",
            "kubejs:ochrum_lava_key",
            "kubejs:bauxite_lava_key",
            "kubejs:crimsite_lava_key",
            "kubejs:veridium_lava_key"]).scene("ore_vents", "Ore Vents", (scene, util) => {
        const baseLignite = [0, 1, 0, 4, 1, 4];
        const northLignite = [1, 2, 0, 3, 2, 0];
        const westLignite = [0, 2, 1, 0, 2, 3];
        const southLignite = [1, 2, 4, 3, 2, 4];
        const eastLignite = [4, 2, 1, 4, 2, 3];
        const singleNorthLignite = [2, 3, 0];
        const singleWestLignite = [0, 3, 2];
        const singleSouthLignite = [2, 3, 4];
        const singleEastLignite = [4, 3, 2];
        const ligniteVent = [2, 2, 2];
        const ligniteVentTarget = [2.5, 2.25, 2.5];
        const ligniteVentKeyTarget = [2.5, 4.9, 2.5];
        const blazeBurner = [2, 1, 2];
        scene.world.setBlocks(baseLignite, Block.id("tfmg:lignite"), false);
        scene.world.setBlocks(northLignite, Block.id("tfmg:lignite"), false);
        scene.world.setBlocks(westLignite, Block.id("tfmg:lignite"), false);
        scene.world.setBlocks(southLignite, Block.id("tfmg:lignite"), false);
        scene.world.setBlocks(eastLignite, Block.id("tfmg:lignite"), false);
        scene.world.setBlock(singleNorthLignite, Block.id("tfmg:lignite"), false);
        scene.world.setBlock(singleWestLignite, Block.id("tfmg:lignite"), false);
        scene.world.setBlock(singleSouthLignite, Block.id("tfmg:lignite"), false);
        scene.world.setBlock(singleEastLignite, Block.id("tfmg:lignite"), false);
        scene.world.setBlock(ligniteVent, Block.id("kubejs:dormant_lignite_vent"), false);

        scene.showBasePlate();
        scene.idle(5);

        scene.world.showSection(baseLignite, Facing.DOWN);
        scene.idle(2);
        scene.world.showSection(northLignite, Facing.DOWN);
        scene.idle(2);
        scene.world.showSection(westLignite, Facing.DOWN);
        scene.idle(2);
        scene.world.showSection(southLignite, Facing.DOWN);
        scene.idle(2);
        scene.world.showSection(eastLignite, Facing.DOWN);
        scene.idle(2);
        scene.world.showSection(singleNorthLignite, Facing.DOWN);
        scene.idle(2);
        scene.world.showSection(singleWestLignite, Facing.DOWN);
        scene.idle(2);
        scene.world.showSection(singleSouthLignite, Facing.DOWN);
        scene.idle(2);
        scene.world.showSection(singleEastLignite, Facing.DOWN);
        scene.idle(2);
        scene.world.showSection(ligniteVent, Facing.DOWN);
        scene.idle(2);

        scene.text(60, "You may find different types of vents in different biomes", ligniteVentTarget)
            .colored(PonderPalette.MEDIUM)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(70);

        scene.text(70, "The vent will be naturally dormant", ligniteVentTarget)
            .colored(PonderPalette.MEDIUM)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(60);
        
        scene.world.hideSection(singleNorthLignite, Facing.UP);
        scene.idle(2);
        scene.world.hideSection(singleWestLignite, Facing.UP);
        scene.idle(2);
        scene.world.hideSection(singleSouthLignite, Facing.UP);
        scene.idle(2);
        scene.world.hideSection(singleEastLignite, Facing.UP);
        scene.idle(2);
        scene.world.hideSection(northLignite, Facing.UP);
        scene.idle(2);
        scene.world.hideSection(westLignite, Facing.UP);
        scene.idle(2);
        scene.world.hideSection(southLignite, Facing.UP);
        scene.idle(2);
        scene.world.hideSection(eastLignite, Facing.UP);
        scene.idle(2);
        scene.world.hideSection(baseLignite, Facing.UP);
        scene.idle(20);
        
        scene.world.setBlock(blazeBurner, Block.id("create:blaze_burner").with("blaze", "seething").with("facing", "west"), false);
        scene.text(70, "Place a superheated blaze burner under the vent to activate it", ligniteVentTarget)
            .colored(PonderPalette.MEDIUM)
            .placeNearTarget()
            .attachKeyFrame();
        scene.world.showSection(util.select.position(blazeBurner), Facing.WEST);
        scene.idle(60);
        scene.world.modifyBlock(ligniteVent, Block.id("kubejs:active_lignite_vent"), false);
        scene.idle(30);
        scene.world.hideSection(util.select.position(blazeBurner), Facing.EAST);
        scene.idle(30);

        scene.text(70, "Use the respective lava key to unlock the vent and use it", ligniteVentTarget)
            .colored(PonderPalette.MEDIUM)
            .placeNearTarget()
            .attachKeyFrame();
        
        scene.showControls(50, ligniteVentKeyTarget, "down")
            .rightClick()
            .withItem("kubejs:lignite_lava_key");
        scene.world.modifyBlock(ligniteVent, Block.id("kubejs:unlocked_lignite_vent"), false);
        scene.idle(85);
    });
});