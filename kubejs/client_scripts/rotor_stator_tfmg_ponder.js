Ponder.tags((event) => {
    event.add("tfmg:electric_machinery", "tfmg:constantan_spool");
    event.add("tfmg:electric_machinery", "tfmg:multimeter");
});

Ponder.registry((event) => {
  event.remove("tfmg:rotor");
  event.remove("tfmg:stator");
  event.create(["tfmg:rotor", "tfmg:stator"]).scene("generating_electricity", "Generating electricity", (scene, util) => {
        const rotor = [3, 2, 2];
        const rotorTarget = [3.5, 2.25, 2.5];
        const stator1 = [3, 1, 2];
        const stator2 = [3, 1, 1];
        const stator3 = [3, 2, 1];
        const stator4 = [3, 3, 1];
        const stator5 = [3, 3, 2];
        const stator6 = [3, 3, 3];
        const stator7 = [3, 2, 3];
        const stator8 = [3, 1, 3];
        const motor = [2, 2, 2];
        const cable = [3, 4, 2];
        const cableTarget = [3.5, 4.25, 2.5];

        scene.world.setBlock(rotor, Block.id("tfmg:rotor").with("axis", "x"), false);
        scene.world.setBlock(stator1, Block.id("tfmg:stator").with("facing", "up").with("stator_state", "side"), false);
        scene.world.setBlock(stator2, Block.id("tfmg:stator").with("facing", "east").with("stator_state", "corner"), false);
        scene.world.setBlock(stator3, Block.id("tfmg:stator").with("facing", "south").with("stator_state", "side"), false);
        scene.world.setBlock(stator4, Block.id("tfmg:stator").with("facing", "east").with("stator_state", "corner"), false);
        scene.world.setBlock(stator5, Block.id("tfmg:stator").with("facing", "down").with("stator_state", "side"), false);
        scene.world.setBlock(stator6, Block.id("tfmg:stator").with("facing", "west").with("stator_state", "corner"), false);
        scene.world.setBlock(stator7, Block.id("tfmg:stator").with("facing", "north").with("stator_state", "side"), false);
        scene.world.setBlock(stator8, Block.id("tfmg:stator").with("facing", "west").with("stator_state", "corner"), false);
        scene.world.setBlock(motor, Block.id("create:creative_motor").with("facing", "east"), false);
        scene.world.setBlock(cable, Block.id("tfmg:cable_tube").with("axis", "y"), false);

        scene.showBasePlate();
        scene.idle(5);

        scene.world.showSection(util.select.position(rotor), Facing.DOWN);
        scene.idle(12);

        scene.text(60, "A rotor has 8 sides", rotorTarget)
            .colored(PonderPalette.MEDIUM)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(60);

        scene.text(70, "Place stators on all 8 sides", rotorTarget)
            .colored(PonderPalette.MEDIUM)
            .placeNearTarget()
            .attachKeyFrame();

        scene.world.showSection(util.select.position(stator1), Facing.DOWN);
        scene.idle(3);
        scene.world.showSection(util.select.position(stator2), Facing.DOWN);
        scene.idle(3);
        scene.world.showSection(util.select.position(stator3), Facing.DOWN);
        scene.idle(3);
        scene.world.showSection(util.select.position(stator4), Facing.DOWN);
        scene.idle(3);
        scene.world.showSection(util.select.position(stator5), Facing.DOWN);
        scene.idle(3);
        scene.world.showSection(util.select.position(stator6), Facing.DOWN);
        scene.idle(3);
        scene.world.showSection(util.select.position(stator7), Facing.DOWN);
        scene.idle(3);
        scene.world.showSection(util.select.position(stator8), Facing.DOWN);
        scene.idle(70);

        scene.text(70, "Attach cable to any non-diagonal stator to generate electricity", cableTarget)
            .colored(PonderPalette.MEDIUM)
            .placeNearTarget()
            .attachKeyFrame();
        scene.world.showSection(util.select.position(motor), Facing.DOWN);
        scene.world.showSection(util.select.position(cable), Facing.DOWN);
        scene.idle(70);
    });
});