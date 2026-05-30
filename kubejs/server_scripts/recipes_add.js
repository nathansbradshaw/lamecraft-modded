// Shaped Recipe Handler - ChosenArchitect

/**
 * @param {Internal.RecipeEventJS} event
 * @param {string|Item} output
 * @param {Array<string|null|undefined>} ingredientsArray
 */
const robustShaped = (event, output, ingredientsArray) => {
    const totalIngredients = ingredientsArray.length;
    
    if (totalIngredients !== 4 && totalIngredients !== 9) {
        console.error(`[RobustShaped] Recipe for ${output} failed: Input array must be 4 or 9 elements. Found ${totalIngredients}.`);
        return;
    }

    const width = (totalIngredients === 9) ? 3 : 2;
    const allLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    
    const letterToItem = {};
    const itemToLetter = {};
    let nextLetterIndex = 0;
    
    let cleanedIngredient;
    let itemString;
    let char;

    ingredientsArray.forEach(inputItem => {
        cleanedIngredient = (inputItem || '').trim();
        
        if (cleanedIngredient.length > 0 && !(cleanedIngredient in itemToLetter)) {
            const letter = allLetters[nextLetterIndex++];
            itemToLetter[cleanedIngredient] = letter;
            letterToItem[letter] = cleanedIngredient;
        }
    });

    const pattern = [];
    let currentPatternRow = '';
    
    for (let i = 0; i < totalIngredients; i++) {
        itemString = (ingredientsArray[i] || '').trim(); 
        
        if (itemString.length === 0) {
            char = ' '; 
        } else {
            char = itemToLetter[itemString]; 
        }

        currentPatternRow += char;
        
        if ((i + 1) % width === 0) {
            pattern.push(currentPatternRow);
            currentPatternRow = '';
        }
    }

    event.shaped(output, pattern, letterToItem);
    console.log(`[RobustShaped] Created SHAPED (${width}x${width}) recipe for ${output}`);
};


