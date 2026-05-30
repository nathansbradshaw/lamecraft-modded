//------------------------------------------------------------------------------------------------------------------------------------------------
// PA2 Extras - Remove Recipes
//------------------------------------------------------------------------------------------------------------------------------------------------
// Author: RicTheCoder
// Contributors: ShiftTheDev, ChosenArchitect
//
// Removes recipes based on different factors, it also fixes problems with automatic recipe generation from Create by changing the IDs of some
// recipes and suffixing them with '_manual_only'
//------------------------------------------------------------------------------------------------------------------------------------------------

// Remove by Output
// - Add the item id of the output item of the recipe and all recipes with that output will be removed
const byOutput = [
	'createdeco:zinc_sheet',
	'create_aquatic_ambitions:prismarine_alloy',
	'refinedstorage:processor_binding',
	'refinedstorage:quartz_enriched_iron',
	'refinedstorage:quartz_enriched_copper',
	'refinedstorage:raw_basic_processor', 
	'refinedstorage:basic_processor', 
	'refinedstorage:raw_improved_processor',
	'refinedstorage:improved_processor',
	'refinedstorage:raw_advanced_processor',
	'refinedstorage:advanced_processor',
	'refinedstorage:construction_core', 
	'refinedstorage:destruction_core',
	'refinedstorage:machine_casing',
	'/ars_nouveau:glyph_.*/',
	'sophisticatedbackpacks:feeding_upgrade',
	'sophisticatedbackpacks:advanced_feeding_upgrade',
	'immersive_aircraft:boiler',
	'immersive_aircraft:engine',
	'immersive_aircraft:eco_engine',
	'immersive_aircraft:nether_engine',
	'immersive_aircraft:sail',
	'immersive_aircraft:propeller',
	'immersive_aircraft:enhanced_propeller',
	'immersive_aircraft:industrial_gears',
	'immersive_aircraft:sturdy_pipes',
	'immersive_aircraft:improved_landing_gear',
	'immersive_aircraft:hull',
	'immersive_aircraft:gyrodyne',
	'immersive_aircraft:hull_reinforcement',
	'immersive_aircraft:warship',
	'immersive_aircraft:biplane',
	'immersive_aircraft:bamboo_hopper',
	"supplementaries:lumisene_bucket",
	'ars_nouveau:blue_archwood_sapling',
	'ars_nouveau:red_archwood_sapling',
	'ars_nouveau:purple_archwood_sapling',
	'ars_nouveau:green_archwood_sapling',
	'create_mechanical_spawner:mechanical_spawner',
	'create_mechanical_spawner:loot_collector',
	'starbunclemania:fluid_jar',
	'starbunclemania:fluid_sourcelink',
	'justdirethings:pocket_generator',
	'justdirethings:generatort1',
	'modularrouters:modular_router',
	'modularrouters:blank_module',
	'modularrouters:blank_upgrade',
	'easy_villagers:auto_trader',
	'easy_villagers:iron_farm',
	'extrastorage:raw_neural_processor',
	'extrastorage:neural_processor',
	'rarcompat:mimi_dust',
	'wstweaks:immolation_blade',
	'ars_creo:starbuncle_wheel',
	'ars_technica:source_motor',
	'rsinfinitybooster:infinity_card',
	'rsinfinitybooster:dimension_card',
	'createages:zinc_hand',
	'supplementaries:fire_pit',
	'tempad:time_steel',
	'createages:computing_mechanism',
	'createages:wooden_mechanism',
	'createages:andesite_template',
	'createages:brass_template',
	'createages:copper_template',
	'createages:zinc_machine',
	'fluxnetworks:flux_core',
	'fluxnetworks:flux_dust',
	'/.*_snowbelle/',
	'create_connected:item_silo',
]

