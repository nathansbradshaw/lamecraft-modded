ItemEvents.modifyTooltips(event => {
    event.add(
        [
            /ars_nouveau:glyph/,
            /ars_technica:glyph/,
            /ars_additions:glyph/
        ],
        [
        '§dNOT Craftable Directly!§r',
        '§dCraft or Loot §r§b§l"Codex Entry"§r'
        ]
    );

    event.add(
        [
            'ars_additions:codex_entry',
            'ars_additions:lost_codex_entry',
            'ars_additions:ancient_codex_entry'
        ],
        [
        '§dRIGHT CLICK TO LEARN GLYPHS§r',
        '§dTeaches you a new Glyph for Spellbook§r'

        ]
    );

    event.add(
        [
            'refinedstorage:wireless_grid', 
            'refinedstorage:wireless_autocrafting_monitor', 
            'refinedstorage_quartz_arsenal:wireless_crafting_grid', 
            'buildinggadgets2:gadget_building', 
            'buildinggadgets2:gadget_exchanging', 
            'buildinggadgets2:gadget_copy_paste', 
            'buildinggadgets2:gadget_cut_paste', 
            'buildinggadgets2:gadget_destruction'],

            [
            '§dCharge With §r§b§lTesla Coil§r',
            '§dor §r§b§lBattery Upgraded Backpack§r'
            ]
    );

    event.add(

            'createaddition:alternator',

            [
            '§dStress to Energy§r',
            '§b256 RPM = 360 FE/t Generated§r',
            '§bMax Stress Required = 16384 SU'
            ]
    );

    event.add(

            'createaddition:electric_motor',

            [
            '§dEnergy to Stress§r',
            '§b480 FE/t = 256 RPM§r',
            '§bMax Stress Generated = 16384 SU'
            ]
    );

    event.add(

            'ars_nouveau:archwood_planks',

            '§dFilled With Lumisene§r'

    );

    event.add(

            'createaddition:tesla_coil',

            '§dCharges Things That Need Charged§r'

    );

    event.add(

            'upsizing:resizer',
            [
            '§dShift Right Click To See Size§r',
            '§dLook Up And Right Click To Grow§r',
            '§dLook Down And Right Click To Shrink§r',
            '§dUses Backtank To Change Size§r'
            ]
    );

    event.add(

        'ars_technica:source_motor',
        [
        '§dAjust Source To Stress§r',
        '§dBy Clicking With A Stressometer§r'
        ]
    );

    event.add(

        'createcobblestone:mechanical_generator',
        [
        '§dOnly Accepts Cobblestone§r',
        '§dStress = Cobblestone Generator§r'
        ]
    );

    event.add(
        [
            'createcasing:brass_mixer',
            'createcasing:copper_mixer',
            'createcasing:railway_mixer',
            'createcasing:creative_mixer',
            'createcasing:industrial_iron_mixer',
            'createcasing:weathered_iron_mixer',
            'createcasing:refined_radiance_mixer',
            'createcasing:shadow_steel_mixer',
            'createcasing:brass_chain_conveyor',
            'createcasing:copper_chain_conveyor',
            'createcasing:railway_chain_conveyor',
            'createcasing:creative_chain_conveyor',
            'createcasing:industrial_iron_chain_conveyor',
            'createcasing:weathered_iron_chain_conveyor',
            'createcasing:refined_radiance_chain_conveyor',
            'createcasing:shadow_steel_chain_conveyor',
            'createcasing:brass_press',
            'createcasing:copper_press',
            'createcasing:railway_press',
            'createcasing:creative_press',
            'createcasing:industrial_iron_press',
            'createcasing:weathered_iron_press',
            'createcasing:refined_radiance_press',
            'createcasing:shadow_steel_press'
        ],
        [
        '§dRIGHT CLICK With Casings In World§r',
        '§dWorks Just Like Encased Belts§r'
        ]
    );

    event.add(

        'relics:infinity_ham',
        [
        '§dWhen Regenerating In Inventory§r',
        '§dIt Can Cause The Stock Ticker GUI To Crash§r'
        ]
    );

    event.add(

        'sophisticatedbackpacks:feeding_upgrade',
        [
        '§dCan be Looted from Chests§r'
        ]
    );

    event.add(

        'createcompounds:refined_radiance',
        [
        '§dONLY FOR RECIPE VIEWING§r',
        '§dDont Use In Filters§r'
        ]
    );

    event.add(

        'createcompounds:shadow_steel',
        [
        '§dONLY FOR RECIPE VIEWING§r',
        '§dDont Use In Filters§r'
        ]
    );

});