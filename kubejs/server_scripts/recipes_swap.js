ServerEvents.recipes(event => {
    event.replaceInput(
        {
            mod: 'ars_nouveau',
            input: '#c:ingots/gold'
        },
        '#c:ingots/gold',
        '#c:ingots/brass'
    );

    event.replaceInput(
        {
            mod: 'ars_nouveau',
            input: '#c:nuggets/gold'
        },
        '#c:nuggets/gold',
        '#c:nuggets/brass'
    );

    event.replaceInput(
        {
            mod: 'ars_nouveau',
            input: '#c:storage_blocks/gold'
        },
        '#c:storage_blocks/gold',
        'create:brass_block'
    );

    event.replaceInput(
        {
            mod: 'ars_technica',
            input: '#c:ingots/gold'
        },
        '#c:ingots/gold',
        '#c:ingots/brass'
    );

    event.replaceInput(
        {
            mod: 'ars_technica',
            input: '#c:storage_blocks/gold'
        },
        '#c:storage_blocks/gold',
        'create:brass_block'
    );

    event.replaceInput(
        { mod: 'buildinggadgets2' },
        'minecraft:iron_ingot',
        'create:brass_ingot'
    );

    event.replaceInput(
        { mod: 'refinedstorage' },
        'minecraft:redstone',
        'create:polished_rose_quartz'
    );

    event.replaceInput(
        { mod: 'extrastorage' },
        'minecraft:redstone',
        'create:polished_rose_quartz'
    );

    event.replaceInput(
        { mod: 'simplemagnets' },
        'minecraft:iron_ingot',
        'create:andesite_alloy'
    );

    event.replaceInput(
        { mod: 'simplemagnets' },
        'minecraft:gold_ingot',
        'create:brass_ingot'
    );

    event.replaceInput(
        { mod: 'createages' },
        'createages:andesite_template',
        'create:andesite_casing'
    );

    event.replaceInput(
        { mod: 'createages' },
        'createages:copper_template',
        'create:copper_casing'
    );

    event.replaceInput(
        { mod: 'createages' },
        'createages:brass_template',
        'create:brass_casing'
    );

});

ServerEvents.recipes(event => {
    const colors = [
        'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray',
        'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
    ];

    colors.forEach(color => {
        event.replaceInput(
            { mod: 'comforts' },
            `minecraft:${color}_wool`,
            `handcrafted:${color}_sheet`
        );
    });
});
