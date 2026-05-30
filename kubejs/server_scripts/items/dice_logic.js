// Author: ChosenArchitect
// CONFIG
const DICE_CONFIG = {
    distance: 25,
    cooldown: 20,
    critSuccessColor: "gold",
    critFailColor: "red",
    highRollColor: "green",
    lowRollColor: "gray",
    chatPrefix: "🎲 "
};

ItemEvents.rightClicked(event => {
    if (event.hand !== 'MAIN_HAND') return;
    
    const { player } = event;
    const item = player.mainHandItem;

    if (item.id.startsWith('rpgdice:d')) {
        
        let sidesString = item.id.replace('rpgdice:d', '');
        let sides = parseInt(sidesString);
        if (isNaN(sides)) return;

        let roll = Math.floor(Math.random() * sides) + 1;
        
        let canCrit = (sides === 20);
        let color = "white";
        let flavorText = "";
        let dist = DICE_CONFIG.distance;

        if (roll === sides && canCrit) {
            color = DICE_CONFIG.critSuccessColor;
            flavorText = " [CRITICAL SUCCESS!]";
            player.runCommandSilent(`playsound ui.toast.challenge_complete master @a[distance=..${dist}] ~ ~ ~ 1 1`);
            player.runCommandSilent(`summon firework_rocket ~ ~2 ~ {LifeTime:20,FireworksItem:{id:"firework_rocket",Count:1,components:{"minecraft:fireworks":{explosions:[{shape:"large_ball",colors:[11743532,14602026],fade_colors:[2437522],has_trail:true,has_twinkle:true}]}}}}`);

        } else if (roll === 1 && canCrit) {
            color = DICE_CONFIG.critFailColor;
            flavorText = " [CRITICAL MISS!]";
            player.runCommandSilent(`playsound entity.villager.no master @a[distance=..${dist}] ~ ~ ~ 1 1`);
            player.runCommandSilent(`particle minecraft:angry_villager ~ ~2 ~ 0.5 0.5 0.5 0 10`);

        } else if (roll > sides / 2) {
            color = DICE_CONFIG.highRollColor;
        } else {
            color = DICE_CONFIG.lowRollColor;
        }

        let playerName = player.name.getString();
        let tellraw = JSON.stringify({
            text: "",
            extra: [
                { text: `${DICE_CONFIG.chatPrefix}${playerName} rolled a d${sides}: `, color: "yellow" },
                { text: `${roll}`, color: color, bold: true },
                { text: `${flavorText}`, color: color, italic: true }
            ]
        });

        player.runCommandSilent(`tellraw @a[distance=..${dist}] ${tellraw}`);

        player.addItemCooldown(item, DICE_CONFIG.cooldown);
        if (player.swingArm) player.swingArm('MAIN_HAND');
    }
});