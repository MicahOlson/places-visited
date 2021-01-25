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

Place.prototype.showAll = function() {
  return ["Location: " + this.getLocation(), "Landmarks - " + this.landmarks, "Journal: " + this.getJournal()];
}