// --- RECIPE REGISTRIES ---
const shapedRecipes = [
    // 3x3 Recipe
    {
        output: 'justdirethings:gooblock_tier1',
        input: [
            'minecraft:clay', 'createages:andesite_mechanism', 'minecraft:clay', 
            'minecraft:raw_iron', 'create:andesite_casing', 'minecraft:raw_iron', 
            'minecraft:clay', 'createages:andesite_mechanism', 'minecraft:clay'
        ]
    },
    
    {
        output: 'justdirethings:gooblock_tier2',
        input: [
            'minecraft:blaze_rod', 'createages:copper_mechanism', 'minecraft:blaze_rod', 
            'create:polished_rose_quartz', 'justdirethings:gooblock_tier1', 'create:polished_rose_quartz', 
            'minecraft:blaze_rod', 'createages:copper_mechanism', 'minecraft:blaze_rod'
        ]
    },

    {
        output: 'justdirethings:gooblock_tier3',
        input: [
            'minecraft:ender_eye', 'create_dragons_plus:dragon_breath_bucket', 'minecraft:ender_eye', 
            'createcasing:chorium_ingot', 'justdirethings:gooblock_tier2', 'createcasing:chorium_ingot', 
            'minecraft:ender_eye', 'create_dragons_plus:dragon_breath_bucket', 'minecraft:ender_eye'
        ]
    },

    {
        output: 'justdirethings:gooblock_tier4',
        input: [
            'minecraft:crying_obsidian', 'create:shadow_steel', 'minecraft:crying_obsidian', 
            'create_deep_dark:echo_ingot', 'justdirethings:gooblock_tier3', 'create_deep_dark:echo_ingot', 
            'minecraft:crying_obsidian', 'create:shadow_steel', 'minecraft:crying_obsidian'
        ]
    },

    {
        output: 'ars_additions:codex_entry',
        input: [
            'ars_nouveau:blank_parchment', 'ars_nouveau:dowsing_rod', 'ars_nouveau:blank_parchment', 
            'ars_nouveau:earth_essence', 'createages:andesite_machine', 'ars_nouveau:fire_essence', 
            'ars_nouveau:blank_parchment', 'ars_nouveau:air_essence', 'ars_nouveau:blank_parchment'
        ]
    },

    {
        output: 'ars_additions:lost_codex_entry',
        input: [
            'ars_nouveau:blank_parchment', 'ars_nouveau:dowsing_rod', 'ars_nouveau:blank_parchment', 
            'ars_nouveau:manipulation_essence', 'createages:copper_machine', 'ars_nouveau:manipulation_essence', 
            'ars_nouveau:blank_parchment', 'ars_nouveau:water_essence', 'ars_nouveau:blank_parchment'
        ]
    },

    {
        output: 'ars_additions:ancient_codex_entry',
        input: [
            'ars_nouveau:blank_parchment', 'ars_nouveau:dowsing_rod', 'ars_nouveau:blank_parchment', 
            'ars_nouveau:abjuration_essence', 'createages:brass_machine', 'ars_nouveau:conjuration_essence', 
            'ars_nouveau:blank_parchment', 'ars_technica:mark_of_technomancy', 'ars_nouveau:blank_parchment'
        ]
    },

    {
        output: 'immersive_aircraft:hull',
        input: [
            'create:andesite_casing', 'create:andesite_casing', 'create:andesite_casing', 
            'create:andesite_alloy', 'create:andesite_alloy', 'create:andesite_alloy', 
            'create:andesite_casing', 'create:andesite_casing', 'create:andesite_casing'
        ]
    },

    {
        output: 'immersive_aircraft:sail',
        input: [
            'create:white_sail', 'create:white_sail', 'create:white_sail', 
            'create:white_sail', 'create:sail_frame', 'create:white_sail', 
            'create:white_sail', 'create:white_sail', 'create:white_sail'
        ]
    },

    {
        output: 'immersive_aircraft:propeller',
        input: [
            'create:iron_sheet', 'create:iron_sheet', ' ', 
            ' ', 'create:andesite_alloy', ' ', 
            ' ', 'create:iron_sheet', 'create:iron_sheet'
        ]
    },

    {
        output: 'immersive_aircraft:enhanced_propeller',
        input: [
            'create:brass_sheet', 'create:brass_sheet', ' ', 
            ' ', 'immersive_aircraft:propeller', ' ', 
            ' ', 'create:brass_sheet', 'create:brass_sheet'
        ]
    },

    {
        output: 'immersive_aircraft:industrial_gears',
        input: [
            ' ', 'create:copper_sheet', 'create:copper_sheet', 
            'create:iron_sheet', 'supplementaries:cog_block', 'create:copper_sheet', 
            'create:iron_sheet', 'create:iron_sheet', ' '
        ]
    },

    {
        output: 'immersive_aircraft:sturdy_pipes',
        input: [
            ' ', 'createdeco:andesite_sheet', 'create:fluid_pipe', 
            'create:fluid_pipe', 'create:copper_valve_handle', 'create:fluid_pipe', 
            'create:fluid_pipe', 'createdeco:andesite_sheet', ' '
        ]
    },

    {
        output: 'immersive_aircraft:improved_landing_gear',
        input: [
            ' ', 'create:metal_girder', 'dndecor:large_metal_girder', 
            'createages:cured_rubber', 'create:shaft', ' ', 
            'createages:cured_rubber', 'createages:cured_rubber', ' '
        ]
    },

    {
        output: 'immersive_aircraft:gyrodyne',
        input: [
            'immersive_aircraft:sail', 'immersive_aircraft:sail', ' ', 
            'immersive_aircraft:hull', 'immersive_aircraft:propeller', 'immersive_aircraft:hull', 
            ' ', 'immersive_aircraft:sail', 'immersive_aircraft:sail'
        ]
    },

    {
        output: 'immersive_aircraft:hull_reinforcement',
        input: [
            'create:sturdy_sheet', 'create:sturdy_sheet', 'create:sturdy_sheet', 
            'immersive_aircraft:hull', 'immersive_aircraft:hull', 'immersive_aircraft:hull', 
            'create:sturdy_sheet', 'create:sturdy_sheet', 'create:sturdy_sheet'
        ]
    },

    {
        output: 'starbunclemania:fluid_jar',
        input: [
            ' ', 'create:brass_ingot', ' ', 
            'minecraft:glass', 'minecraft:bucket', 'minecraft:glass', 
            'ars_nouveau:archwood_planks', 'ars_nouveau:archwood_planks', 'ars_nouveau:archwood_planks'
        ]
    },

    {
        output: 'starbunclemania:fluid_sourcelink',
        input: [
            ' ', 'ars_nouveau:volcanic_sourcelink', ' ', 
            'create:brass_ingot', 'starbunclemania:fluid_jar', 'create:brass_ingot', 
            ' ', 'ars_nouveau:relay', ' '
        ]
    },

    {
        output: 'modularrouters:blank_module',
        input: [
            ' ', 'minecraft:redstone', ' ', 
            'create:cardboard', 'create:cardboard', 'create:cardboard', 
            'create:brass_nugget', 'create:brass_nugget', 'create:brass_nugget'
        ]
    },

    {
        output: 'modularrouters:blank_upgrade',
        input: [
            'create:cardboard', 'create:cardboard', 'create:brass_nugget', 
            'create:cardboard', 'minecraft:lapis_lazuli', 'create:brass_nugget', 
            ' ', 'create:cardboard', 'create:brass_nugget'
        ]
    },

    {
        output: '8x create:belt_connector',
        input: [
            ' ', ' ', ' ', 
            'createages:cured_rubber', 'createages:cured_rubber', 'createages:cured_rubber', 
            'createages:cured_rubber', 'createages:cured_rubber', 'createages:cured_rubber'
        ]
    },

    {
        output: 'createages:zinc_hand',
        input: [
            ' ', 'create:andesite_alloy', ' ', 
            'createaddition:zinc_sheet', 'createages:andesite_mechanism', 'createaddition:zinc_sheet', 
            'createaddition:zinc_sheet', 'create:andesite_alloy', 'createaddition:zinc_sheet'
        ]
    },

    {
        output: 'create:fluid_tank',
        input: [
            ' ', 'create:copper_sheet', ' ', 
            ' ', 'minecraft:barrel', ' ', 
            ' ', 'create:copper_sheet', ' '
        ]
    },

    {
        output: 'createages:copper_machine',
        input: [
            'createages:copper_mechanism', 'createages:copper_mechanism', 'createages:copper_mechanism', 
            'createages:copper_mechanism', 'create:copper_casing', 'createages:copper_mechanism', 
            'createages:copper_mechanism', 'createages:copper_mechanism', 'createages:copper_mechanism'
        ]
    },

    {
        output: 'supplementaries:fire_pit',
        input: [
            ' ', ' ', ' ',
            'minecraft:copper_ingot', 'supplementaries:lumisene_bucket', 'minecraft:copper_ingot', 
            'minecraft:copper_ingot', 'minecraft:copper_ingot', 'minecraft:copper_ingot'
        ]
    },

    {
        output: '2x tempad:time_steel',
        input: [
            'minecraft:netherite_scrap', 'create:brass_ingot', ' ', 
            'create:brass_ingot', 'minecraft:netherite_scrap', ' ', 
            ' ', ' ', ' '
        ]
    },

    {
        output: '4x fluxnetworks:flux_core',
        input: [
            'fluxnetworks:flux_dust', 'create:brass_ingot', 'fluxnetworks:flux_dust', 
            'create:brass_ingot', 'justdirethings:celestigem', 'create:brass_ingot', 
            'fluxnetworks:flux_dust', 'create:brass_ingot', 'fluxnetworks:flux_dust'
        ]
    },



   //// 2x2 Recipe
   //{
   //    output: '5x minecraft:flint',
   //    input: [
   //        'minecraft:stick', 'minecraft:stone',
   //        'minecraft:flint', ' ' // Empty slot in the bottom right
   //    ]
   //},
   //// 2x2 Recipe 2: Wooden Crate (Padded 1x2 to 2x2)
   //{
   //    output: '2x minecraft:chest',
   //    input: [
   //        'minecraft:oak_log', 'minecraft:oak_log',
   //        ' ', ' '
   //    ]
   //}
];

