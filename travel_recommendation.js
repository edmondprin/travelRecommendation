let keyword = '';

fetch('travel_recommendation_api.json')
  .then(response => response.json())
  .then(data => {
    const jsonReport = JSON.stringify(data, null, 2);
    console.log(`Data from the API: ${jsonReport}`);
  })
  .catch(error => {
    console.log(`An error occured: ${error}`);
  });


  
  document.getElementById("btnSearch").addEventListener('click', searchPlaces);


  function searchPlaces() {
    // let keyword;
    const input = document.getElementById("placeSearch").value.toLowerCase().trim();
    
    if (input === "beach" || input === "beaches") {
      keyword = "beaches";
    } else if (input === "temple" || input === "temples") {
      keyword = "temples";
    } else if (input === "country" || input === "countries") {
      keyword = "countries";
    } else {
      console.log("please enter valid keyword");
    }
    // console.log(input);
    console.log(`so you want to go to the ${keyword}`);
    showResults();
  }

  function showResults() {
    console.log(keyword);
    const recoList = [];
    const results = document.getElementById('yourReco');
    yourReco.innerHTML = "";

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        if (keyword === "countries") {
          const arrayCountries = data.countries;
          console.log(arrayCountries);
          arrayCountries.forEach((element, index, array) => {
            const name = element.x;
            console.log(name);
          })
          results.innerHTML += `<h2>${name}</h2>`;
        } else {
          results.innerHTML = "Destination not found.";
        }
      })
      .catch(error => {
        console.error('Error: ', error);
        results.innerHTML = 'An error occured while fetching data.';
      })
    }
