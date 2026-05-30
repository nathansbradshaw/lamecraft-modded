ServerEvents.recipes(event => {
    event.shaped('rpgdice:d4', [
        ' A ',
        'A A'
    ], {
        A: 'minecraft:amethyst_shard'
    })

    event.shaped('rpgdice:d6', [
        'AA',
        'AA'
    ], {
        A: 'minecraft:amethyst_shard'
    })

    event.shaped('rpgdice:d8', [
        ' A ',
        'AAA',
        ' A '
    ], {
        A: 'minecraft:amethyst_shard'
    })

    event.shaped('rpgdice:d10', [
        ' A ',
        'AAA',
        'A A'
    ], {
        A: 'minecraft:amethyst_shard'
    })

    event.shaped('rpgdice:d12', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:amethyst_shard',
        B: 'minecraft:amethyst_block'
    })

    event.shaped('rpgdice:d20', [
        ' B ',
        'B B'
    ], {
        B: 'minecraft:amethyst_block'
    })

    event.shaped('rpgdice:d100', [
        'AAA',
        'ADA',
        'AAA'
    ], {
        A: 'minecraft:amethyst_shard',
        D: 'rpgdice:d20'
    })
})