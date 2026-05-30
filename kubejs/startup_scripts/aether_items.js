// =============================================================
// CreateCraft — Register Custom Aether+Create Items
// =============================================================
// These items act as intermediaries in the Aether-Create chain.
// They have no special behaviour — just crafting ingredients.
// =============================================================

StartupEvents.registry("item", (event) => {
  // Aetheric Alloy — the core intermediate material
  // Made from Zanite + Zinc, used in all Aether-Create recipes
  event.create("aetheric_alloy").displayName("Aetheric Alloy").maxStackSize(64);

  // Sky Casing — decorative Create casing with Aether wood
  event.create("sky_casing").displayName("Sky Casing").maxStackSize(64);

  // Gravitite Flywheel — high-tier flywheel for Create machines
  event
    .create("gravitite_flywheel")
    .displayName("Gravitite Flywheel")
    .maxStackSize(16);

  // Sky Encased Fan — faster Encased Fan, Aether-powered
  event
    .create("sky_encased_fan")
    .displayName("Sky Encased Fan")
    .maxStackSize(64);
});
