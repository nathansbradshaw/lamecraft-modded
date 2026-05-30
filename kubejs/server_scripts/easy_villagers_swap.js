ServerEvents.recipes(event => {
    event.replaceInput(
        {
            mod: 'easy_piglins',
            input: '#c:ingots/iron'
        },
        '#c:ingots/iron',
        '#c:ingots/brass'
    );

    event.replaceInput(
        {
            mod: 'easy_villagers',
            input: '#c:ingots/iron'
        },
        '#c:ingots/iron',
        '#c:ingots/brass'
    )
})