## Specs

**Describe** Place()
<br/>
**Test** An object with keys with empty values for city name and country name.
<br/>
**Expect** Place("Tokyo").toEquals( Place {cityName: "Tokyo", countryName: undefined})

**Describe** Place.prototype.getLocation()
<br/>
**Test** It returns a concatenation of this object's city and country names
<br/>
**Expect** tokyo.getLocation().toEqual("Tokyo, Japan");

**Describe** Place.prototype.getJournal
<br/>
**Test** It returns a concatenation of this objects date visited with notes. 
<br/>
**Expect** tokyo.prototype.getJournal.toEqual(Jan, 21 2021: Tokyo was amazing!)

**Describe** Place.prototype.showAllProperties()
<br/>
**Test** It returns an array of the output and/or property values from getLocation(), this.landmarks, and getJournal().
<br/>
**Expect** tokyo.showAllProperties().toEqual(...)

**Describe** function1()
<br/>
**Test** Test 1
<br/>
**Expect** Function1().to

**Describe** function1()
<br/>
**Test** Test 1
<br/>
**Expect** Function1().to

**Describe** function1()
<br/>
**Test** Test 1
<br/>
**Expect** Function1().to