const shapelessRecipes = [
    // Shapeless Recipe
    {
        output: 'ars_nouveau:novice_spell_book',
        input: [
            'minecraft:book',
            'justdirethings:ferricore_shovel', 
            'justdirethings:ferricore_pickaxe', 
            'justdirethings:ferricore_axe', 
            'justdirethings:ferricore_sword'
        ]
    },

    {
        output: 'ars_nouveau:novice_spell_book',
        input: [
            'ars_nouveau:worn_notebook',
            'justdirethings:ferricore_shovel', 
            'justdirethings:ferricore_pickaxe', 
            'justdirethings:ferricore_axe', 
            'justdirethings:ferricore_sword'
        ]
    },

    {
        output: 'ars_creo:starbuncle_wheel',
        input: [
            'create:water_wheel', 
            'ars_nouveau:starbuncle_shards'
        ]
    },
    // Shapeless Recipe
    {
        output: 'create:hand_crank',
        input: [
            'createages:andesite_mechanism',
            'create:andesite_alloy'
        ]
    },

    {
        output: '2x create_factory_logistics:factory_fluid_gauge',
        input: [
            'create:stock_link',
            'createages:copper_mechanism'
        ]
    }
];


ServerEvents.recipes(event => {

    // Smithing Table Recipes
    // Smithing recipes use the format: event.smithing(output, template, base, addition)
    // For 1.20+ 'Smithing Transform' recipes, you must specify the template item.
    // The format is: event.smithing(output, template, base_item, addition_item)

    event.smithing(
        'create:steam_engine',
        'create:copper_casing',
        'createages:copper_machine',
        'create:golden_sheet'
    ).id('kubejs:copper_machine_to_steam_engine')

    event.smithing(
        'fluid:pipette',
        'create:brass_casing',
        'createages:brass_machine',
        'minecraft:copper_ingot'
    ).id('kubejs:brass_machine_to_pipette')

    // Stonecutting Recipes

    // It takes the output item and the input item (source block/item)
    const stonecut = (output, input) => {
         event.stonecutting(output, input)
    }

    stonecut('3x create:stockpile_switch', 'createages:brass_machine');
    stonecut('fluid:copper_tap', 'createages:copper_mechanism');
    stonecut('create_factory_logistics:jar_packager', 'createages:copper_mechanism');

})



