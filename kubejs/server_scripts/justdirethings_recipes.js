ServerEvents.recipes(event => {

event.custom({
  type: 'justdirethings:goospread',
  craftingDuration: 600,
  id: "justdirethings:custom_andesite_alloy_block",
  input: {
    Name: 'minecraft:polished_andesite'
  },
  output: {
    Name: 'create:andesite_alloy_block',
  },
  "tierRequirement": 1
});

event.custom({
  type: 'justdirethings:goospread',
  craftingDuration: 600,
  id: "justdirethings:custom_andesite_alloy_block",
  input: {
    Name: 'create:zinc_block'
  },
  output: {
    Name: 'create:brass_block',
  },
  "tierRequirement": 2
});

event.custom({
  type: 'justdirethings:goospread',
  craftingDuration: 600,
  id: "justdirethings:custom_raw_ferricore_ore",
  input: {
    Name: 'create:andesite_alloy_block'
  },
  output: {
    Name: 'justdirethings:raw_ferricore_ore',
  },
  Properties: {
      facing: "north"
    },
  "tierRequirement": 1
});

event.custom({
  type: 'justdirethings:goospread',
  craftingDuration: 600,
  id: "justdirethings:custom_raw_blazegold_ore",
  input: {
    Name: 'create:brass_block'
  },
  output: {
    Name: 'justdirethings:raw_blazegold_ore',
  },
  Properties: {
      facing: "north"
    },
  "tierRequirement": 2
});

event.custom({
  type: 'justdirethings:goospread',
  craftingDuration: 1200,
  id: "justdirethings:custom_raw_celestigem_ore",
  input: {
    Name: 'create_aquatic_ambitions:prismarine_alloy_block'
  },
  output: {
    Name: 'justdirethings:raw_celestigem_ore',
  },
  Properties: {
      facing: "north"
    },
  "tierRequirement": 3
});

event.custom({
  type: 'justdirethings:goospread',
  craftingDuration: 2400,
  id: "justdirethings:dire_echo_block",
  input: {
    Name: 'create_deep_dark:echo_block'
  },
  output: {
    Name: 'justdirethings:raw_eclipsealloy_ore',
  },
  Properties: {
      facing: "north"
    },
  "tierRequirement": 4
});

event.custom({
  type: 'justdirethings:goospread',
  craftingDuration: 600,
  id: "justdirethings:custom_raw_replica_block",
  input: {
    Name: 'justdirethings:time_crystal_block'
  },
  output: {
    Name: 'replication:raw_replica_block',
  },
  Properties: {
      facing: "north"
    },
  "tierRequirement": 4
})

})

