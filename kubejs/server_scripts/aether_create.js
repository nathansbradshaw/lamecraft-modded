// =============================================================
// CreateCraft — Aether + Create Integration Recipes
// =============================================================
// Recipe chain overview:
//
//  1. Zanite Ore  →  Zanite Ingot         (vanilla smelting, from Aether)
//  2. Zanite Ingot + Zinc + Water  →  Aetheric Alloy  (Create Mixer)
//  3. Aetheric Alloy  →  Sky Casing        (Create Pressing)
//  4. Aetheric Alloy + Apricorn  →  Aether Ball  (Create Sequenced Assembly)
//  5. Gravitite Ingot + Aetheric Alloy  →  Gravitite Flywheel  (Create Sequenced Assembly)
//
// Requires: The Aether, Create, Cobblemon, KubeJS
// =============================================================

ServerEvents.recipes((event) => {
  // -----------------------------------------------------------
  // 1. AETHERIC ALLOY — Create Mixing
  //    Zanite Ingot + Zinc Ingot, heated, with 250mb Water
  //    Produces 2x Aetheric Alloy
  //    Requires: Blaze Burner (heated)
  // -----------------------------------------------------------
  event.recipes.create
    .mixing(
      [Item.of("kubejs:aetheric_alloy", 2)],
      [
        "aether:zanite_ingot",
        "create:zinc_ingot",
        Fluid.of("minecraft:water", 250),
      ],
    )
    .heated();

  // -----------------------------------------------------------
  // 2. SKY CASING — Create Pressing
  //    Press an Aetheric Alloy on a Skyroot Plank
  //    Produces 1x Sky Casing (decorative Create casing)
  // -----------------------------------------------------------
  event.recipes.create.pressing("kubejs:sky_casing", [
    "kubejs:aetheric_alloy",
    "aether:skyroot_planks",
  ]);

  // -----------------------------------------------------------
  // 3. AETHER BALL — Create Sequenced Assembly
  //    An Ultra Ball upgraded with Aetheric Alloy and Ambrosium
  //    Has 2x catch rate (same as Ultra Ball but works in Aether)
  //    Steps:
  //      - Press with Aetheric Alloy sheet
  //      - Fill with 500mb Lava (the Aether "fire")
  //      - Press with Ambrosium Shard
  // -----------------------------------------------------------
  event.recipes.create
    .sequenced_assembly(
      [Item.of("cobblemon:ultra_ball", 2)], // output: 2 Ultra Balls
      "cobblemon:great_ball", // input: start with a Great Ball
      [
        event.recipes.create.pressing(
          "create:incomplete_large_cogwheel", // placeholder for in-progress item
          "kubejs:aetheric_alloy",
        ),
        event.recipes.create.filling("create:incomplete_large_cogwheel", [
          "create:incomplete_large_cogwheel",
          Fluid.of("minecraft:lava", 500),
        ]),
        event.recipes.create.pressing(
          "create:incomplete_large_cogwheel",
          "aether:ambrosium_shard",
        ),
      ],
    )
    .transitionalItem("create:incomplete_large_cogwheel")
    .loops(1);

  // -----------------------------------------------------------
  // 4. GRAVITITE FLYWHEEL — Create Sequenced Assembly
  //    A high-tier flywheel for powerful Create contraptions
  //    Steps:
  //      - Start with a standard Flywheel
  //      - Press with Gravitite Ingot
  //      - Press with Aetheric Alloy
  //      - Fill with 1000mb Water (Aether sky-water)
  //    Requires: brass-level Create progression
  // -----------------------------------------------------------
  event.recipes.create
    .sequenced_assembly(
      [Item.of("kubejs:gravitite_flywheel", 1)],
      "create:flywheel",
      [
        event.recipes.create.pressing(
          "create:incomplete_large_cogwheel",
          "aether:gravitite_ingot",
        ),
        event.recipes.create.pressing(
          "create:incomplete_large_cogwheel",
          "kubejs:aetheric_alloy",
        ),
        event.recipes.create.filling("create:incomplete_large_cogwheel", [
          "create:incomplete_large_cogwheel",
          Fluid.of("minecraft:water", 1000),
        ]),
      ],
    )
    .transitionalItem("create:incomplete_large_cogwheel")
    .loops(1);

  // -----------------------------------------------------------
  // 5. GRAVITITE FLYWHEEL USE — Shapeless crafting
  //    Gravitite Flywheel + Copper Casing = Sky Encased Fan
  //    (a faster version of the Encased Fan for Aether farming)
  // -----------------------------------------------------------
  event.shapeless("kubejs:sky_encased_fan", [
    "kubejs:gravitite_flywheel",
    "create:copper_casing",
  ]);

  // -----------------------------------------------------------
  // 6. REMOVE vanilla Master Ball recipe and add Create version
  //    Master Ball now requires Aetheric Alloy + Netherite Star
  //    via Sequenced Assembly — making it properly endgame
  // -----------------------------------------------------------
  event.remove({ output: "cobblemon:master_ball" });

  event.recipes.create
    .sequenced_assembly(
      [Item.of("cobblemon:master_ball", 1)],
      "cobblemon:ultra_ball",
      [
        event.recipes.create.pressing(
          "create:incomplete_large_cogwheel",
          "kubejs:aetheric_alloy",
        ),
        event.recipes.create.pressing(
          "create:incomplete_large_cogwheel",
          "aether:zanite_ingot",
        ),
        event.recipes.create.pressing(
          "create:incomplete_large_cogwheel",
          "minecraft:nether_star",
        ),
        event.recipes.create.filling("create:incomplete_large_cogwheel", [
          "create:incomplete_large_cogwheel",
          Fluid.of("minecraft:water", 1000),
        ]),
      ],
    )
    .transitionalItem("create:incomplete_large_cogwheel")
    .loops(3); // 3 loops = rare and expensive
});
