class Storage {
  constructor() {
    this.defaultCityId = '1880252';
  }

  getLocationData() {
    if (localStorage.getItem('city-id') === null) {
      return this.defaultCityId;
    } else {
      return localStorage.getItem('city-id');
    }
  }

  setLocationData(cityId) {
    localStorage.setItem('city-id', cityId);
  }
}
