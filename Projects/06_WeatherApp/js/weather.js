class Weather {
  constructor(cityId) {
    this.apiKey = 'f51c36d39ddacd32d7ddcfc863868d89';
    this.cityId = cityId;
  }

  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${this.cityId}&appId=${this.apiKey}&units=metric`);

    const responseData = await response.json();

    return responseData;
  }

  changeLocation(cityId) {
    this.cityId = cityId;
  }
}
