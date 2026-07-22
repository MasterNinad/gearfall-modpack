ItemEvents.modifyTooltips((event) => {
  event.modify("tfmg:turbo", { shift: false }, (tooltip) => {
    tooltip.insert(1, Text.of("§8Hold [§r§7Shift§r§8] for summary§r"));
  });

  event.modify("tfmg:turbo", { shift: true }, (tooltip) => {
    tooltip.insert(1, Text.of("§8Hold [§rShift§8] for summary§r"));
    tooltip.insert(2, Text.of("§6Right click on a tfmg engine to boost its performance (with slightly more fuel)§r"));
  });
});
