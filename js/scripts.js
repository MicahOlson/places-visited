// Business Logic for PlacesVisited
function PlacesVisited() {
  this.places = {};
  this.currentId = 0;
}

PlacesVisited.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PlacesVisited.prototype.addPlace = function(place) {
  place.placeId = this.assignId();
  this.places[place.placeId] = place;
}

PlacesVisited.prototype.deletePlace = function(placeId) {
  if (this.places[placeId] === undefined) {
    console.log("Error: this place is undefined");
  }
  delete this.places[placeId];
  console.log("This record has been deleted.");
}

// Business Logic for Places
function Place(cityName, countryName, landmarks, timeOfVisit, notes) {
  this.cityName = cityName;
  this.countryName = countryName;
  this.landmarks = landmarks;
  this.timeOfVisit = timeOfVisit;
  this.notes = notes;
}

Place.prototype.getLocation = function() {
  return this.cityName + ", " + this.countryName;
}

Place.prototype.getJournal = function() {
  return this.timeOfVisit + ": " + this.notes;
}

Place.prototype.showAllProperties = function() {
  return ["Location: " + this.getLocation(), "Landmarks - " + this.landmarks, "Journal: " + this.getJournal()];
}
