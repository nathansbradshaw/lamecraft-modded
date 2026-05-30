StartupEvents.registry('item', event => {
    const diceTypes = [4, 6, 8, 10, 12, 20, 100];

    diceTypes.forEach(sides => {
        event.create(`rpgdice:d${sides}`)
             .displayName(`D${sides} Die`)
             .unstackable()
             .texture(`rpgdice:item/d${sides}`)
    });
});