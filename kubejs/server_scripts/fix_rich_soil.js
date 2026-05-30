//REMOVED
//BlockEvents.randomTick('farmersdelight:rich_soil', event => {
//    // Get the block directly above the Rich Soil
//    let blockAbove = event.level.getBlock(event.pos.above())
//    
//    // Check if the plant above is from Regions Unexplored
//    if (blockAbove.id.startsWith('regions_unexplored:')) {
//        // Cancel the tick so the Rich Soil doesn't try to grow the RU plant
//        event.cancel()
//    }
//})