// MAIN RECIPE EVENT
ServerEvents.recipes(event => {

    shapedRecipes.forEach(recipe => {
        robustShaped(event, recipe.output, recipe.input);
    });

    shapelessRecipes.forEach(recipe => {
        event.shapeless(recipe.output, recipe.input);
    });

});

// Smelting

ServerEvents.recipes(event => {
    // [Input Raw Block, Output Storage Block]
    const materials = [
        ['create:raw_zinc_block', 'create:zinc_block'],
        ['replication:raw_replica_block', 'replication:replica_block']
    ];

    materials.forEach(([input, output]) => {
        event.smelting(output, input).xp(6.3).cookingTime(1800);
        event.blasting(output, input).xp(6.3).cookingTime(900);
    });
});

ServerEvents.recipes(event => {
  const colors = [
    'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray',
    'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
  ]

  colors.forEach(color => {
    event.shaped(
      Item.of(`regions_unexplored:${color}_painted_planks`, 8), 
      [
        'PPP',
        'PDP',
        'PPP'
      ],
      {
        P: '#minecraft:planks',
        D: `#c:dyes/${color}`
      }
    )
  });

  colors.forEach(color => {
    event.shapeless(
      Item.of(`regions_unexplored:${color}_snowbelle`, 1), 
      [
        '#regions_unexplored:snowbelle',
        `#c:dyes/${color}`
      ]
    )
  })
})