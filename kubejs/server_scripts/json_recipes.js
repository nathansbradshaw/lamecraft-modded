ServerEvents.recipes(event => {
// FILL
    event.custom({
   type: "create:filling",
   ingredients: [
    {
      tag: "kubejs:valid_lumisene_planks"
    },
    {
      type: "neoforge:single",
      amount: 250,
      fluid: "supplementaries:lumisene"
    }
  ],
  results: [
    {
      "id": "ars_nouveau:archwood_planks"
    }
  ]
});

    event.custom({
   type: "create:filling",
   ingredients: [
    {
      tag: "c:stones"
    },
    {
      type: "neoforge:single",
      amount: 10,
      fluid: "create_deep_dark:molten_echo"
    }
  ],
  results: [
    {
      "id": "minecraft:sculk"
    }
  ]
});

//ITEM APP
event.custom({
   type: "create:item_application",
  ingredients: [
    {
      item: "create:brass_casing"
    },
    {
      item: "create:refined_radiance"
    }
  ],
  results: [
    {
      id: "create:refined_radiance_casing"
    }
  ]
});

event.custom({
   type: "create:item_application",
  ingredients: [
    {
      item: "create:brass_casing"
    },
    {
      item: "create:shadow_steel"
    }
  ],
  results: [
    {
      id: "create:shadow_steel_casing"
    }
  ]
});

// MIXING

event.custom({
   type: "create:mixing",
   heat_requirement: "heated",
  ingredients: [
    {
      item: "minecraft:prismarine"
    },
    {
      item: "createaddition:diamond_grit"
    }
  ],
  results: [
    {
      id: "create_aquatic_ambitions:prismarine_alloy"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      tag: "c:strings"
    },
    {
      tag: "c:strings"
    },
    {
      tag: "c:slime_balls"
    }
  ],
  results: [
    {
      count: 8,
      id: "refinedstorage:processor_binding"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      item: "ars_nouveau:abjuration_essence"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "sauce:source_fluid"
    }
  ],
  results: [
    {
      count: 2,
      id: "ars_nouveau:abjuration_essence"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      item: "ars_nouveau:conjuration_essence"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "sauce:source_fluid"
    }
  ],
  results: [
    {
      count: 2,
      id: "ars_nouveau:conjuration_essence"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      item: "ars_nouveau:air_essence"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "sauce:source_fluid"
    }
  ],
  results: [
    {
      count: 2,
      id: "ars_nouveau:air_essence"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      item: "ars_nouveau:earth_essence"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "sauce:source_fluid"
    }
  ],
  results: [
    {
      count: 2,
      id: "ars_nouveau:earth_essence"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      item: "ars_nouveau:fire_essence"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "sauce:source_fluid"
    }
  ],
  results: [
    {
      count: 2,
      id: "ars_nouveau:fire_essence"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      item: "ars_nouveau:manipulation_essence"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "sauce:source_fluid"
    }
  ],
  results: [
    {
      count: 2,
      id: "ars_nouveau:manipulation_essence"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      item: "ars_nouveau:water_essence"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "sauce:source_fluid"
    }
  ],
  results: [
    {
      count: 2,
      id: "ars_nouveau:water_essence"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      tag: "minecraft:saplings"
    },
    {
      item: "ars_nouveau:water_essence"
    },
    {
      item: "ars_nouveau:water_essence"
    },
    {
      item: "ars_nouveau:water_essence"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "justdirethings:polymorphic_fluid_source"
    }
  ],
  results: [
    {
      id: "ars_nouveau:blue_archwood_sapling"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      tag: "minecraft:saplings"
    },
    {
      item: "ars_nouveau:fire_essence"
    },
    {
      item: "ars_nouveau:fire_essence"
    },
    {
      item: "ars_nouveau:fire_essence"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "justdirethings:polymorphic_fluid_source"
    }
  ],
  results: [
    {
      id: "ars_nouveau:red_archwood_sapling"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      tag: "minecraft:saplings"
    },
    {
      item: "ars_nouveau:abjuration_essence"
    },
    {
      item: "ars_nouveau:abjuration_essence"
    },
    {
      item: "ars_nouveau:abjuration_essence"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "justdirethings:polymorphic_fluid_source"
    }
  ],
  results: [
    {
      id: "ars_nouveau:purple_archwood_sapling"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      tag: "minecraft:saplings"
    },
    {
      item: "ars_nouveau:earth_essence"
    },
    {
      item: "ars_nouveau:earth_essence"
    },
    {
      item: "ars_nouveau:earth_essence"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "justdirethings:polymorphic_fluid_source"
    }
  ],
  results: [
    {
      id: "ars_nouveau:green_archwood_sapling"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      tag: "c:foods/fruit"
    },
    {
      item: "ars_nouveau:abjuration_essence"
    },
    {
      type: "neoforge:single",
      amount: 250,
      fluid: "justdirethings:polymorphic_fluid_source"
    }
  ],
  results: [
    {
      id: "ars_nouveau:bastion_pod"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      tag: "c:crops/melon"
    },
    {
      item: "ars_nouveau:earth_essence"
    },
    {
      type: "neoforge:single",
      amount: 250,
      fluid: "justdirethings:polymorphic_fluid_source"
    }
  ],
  results: [
    {
      id: "ars_nouveau:mendosteen_pod"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      tag: "c:foods/fruit"
    },
    {
      item: "ars_nouveau:water_essence"
    },
    {
      type: "neoforge:single",
      amount: 250,
      fluid: "justdirethings:polymorphic_fluid_source"
    }
  ],
  results: [
    {
      id: "ars_nouveau:frostaya_pod"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      tag: "c:foods/fruit"
    },
    {
      item: "ars_nouveau:fire_essence"
    },
    {
      type: "neoforge:single",
      amount: 250,
      fluid: "justdirethings:polymorphic_fluid_source"
    }
  ],
  results: [
    {
      id: "ars_nouveau:bombegranate_pod"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      item: "justdirethings:polymorphic_catalyst"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "minecraft:water"
    }
  ],
  results: [
    {
      amount: 1000,
      id: "justdirethings:polymorphic_fluid_source"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      item: "justdirethings:time_crystal"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "justdirethings:polymorphic_fluid_source"
    }
  ],
  results: [
    {
      amount: 1000,
      id: "justdirethings:time_fluid_source"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      item: "justdirethings:portal_fluid_catalyst"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "justdirethings:polymorphic_fluid_source"
    }
  ],
  results: [
    {
      amount: 1000,
      id: "justdirethings:unstable_portal_fluid_source"
    }
  ]
});

event.custom({
   type: "create:mixing",
   heat_requirement: "heated",
  ingredients: [
    {
      item: "justdirethings:coal_t2"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "justdirethings:polymorphic_fluid_source"
    }
  ],
  results: [
    {
      amount: 1000,
      id: "justdirethings:unrefined_t2_fluid_source"
    }
  ]
});

event.custom({
   type: "create:mixing",
   heat_requirement: "heated",
  ingredients: [
    {
      item: "justdirethings:coal_t3"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "justdirethings:polymorphic_fluid_source"
    }
  ],
  results: [
    {
      amount: 1000,
      id: "justdirethings:unrefined_t3_fluid_source"
    }
  ]
});

event.custom({
   type: "create:mixing",
   heat_requirement: "heated",
  ingredients: [
    {
      item: "justdirethings:coal_t4"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "justdirethings:polymorphic_fluid_source"
    }
  ],
  results: [
    {
      amount: 1000,
      id: "justdirethings:unrefined_t4_fluid_source"
    }
  ]
});

event.custom({
   type: "create:mixing",
   heat_requirement: "heated",
  ingredients: [
    {
      item: "createaddition:biomass_pellet"
    },
    {
      type: "neoforge:single",
      amount: 250,
      fluid: "justdirethings:polymorphic_fluid_source"
    }
  ],
  results: [
    {
      amount: 250,
      id: "create_mechanical_spawner:spawn_fluid_random"
    }
  ]
});

event.custom({
   type: "create:mixing",
   heat_requirement: "heated",
  ingredients: [
    {
      type: "neoforge:single",
      amount: 500,
      fluid: "minecraft:water"
    },
    {
      type: "neoforge:single",
      amount: 500,
      fluid: "create_enchantment_industry:experience"
    }
  ],
  results: [
    {
      amount: 1000,
      id: "create_mechanical_spawner:spawn_fluid_random"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      item: "minecraft:amethyst_shard"
    },
    {
      type: "neoforge:single",
      amount: 250,
      fluid: "sauce:source_fluid"
    }
  ],
  results: [
    {
      id: "ars_nouveau:source_gem"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      item: "minecraft:lapis_lazuli"
    },
    {
      type: "neoforge:single",
      amount: 250,
      fluid: "sauce:source_fluid"
    }
  ],
  results: [
    {
      id: "ars_nouveau:source_gem"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      item: "minecraft:amethyst_block"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "sauce:source_fluid"
    }
  ],
  results: [
    {
      id: "ars_nouveau:source_gem_block"
    }
  ]
});

event.custom({
   type: "create:mixing",
   heat_requirement: "superheated",
  ingredients: [
    {
      item: "minecraft:copper_block"
    },
    {
      item: "create:zinc_block"
    },
  ],
  results: [
    {
      count: 2,
      id: "create:brass_block"
    }
  ]
});

// COMPACTING
event.custom({
   type: "create:compacting",
   heat_requirement: "heated",
  ingredients: [
    {
      item: "minecraft:iron_ingot"
    },
    {
      item: "minecraft:iron_ingot"
    },
    {
      item: "minecraft:iron_ingot"
    },
    {
      item: "minecraft:quartz"
    }
  ],
  results: [
    {
      count: 4,
      id: "refinedstorage:quartz_enriched_iron"
    }
  ]
});

event.custom({
   type: "create:compacting",
   heat_requirement: "heated",
  ingredients: [
    {
      item: "refinedstorage:basic_processor"
    },
    {
      item: "minecraft:glowstone_dust"
    }
  ],
  results: [
    {
      id: "refinedstorage:construction_core"
    }
  ]
});

event.custom({
   type: "create:compacting",
   heat_requirement: "heated",
  ingredients: [
    {
      item: "refinedstorage:basic_processor"
    },
    {
      item: "minecraft:quartz"
    }
  ],
  results: [
    {
      id: "refinedstorage:destruction_core"
    }
  ]
});

event.custom({
   type: "create:compacting",
   heat_requirement: "heated",
  ingredients: [
    {
      item: "minecraft:copper_ingot"
    },
    {
      item: "minecraft:copper_ingot"
    },
    {
      item: "minecraft:copper_ingot"
    },
    {
      item: "minecraft:quartz"
    }
  ],
  results: [
    {
      count: 4,
      id: "refinedstorage:quartz_enriched_copper"
    }
  ]
});

event.custom({
   type: "create:compacting",
  ingredients: [
    {
      item: "create:fluid_pipe"
    },
    {
      item: "create:fluid_pipe"
    },
    {
      item: "create:fluid_pipe"
    },
    {
      item: "create:fluid_pipe"
    },
    {
      item: "create:portable_storage_interface"
    },
    {
      item: "dndecor:belt_connector"
    },
    {
      item: "create:chute"
    },
    {
      item: "create:chute"
    },
    {
      item: "createages:copper_machine"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "supplementaries:lumisene"
    }
  ],
  results: [
    {
      id: "immersive_aircraft:boiler"
    }
  ]
});

event.custom({
   type: "create:compacting",
   heat_requirement: "heated",
  ingredients: [
    {
      item: "create:factory_gauge"
    },
    {
      item: "create:flywheel"
    },
    {
      item: "create:blaze_burner"
    },
    {
      item: "dndecor:belt_connector"
    },
    {
      item: "createaddition:electric_motor"
    },
    {
      item: "dndecor:belt_connector"
    },
    {
      item: "createaddition:alternator"
    },
    {
      item: "immersive_aircraft:boiler"
    }
  ],
  results: [
    {
      id: "immersive_aircraft:engine"
    }
  ]
});

event.custom({
   type: "create:compacting",
   heat_requirement: "heated",
  ingredients: [
    {
      item: "create:fluid_pipe"
    },
    {
      item: "create:fluid_pipe"
    },
    {
      item: "create:fluid_pipe"
    },
    {
      item: "create:fluid_pipe"
    },
    {
      item: "justdirethings:blazegold_ingot"
    },
    {
      item: "justdirethings:blazegold_ingot"
    },
    {
      item: "create:smart_fluid_pipe"
    },
    {
      item: "createages:andesite_machine"
    },
    {
      item: "createages:copper_machine"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "minecraft:water"
    }
  ],
  results: [
    {
      id: "immersive_aircraft:eco_engine"
    }
  ]
});

event.custom({
   type: "create:compacting",
   heat_requirement: "superheated",
  ingredients: [
    {
      item: "create:sturdy_sheet"
    },
    {
      item: "create:sturdy_sheet"
    },
    {
      item: "create:fluid_pipe"
    },
    {
      item: "create:fluid_pipe"
    },
    {
      item: "justdirethings:blazegold_ingot"
    },
    {
      item: "justdirethings:blazegold_ingot"
    },
    {
      item: "minecraft:netherite_ingot"
    },
    {
      item: "createages:brass_machine"
    },
    {
      item: "immersive_aircraft:engine"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "minecraft:lava"
    }
  ],
  results: [
    {
      id: "immersive_aircraft:nether_engine"
    }
  ]
});

event.custom({
   type: "create:compacting",
   heat_requirement: "superheated",
  ingredients: [
    {
      item: "create_deep_dark:echo_ingot"
    },
    {
      item: "createcasing:chorium_ingot"
    },
    {
      item: "create_compat_core:nether_star_shard"
    },
    {
      item: "create_compat_core:nether_star_shard"
    },
    {
      item: "create_compat_core:nether_star_shard"
    },
    {
      item: "create_compat_core:nether_star_shard"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "sauce:source_fluid"
    }
  ],
  results: [
    {
      id: "createcompounds:chromatic_compound"
    }
  ]
});

event.custom({
   type: "create:compacting",
   heat_requirement: "superheated",
  ingredients: [
    {
      item: "minecraft:netherite_scrap"
    },
    {
      item: "create:brass_ingot"
    }
  ],
  results: [
    {
      count: 2,
      id: "tempad:time_steel"
    }
  ]
});

event.custom({
   type: "create:compacting",
  ingredients: [
    {
      tag: "c:stones"
    },
    {
      tag: "c:stones"
    },
    {
      tag: "c:stones"
    },
    {
      tag: "c:stones"
    },
    {
      tag: "c:stones"
    },
    {
      tag: "c:stones"
    },
    {
      tag: "c:stones"
    },
    {
      tag: "c:stones"
    },
    {
      type: "neoforge:single",
      amount: 500,
      fluid: "sauce:source_fluid"
    }
  ],
  results: [
    {
      count: 8,
      id: "ars_nouveau:sourcestone"
    }
  ]
});

event.custom({
   type: "create:compacting",
  ingredients: [
    {
      item: "createaddition:electrum_ingot"
    },
    {
      item: "create:powdered_obsidian"
    }
  ],
  results: [
    {
      count: 2,
      id: "fluxnetworks:flux_dust"
    }
  ]
});

// CHANNELING
event.custom({
  type: "create_aquatic_ambitions:channeling",
  ingredients: [
    {
      tag: "c:gems/lapis"
    }
  ],
  results: [
    {
      chance: 0.75,
      id: "minecraft:prismarine_shard"
    },
    {
      chance: 0.125,
      id: "minecraft:prismarine_crystals"
    }
  ]
});

event.custom({
  type: "create_aquatic_ambitions:channeling",
  ingredients: [
    {
      item: "minecraft:obsidian"
    }
  ],
  results: [
    {
      id: "minecraft:crying_obsidian"
    }
  ]
});

event.custom({
  type: "create_aquatic_ambitions:channeling",
  ingredients: [
    {
      item: "minecraft:bone_block"
    }
  ],
  results: [
    {
      id: "create:limestone"
    }
  ]
});

// CHARGING

event.custom({
  type: "createaddition:charging",
  energy: 4000,
  ingredients: [
    {
      item: "minecraft:crying_obsidian"
    }
  ],
  max_charge_rate: 200,
  results: [
    {
      count: 2,
      id: "create:asurine"
    }
  ]
});

event.custom({
  type: "createaddition:charging",
  energy: 8000,
  ingredients: [
    {
      item: "minecraft:quartz"
    }
  ],
  max_charge_rate: 400,
  results: [
    {
      count: 1,
      id: "create:rose_quartz"
    }
  ]
});

// CRUSHING

event.custom({
  type: "create:crushing",
  ingredients: [
    {
      item: "minecraft:emerald"
    }
  ],
  processing_time: 250,
  results: [
    {
      id: "create_compat_core:emerald_dust"
    }
  ]
});

event.custom({
  type: "create:crushing",
  ingredients: [
    {
      item: "minecraft:lapis_lazuli"
    }
  ],
  processing_time: 250,
  results: [
    {
      id: "create_compat_core:lapis_lazuli_dust"
    }
  ]
})

event.custom({
  type: "create:crushing",
  ingredients: [
    {
      tag: "rarcompat:mimificable"
    }
  ],
  processing_time: 250,
  results: [
    {
      id: "rarcompat:mimi_dust"
    }
  ]
})

event.custom({
  type: "create:crushing",
  ingredients: [
    {
      item: "minecraft:nether_star"
    }
  ],
  processing_time: 250,
  results: [
    {
      count: 4,
      id: "create_compat_core:nether_star_shard"
    }
  ]
})

event.custom({
  type: "create:crushing",
  ingredients: [
    {
      item: "create_aquatic_ambitions:spiky_shell"
    }
  ],
  processing_time: 250,
  results: [
    {
      count: 1,
      id: "minecraft:bone_meal"
    }
  ]
})

event.custom({
  type: "create:crushing",
  ingredients: [
    {
      item: "minecraft:deepslate"
    }
  ],
  processing_time: 250,
  results: [
    {
      count: 1,
      id: "minecraft:cobbled_deepslate"
    }
  ]
})

// MILLING

event.custom({
  type: "create:milling",
  ingredients: [
    {
      item: "minecraft:emerald"
    }
  ],
  processing_time: 250,
  results: [
    {
      id: "create_compat_core:emerald_dust"
    }
  ]
});

event.custom({
   type: "create:compacting",
   heat_requirement: "superheated",
  ingredients: [
    {
      item: "create_deep_dark:sculk_flour"
    },
    {
      item: "create_deep_dark:sculk_flour"
    },
  ],
  results: [
    {
      id: "minecraft:echo_shard"
    }
  ]
});

event.custom({
   type: "create:compacting",
   heat_requirement: "superheated",
  ingredients: [
    {
      item: "minecraft:magma_block"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "minecraft:water"
    }
  ],
  results: [
    {
      id: "create:ochrum"
    }
  ]
});

event.custom({
   type: "create:compacting",
   heat_requirement: "superheated",
  ingredients: [
    {
      item: "minecraft:gravel"
    },
    {
      item: "minecraft:flint"
    },
    {
      item: "minecraft:flint"
    },
    {
      item: "minecraft:flint"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "minecraft:lava"
    }
  ],
  results: [
    {
      id: "create:crimsite"
    }
  ]
});

event.custom({
   type: "create:compacting",
  ingredients: [
    {
      item: "ars_nouveau:archwood_planks"
    },
    {
      item: "ars_nouveau:archwood_planks"
    },
    {
      item: "ars_nouveau:archwood_planks"
    },
    {
      item: "ars_nouveau:archwood_planks"
    },
    {
      item: "ars_nouveau:archwood_planks"
    },
    {
      item: "ars_nouveau:archwood_planks"
    },
    {
      item: "ars_nouveau:archwood_planks"
    },
    {
      item: "ars_nouveau:archwood_planks"
    }
  ],
  results: [
    {
      amount: 1000,
      id: "supplementaries:lumisene"
    }
  ]
});

// ASSEMBLY

event.custom({
  type: "create:sequenced_assembly",
  ingredient: {
    item: "refinedstorage:silicon"
  },
  results: [
    {
      id: "refinedstorage:basic_processor"
    }
  ],
  sequence: [
    {
      type: "create:deploying",
      ingredients: [
        {
          item: "refinedstorage:silicon"
        },
        [
          {
            tag: "c:ingots/iron"
          }
        ]
      ],
      results: [
        {
          id: "minecraft:iron_ingot"
        }
      ]
    },
    {
      type: "create:deploying",
      ingredients: [
        {
          item: "minecraft:iron_ingot"
        },
        [
          {
            item: "create:polished_rose_quartz"
          }
        ]
      ],
      results: [
        {
          id: "minecraft:redstone"
        }
      ]
    },
    {
      type: "create:deploying",
      ingredients: [
        {
          item: "minecraft:redstone"
        },
        [
          {
            item: "refinedstorage:processor_binding"
          }
        ]
      ],
      results: [
        {
          id: "refinedstorage:processor_binding"
        }
      ]
    },
    {
      type: "create:pressing",
    ingredients: [
        {
          item: "refinedstorage:processor_binding"
        }
      ],
      results: [
        {
          id: "refinedstorage:raw_basic_processor"
        }
      ]
    }
  ],
  transitional_item: {
    id: "refinedstorage:raw_basic_processor"
  }
});

event.custom({
  type: "create:sequenced_assembly",
  ingredient: {
    item: "refinedstorage:silicon"
  },
  results: [
    {
      id: "refinedstorage:improved_processor"
    }
  ],
  sequence: [
    {
      type: "create:deploying",
      ingredients: [
        {
          item: "refinedstorage:silicon"
        },
        [
          {
            tag: "c:ingots/gold"
          }
        ]
      ],
      results: [
        {
          id: "refinedstorage:raw_improved_processor"
        }
      ]
    },
    {
      type: "create:deploying",
      ingredients: [
        {
          item: "refinedstorage:raw_improved_processor"
        },
        [
          {
            item: "create:polished_rose_quartz"
          }
        ]
      ],
      results: [
        {
          id: "refinedstorage:raw_improved_processor"
        }
      ]
    },
    {
      type: "create:deploying",
      ingredients: [
        {
          item: "minecraft:redstone"
        },
        [
          {
            item: "refinedstorage:processor_binding"
          }
        ]
      ],
      results: [
        {
          id: "refinedstorage:raw_improved_processor"
        }
      ]
    },
    {
      type: "create:pressing",
    ingredients: [
        {
          item: "refinedstorage:processor_binding"
        }
      ],
      results: [
        {
          id: "refinedstorage:raw_improved_processor"
        }
      ]
    }
  ],
  transitional_item: {
    id: "refinedstorage:raw_improved_processor"
  }
});

event.custom({
  type: "create:sequenced_assembly",
  ingredient: {
    item: "refinedstorage:silicon"
  },
  results: [
    {
      id: "refinedstorage:advanced_processor"
    }
  ],
  sequence: [
    {
      type: "create:deploying",
      ingredients: [
        {
          item: "refinedstorage:silicon"
        },
        [
          {
            tag: "c:gems/diamond"
          }
        ]
      ],
      results: [
        {
          id: "refinedstorage:raw_advanced_processor"
        }
      ]
    },
    {
      type: "create:deploying",
      ingredients: [
        {
          item: "refinedstorage:raw_advanced_processor"
        },
        [
          {
            item: "create:polished_rose_quartz"
          }
        ]
      ],
      results: [
        {
          id: "refinedstorage:raw_advanced_processor"
        }
      ]
    },
    {
      type: "create:deploying",
      ingredients: [
        {
          item: "minecraft:redstone"
        },
        [
          {
            item: "refinedstorage:processor_binding"
          }
        ]
      ],
      results: [
        {
          id: "refinedstorage:raw_advanced_processor"
        }
      ]
    },
    {
      type: "create:pressing",
    ingredients: [
        {
          item: "refinedstorage:processor_binding"
        }
      ],
      results: [
        {
          id: "refinedstorage:raw_advanced_processor"
        }
      ]
    }
  ],
  transitional_item: {
    id: "refinedstorage:raw_advanced_processor"
  }
});

event.custom({
  type: "create:sequenced_assembly",
  ingredient: {
    item: "refinedstorage:silicon"
  },
  results: [
    {
      id: "extrastorage:neural_processor"
    }
  ],
  sequence: [
    {
      type: "create:deploying",
      ingredients: [
        {
          item: "refinedstorage:silicon"
        },
        [
          {
            item: "refinedstorage:advanced_processor"
          }
        ]
      ],
      results: [
        {
          id: "refinedstorage:advanced_processor"
        }
      ]
    },
    {
      type: "create:deploying",
      ingredients: [
        {
          item: "refinedstorage:advanced_processor"
        },
        [
          {
            item: "minecraft:crying_obsidian"
          }
        ]
      ],
      results: [
        {
          id: "refinedstorage:advanced_processor"
        }
      ]
    },
    {
      type: "create:deploying",
      ingredients: [
        {
          item: "minecraft:redstone"
        },
        [
          {
            item: "create:refined_radiance"
          }
        ]
      ],
      results: [
        {
          id: "refinedstorage:advanced_processor"
        }
      ]
    },
    {
      type: "create:pressing",
    ingredients: [
        {
          item: "refinedstorage:processor_binding"
        }
      ],
      results: [
        {
          id: "refinedstorage:advanced_processor"
        }
      ]
    }
  ],
  transitional_item: {
    id: "refinedstorage:advanced_processor"
  }
});

event.custom({
  type: "create:sequenced_assembly",
  ingredient: {
    item: "minecraft:phantom_membrane"
  },
  results: [
    {
      count: 32,
      id: "railways:track_phantom"
    }
  ],
  sequence: [
    {
      type: "create:deploying",
      ingredients: [
        {
          item: "railways:track_incomplete_phantom"
        },
        {
          tag: "c:nuggets/iron"
        }
      ],
      results: [
        {
          id: "railways:track_incomplete_phantom"
        }
      ]
    },
    {
      type: "create:deploying",
      ingredients: [
        {
          item: "railways:track_incomplete_phantom"
        },
        {
          tag: "c:nuggets/iron"
        }
      ],
      results: [
        {
          id: "railways:track_incomplete_phantom"
        }
      ]
    },
    {
      type: "create:pressing",
      ingredients: [
        {
          item: "railways:track_incomplete_phantom"
        }
      ],
      results: [
        {
          id: "railways:track_incomplete_phantom"
        }
      ]
    }
  ],
  transitional_item: {
    id: "railways:track_incomplete_phantom"
  }
});

// Crafter

event.custom({
  type: "create:mechanical_crafting",
  accept_mirrored: false,
  category: "misc",
  key: {
    A: {
      item: "create:brass_ingot"
    },
    P: {
      item: "createages:brass_machine"
    }
  },
  pattern: [
    "AAA",
    "APA",
    "AAA",
  ],
  result: {
    count: 1,
    id: "refinedstorage:machine_casing"
  },
  show_notification: false
});

event.custom({
  type: "create:mechanical_crafting",
  accept_mirrored: false,
  category: "misc",
  key: {
    A: {
      item: "immersive_aircraft:sail"
    },
    B: {
      item: "immersive_aircraft:hull_reinforcement"
    },
    C: {
      item: "immersive_aircraft:engine"
    },
    D: {
      item: "farmersdelight:rope"
    },
    E: {
      item: "farmersdelight:safety_net"
    },
    F: {
      item: "create:white_seat"
    }
  },
  pattern: [
    " AAA ",
    "AAAAA",
    "BAAAB",
    "CDEDC",
    " FFF "
  ],
  result: {
    count: 1,
    id: "immersive_aircraft:warship"
  },
  show_notification: false
});

event.custom({
  type: "create:mechanical_crafting",
  accept_mirrored: false,
  category: "misc",
  key: {
    A: {
      item: "immersive_aircraft:propeller"
    },
    B: {
      item: "immersive_aircraft:sail"
    },
    C: {
      item: "immersive_aircraft:engine"
    },
    D: {
      item: "immersive_aircraft:hull_reinforcement"
    },
    E: {
      item: "create:white_seat"
    }
  },
  pattern: [
    "  A  ",
    "BBCBB",
    "BBEBB",
    "  D  ",
    " BDB "
  ],
  result: {
    count: 1,
    id: "immersive_aircraft:biplane"
  },
  show_notification: false
});

event.custom({
  type: "create:mechanical_crafting",
  accept_mirrored: false,
  category: "misc",
  key: {
    A: {
      item: "immersive_aircraft:biplane"
    },
    B: {
      item: "immersive_aircraft:hull"
    },
    C: {
      item: "create:gray_seat"
    },
    D: {
      item: "minecraft:bamboo_raft"
    },
    E: {
      item: "immersive_aircraft:engine"
    },
    F: {
      item: "minecraft:bamboo_block"
    },
    G: {
      item: "immersive_aircraft:propeller"
    },
    H: {
      item: "immersive_aircraft:sail"
    },
    I: {
      item: "minecraft:bamboo_trapdoor"
    }
  },
  pattern: [
    "ABCBA",
    "DCECD",
    "F G F",
    "HFIFH"
  ],
  result: {
    count: 1,
    id: "immersive_aircraft:bamboo_hopper"
  },
  show_notification: false
});

event.custom({
  type: "create:mechanical_crafting",
  accept_mirrored: false,
  category: "misc",
  key: {
    A: {
      item: "minecraft:ender_eye"
    },
    B: {
      item: "refinedstorage:range_upgrade"
    },
    C: {
      item: "create:refined_radiance"
    },
    D: {
      item: "create:shadow_steel"
    }
  },
  pattern: [
    "ABA",
    "BCB",
    "DDD"
  ],
  result: {
    count: 1,
    id: "rsinfinitybooster:infinity_card"
  },
  show_notification: false
});

event.custom({
  type: "create:mechanical_crafting",
  accept_mirrored: false,
  category: "misc",
  key: {
    A: {
      item: "rsinfinitybooster:infinity_card"
    },
    B: {
      item: "justdirethings:eclipsealloy_ingot"
    },
    C: {
      item: "create:refined_radiance"
    }
  },
  pattern: [
    "ABA",
    "BCB",
    "ABA"
  ],
  result: {
    count: 1,
    id: "rsinfinitybooster:dimension_card"
  },
  show_notification: false
});

event.custom({
  type: "create:mechanical_crafting",
  accept_mirrored: false,
  category: "misc",
  key: {
    A: {
      item: "create:brass_ingot"
    },
    B: {
      item: "create:brass_casing"
    },
    C: {
      item: "create:item_vault"
    },
    D: {
      item: "createages:copper_machine"
    },
    E: {
      item: "create:empty_blaze_burner"
    },
    F: {
      item: "createages:brass_machine"
    },
    G: {
      item: "create:mechanical_saw"
    }
  },
  pattern: [
    "ABBBA",
    "ACDCA",
    "AGEGA",
    "ACFCA",
    "ABBBA"
  ],
  result: {
    count: 1,
    id: "create_mechanical_spawner:mechanical_spawner"
  },
  show_notification: false
});

event.custom({
  type: "create:mechanical_crafting",
  accept_mirrored: false,
  category: "misc",
  key: {
    A: {
      item: "create:brass_ingot"
    },
    B: {
      item: "create:brass_casing"
    },
    C: {
      item: "create:item_vault"
    },
    D: {
      item: "create:smart_chute"
    },
    E: {
      item: "createages:brass_machine"
    }
  },
  pattern: [
    "ABBBA",
    "ACDCA",
    "ADEDA",
    "ACDCA",
    "ABBBA"
  ],
  result: {
    count: 1,
    id: "create_mechanical_spawner:loot_collector"
  },
  show_notification: false
});

event.custom({
  type: "create:mechanical_crafting",
  accept_mirrored: false,
  category: "misc",
  key: {
    A: {
      item: "create:brass_ingot"
    },
    B: {
      item: "create:andesite_bars"
    },
    C: {
      item: "create:refined_radiance"
    }
  },
  pattern: [
    "ABA",
    "BCB",
    "ABA"
  ],
  result: {
    count: 1,
    id: "modularrouters:modular_router"
  },
  show_notification: false
});

event.custom({
  type: "create:mechanical_crafting",
  accept_mirrored: false,
  category: "misc",
  key: {
    A: {
      item: "create:brass_ingot"
    },
    B: {
      item: "ars_technica:mark_of_technomancy"
    },
    C: {
      item: "createages:andesite_machine"
    },
    D: {
      item: "ars_technica:calibrated_precision_mechanism"
    },
    E: {
      item: "ars_nouveau:relay_collector"
    }
  },
  pattern: [
    "ABA",
    "CDC",
    "AEA"
  ],
  result: {
    count: 1,
    id: "ars_technica:source_motor"
  },
  show_notification: false
});

//UPSIZING

event.custom({
  type: "upsizing:stretching",
  ingredient: {
    item: "createages:andesite_mechanism"
  },
  result: {
    id: "transfer_labels:itemstack_extract_transfer_label"
  }
});

event.custom({
  type: "upsizing:stretching",
  ingredient: {
    item: "createages:copper_mechanism"
  },
  result: {
    id: "transfer_labels:fluidstack_extract_transfer_label"
  }
});

event.custom({
  type: "ars_nouveau:enchanting_apparatus",
  keepNbtOfReagent: false,
  pedestalItems: [
    {
      item: "ars_nouveau:manipulation_essence"
    },
    {
      item: "ars_nouveau:manipulation_essence"
    },
    {
      item: "ars_nouveau:manipulation_essence"
    },
    {
      item: "ars_technica:transmutation_focus"
    }
  ],
  reagent: {
    item: "ars_nouveau:spell_turret"
  },
  result: {
    count: 1,
    id: "ars_technica:transmutation_turret"
  },
  sourceCost: 0
});

//Washing

event.custom({
  type: "create:splashing",
  ingredients: [
    {
      item: "minecraft:mud"
    }
  ],
  results: [
    {
      chance: 0.5,
      id: "minecraft:hanging_roots"
    }
  ]
});

//Haunting

event.custom({
  type: "create:haunting",
  ingredients: [
    {
      item: "minecraft:charcoal"
    }
  ],
  results: [
    {
      chance: 0.666,
      id: "minecraft:coal"
    }
  ]
});

event.custom({
  type: "create:haunting",
  ingredients: [
    {
      item: "minecraft:dark_oak_log"
    }
  ],
  results: [
    {
      id: "minecraft:pale_oak_log"
    }
  ]
});

event.custom({
  type: "create:haunting",
  ingredients: [
    {
      item: "minecraft:dark_oak_sapling"
    }
  ],
  results: [
    {
      id: "minecraft:pale_oak_sapling"
    }
  ]
});

event.custom({
  type: "create:haunting",
  ingredients: [
    {
      item: "minecraft:moss_block"
    }
  ],
  results: [
    {
      id: "minecraft:pale_moss_block"
    }
  ]
});

event.custom({
  type: "create:haunting",
  ingredients: [
    {
      item: "minecraft:moss_carpet"
    }
  ],
  results: [
    {
      id: "minecraft:pale_moss_carpet"
    }
  ]
});

event.custom({
  type: "create:haunting",
  ingredients: [
    {
      item: "minecraft:vine"
    }
  ],
  results: [
    {
      id: "minecraft:pale_hanging_moss"
    }
  ]
});

event.custom({
  type: "create:haunting",
  ingredients: [
    {
      item: "minecraft:dark_oak_leaves"
    }
  ],
  results: [
    {
      id: "minecraft:pale_oak_leaves"
    }
  ]
});

})