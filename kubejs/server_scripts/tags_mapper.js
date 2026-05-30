//------------------------------------------------------------------------------------------------------------------------------------------------
// PA2 Extras - Tags Mapper
//------------------------------------------------------------------------------------------------------------------------------------------------
// Author: RicTheCoder
// Contributors: ShiftTheDev, ChosenArchitect
//
// Simple script to map multiple tags to single/multi targets instead of the other way around.
//------------------------------------------------------------------------------------------------------------------------------------------------

// Fixes the inconsistence of fluids tags, such as, oil and xp in #minecraft:water
const fixFluidTags = true;

// Blocks mapped to their needed tags
// - 'block' is the block id, can be an array to apply to multiple
// - 'tags' are the tags to add, needs to be an array
const blockToTags = [
	{
		block: ["minecraft:reinforced_deepslate", "minecraft:trial_spawner", "minecraft:trial_vault", "minecraft:trial_vault_ominous"],
		tags: [
			"c:mineable/paxel", "minecraft:mineable/mattock", "minecraft:mineable/pickaxe"
		]
	}
	
	// QUICK NOTE: Trial spawners and vaults are allowed to drop in the 'drop_fixes.js' but if they are dropped they will never work again, 
	// the purpose is to be cosmetic, as they are nice for some builds. The tags help getting the right tools to mine them.
];

// Items mapped to their needed tags
// - 'item' is the item id, can be an array to apply to multiple, tags are supported
// - 'tags' are the tags to add, needs to be an array
// - 'deep' copies item by item from the tag ('item') to the tags in 'tags', in that case 'item' should not have the prefixing "#"
const itemToTags = [
    {
        item: ["minecraft:stone_shovel"],
        tags: ["forge:tools", "minecraft:tools"]
    },
	{
        item: ["minecraft:raw_iron"],
        tags: ["justdirethings:goo_revive_tier_1"]
    },
	{
        item: ["create:raw_zinc"],
        tags: ["justdirethings:goo_revive_tier_1"]
    },
	{
        item: ["minecraft:copper_block"],
        tags: ["justdirethings:goo_revive_tier_2"]
    },
	{
        item: ["createcasing:chorium_ingot"],
        tags: ["justdirethings:goo_revive_tier_3"]
    },
	{
        item: ["create:shadow_steel"],
        tags: ["justdirethings:goo_revive_tier_4"]
    },
	{
        item: ["createcompounds:shadow_steel"],
        tags: ["justdirethings:goo_revive_tier_4"]
    }
];

// Remaps blocks with a tag to use another tag instead
// - Key is the tag to replace, value the tag to replace with
const replaceBlockTags = {};

// Removes items from a tag
const removeItemsFromTag = [
    {
        tag: "minecraft:redstone_ores",
        items: ["regions_unexplored:raw_redstone_block"]
    },
    {
        tag: "c:ores",
        items: ["regions_unexplored:raw_redstone_block"]
    },
    {
        tag: "c:ores/redstone",
        items: ["regions_unexplored:raw_redstone_block"]
    },
	{
        tag: "justdirethings:goo_revive_tier_1",
        items: ["minecraft:rotten_flesh", "minecraft:sugar"]
    },
	{
        tag: "justdirethings:goo_revive_tier_2",
        items: ["minecraft:nether_wart", "minecraft:blaze_powder"]
    },
	{
        tag: "justdirethings:goo_revive_tier_3",
        items: ["minecraft:chorus_fruit", "minecraft:ender_pearl"]
    },
	{
        tag: "justdirethings:goo_revive_tier_4",
        items: ["minecraft:sculk", "minecraft:sculk_catalyst"]
    },
	{
        tag: "c:drinks",
        items: ["supplementaries:lumisene_bottle"]
    },
	{
        tag: "c:drinks/lumisene",
        items: ["supplementaries:lumisene_bottle"]
    }

]

//---[CODE]---------------------------------------------------------------------------------------------------------------------------------------

// Applies the tags provided above
ServerEvents.tags("block", event => {
	// Adds tags to blocks
	blockToTags.forEach(entry => {
		entry.tags.forEach(tag => {
			event.add(tag, entry.block);
		});
	});
	
	// Replaces tags in blocks
	Object.keys(replaceBlockTags).forEach(tag => {
		event.get(tag).getObjectIds().forEach(item => {
			event.add(replaceBlockTags[tag], item);
		});
		
		event.removeAll(tag);
	});

});

ServerEvents.tags("item", event => {
	// Adds tags to items
	itemToTags.forEach(entry => {
		entry.tags.forEach(tag => {
            if (entry.deep === undefined || entry.deep === false)
			    event.add(tag, entry.item);
            else
            {
                event.get(entry.item).getObjectIds().forEach(item => {
                    event.add(tag, item);
                });
            }
		});
	});

    // Removes items from tags
    removeItemsFromTag.forEach(entry => {
        event.remove(entry.tag, entry.items);
    });
});

ServerEvents.tags("fluid", event => {
	// Applies fluid tag fixes
	if (fixFluidTags)
	{
		event.remove("minecraft:water", /(?!:water)/);
		event.add("minecraft:water", ["minecraft:water", "minecraft:flowing_water"]);
	}
});

ServerEvents.tags('item', event => {
    event.add('kubejs:valid_lumisene_planks', /.+:.*planks/)
    event.remove('kubejs:valid_lumisene_planks', 'ars_nouveau:archwood_planks')

})