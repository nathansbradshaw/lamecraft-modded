RecipeViewerEvents.addEntries('item', event => {
    const hidden = [
        'create:shadow_steel_casing', 
        'create:refined_radiance_casing',
        'create:refined_radiance',
        'create:shadow_steel',
    ]
    
    hidden.forEach(hiddenId => {
        event.add(hiddenId)
    })
})