// Remove by ID
// - Add the recipe id for the recipe to remove
const byId = [
	"justdirethings:gooblock_tier1",
	"justdirethings:gooblock_tier2",
	"justdirethings:gooblock_tier3",
	"justdirethings:gooblock_tier4",
	"create:haunting/lapis_recycling",
	"create:crushing/tuff",
	"createaddition:crushing/tuff_recycling",
	"create:crushing/tuff_recycling",
	"create_mechanical_spawner:mixing/spawn_fluid_random_legacy",
	"create_mechanical_spawner:spawn_fluid_enchantment_industry_experience",
	"ars_nouveau:sourcestone",
	"createages:copper_age/crafting/kinetics/steam_engine",
	"transfer_labels:itemstack_extract_transfer_label",
	"transfer_labels:itemstack_insert_transfer_label",
	"transfer_labels:fluidstack_extract_transfer_label",
	"transfer_labels:fluidstack_insert_transfer_label",
	"createages:copper_age/smithing/fluid_tank",
	"createcasing:crafting/mixer/brass",
	"createcasing:crafting/mixer/copper",
	"createcasing:crafting/mixer/railway",
	"createcasing:crafting/mixer/creative",
	"createcasing:crafting/mixer/industrial_iron",
	"createcasing:crafting/mixer/weathered_iron",
	"createcasing:crafting/mixer/refined_radiance",
	"createcasing:crafting/mixer/shadow_steel",
	"createcasing:crafting/press/brass",
	"createcasing:crafting/press/copper",
	"createcasing:crafting/press/railway",
	"createcasing:crafting/press/creative",
	"createcasing:crafting/press/industrial_iron",
	"createcasing:crafting/press/weathered_iron",
	"createcasing:crafting/press/refined_radiance",
	"createcasing:crafting/press/shadow_steel",
	"createcasing:crafting/chain_conveyors/brass",
	"createcasing:crafting/chain_conveyors/copper",
	"createcasing:crafting/chain_conveyors/railway",
	"createcasing:crafting/chain_conveyors/creative",
	"createcasing:crafting/chain_conveyors/industrial_iron",
	"createcasing:crafting/chain_conveyors/weathered_iron",
	"createcasing:crafting/chain_conveyors/refined_radiance",
	"createcasing:crafting/chain_conveyors/shadow_steel",
	"minecraft:lodestone",
	"ars_nouveau:novice_spell_book",
	"ars_nouveau:novice_spellbook_alt",
	"createages:copper_age/crafting/kinetics/copper_machine",
	"create:crafting/tree_fertilizer",
	"regions_unexplored:white_painted_planks",
	"regions_unexplored:orange_painted_planks",
	"regions_unexplored:magenta_painted_planks",
	"regions_unexplored:light_blue_painted_planks",
	"regions_unexplored:yellow_painted_planks",
	"regions_unexplored:lime_painted_planks",
	"regions_unexplored:pink_painted_planks",
	"regions_unexplored:gray_painted_planks",
	"regions_unexplored:light_gray_painted_planks",
	"regions_unexplored:cyan_painted_planks",
	"regions_unexplored:purple_painted_planks",
	"regions_unexplored:blue_painted_planks",
	"regions_unexplored:brown_painted_planks",
	"regions_unexplored:green_painted_planks",
	"regions_unexplored:red_painted_planks",
	"regions_unexplored:black_painted_planks",
	"sophisticatedstorage:chest",
	"sophisticatedstorage:barrel",
	"fluid:copper_tap",
	"fluid:mechanical_pipette",
	"create_factory_logistics:sequenced_assembly/fluid_mechanism",
	"create_factory_logistics:jar_packager",
	"create_factory_logistics:factory_fluid_gauge"
]

// Advance Remove
// - Provide multiple options to target the removal
// - Removes the base version and adds it as '_manual_only' in order to fix Create issues (set 'manual' property to true)
// - To use regex when targeting ids (for dynamic recipes), use '$' in the start of the id
const advRemoval = [
	// This is a fix for a crash when opening the 'Automated Shaped Crafting' for the Ender Storage recipes
	{ output: "enderstorage:ender_pouch", manual: true },
	{ output: "enderstorage:ender_chest", manual: true },
	{ output: "enderstorage:ender_tank", manual: true }
	
	// Fixes the Alkahestry Tome with Create
	// { input: "reliquary:alkahestry_tome", manual: true }
]

//---[CODE]---------------------------------------------------------------------------------------------------------------------------------------

// The remove event
ServerEvents.recipes(event => {
	// Run the normal removes
    byOutput.forEach(item => event.remove({ output: item }));
    byId.forEach(item => event.remove({ id: item }));
	
	// Run the advance removes
	advRemoval.forEach(condition => {
		let manual = condition.manual;
		let test = condition.test;
		
		if (manual)
		{
			delete(condition.manual);
			
			let recipes = event.findRecipes(condition);
			recipes.forEach(recipe => {
				if (recipe.getId().endsWith("_manual_only"))
					return;
				
				recipe.id(recipe.getId() + "_manual_only");
			});
		}
		else		
			event.remove(condition);
	});
});

ServerEvents.recipes(event => {

  const generalEquipment = /createcasing:.*(deployer|press|mixer|chain_conveyor|portable_storage_interface|encased_fan)/

  const mechanicalTools = /createcasing:.*mechanical_(plough|harvester|roller|saw|drill)/

  event.remove({ output: generalEquipment })
  event.remove({ output: mechanicalTools })

})