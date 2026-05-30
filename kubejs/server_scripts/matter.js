ServerEvents.recipes(event => {

  event.custom(Replication.matterValueForItem('create:zinc_nugget', {
    metallic: 1,
  }));
  event.custom(Replication.matterValueForItem('createaddition:electrum_ingot', {
    metallic: 18,
    precious: 18,
  }));

});