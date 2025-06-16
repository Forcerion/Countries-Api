const $resultsCountrysInfos = document.querySelector(".results");

let countrys;

fetch(
  "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital"
)
  .then(function (res) {
    return res.json();
  })

  .then(function (data) {
    console.log(data);

    console.log(data[0].name.common);
    console.log(data[0].population);
    console.log(data[0].region);
    console.log(data[0].capital);
    console.log(data[0].flags.svg);

    countrys = data;
    console.log(countrys);

    countrys.forEach(function (country) {
      const $countryCard = document.createElement("div");
      $countryCard.classList.add("country-card");

      const $countryFlag = document.createElement("img");
      $countryFlag.src = country.flags.svg;
      $countryFlag.classList.add("country-flag");

      const $countryDetails = document.createElement("div");
      $countryDetails.classList.add("country-details");

      const $countryInfos = document.createElement("ul");
      $countryInfos.classList.add("country-infos");

      const $countryName = document.createElement("li");
      $countryName.classList.add("country-name");
      $countryName.textContent = country.name.common;

      const $countryPopulation = document.createElement("li");
      $countryPopulation.classList.add("country-population");
      $countryPopulation.textContent = "Population: " + country.population.toLocaleString();


      const $countryRegion = document.createElement("li");
      $countryRegion.classList.add("country-region");
      $countryRegion.textContent = "Region: " + country.region;

      const $countryCapital = document.createElement("li");
      $countryCapital.classList.add("country-capital");
      $countryCapital.textContent = country.capital;
      $countryCapital.textContent = "Capital: " + country.capital;

      $countryCard.appendChild($countryFlag);
      $countryCard.appendChild($countryDetails);

      $countryDetails.appendChild($countryInfos);
      
      $countryInfos.appendChild($countryName);
      $countryInfos.appendChild($countryPopulation);
      $countryInfos.appendChild($countryRegion);
      $countryInfos.appendChild($countryCapital);

      $resultsCountrysInfos.appendChild($countryCard);
    });
  })

  .catch(function (err) {
    console.log("Une erreur est survenue", err);
  });




