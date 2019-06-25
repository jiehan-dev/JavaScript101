const storage = new Storage();

const cityId = storage.getLocationData();

const weather = new Weather(cityId);
const ui = new UI();

document.addEventListener('DOMContentLoaded', e => {
  getWeather();

  loadModalCityList();
});

document.getElementById('w-change-btn').addEventListener('click', e => {
  const cityId = document.getElementById('cityId').value;

  weather.changeLocation(cityId);

  storage.setLocationData(cityId);

  getWeather();

  // Close modal, jQuery
  $('#locModal').modal('hide');
});

function loadModalCityList() {
  const cityId = document.getElementById('cityId');

  cityId.length = 0;

  let defaultOption = document.createElement('option');
  defaultOption.text = 'Choose City';

  cityId.add(defaultOption);
  cityId.selectedIndex = 0;

  getCityList().then(data => {
    data
      .filter(d => d.country === 'SG' || d.country === 'MY')
      .sort()
      .forEach(d => {
        const option = document.createElement('option');
        option.text = ` ${d.country} - ${d.name}`;
        option.value = d.id;
        cityId.add(option);
      });
  });
}

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

function getCityList() {
  return new Promise((resolve, reject) => {
    fetch('~/../data/city.list.json')
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}
