let loader = true;
window.onload = function () {
  const loaderElement = document.getElementById("loader");
  const mapElement = document.getElementById("map");
  const geoElement = document.getElementById("geocoder");
  if (mapElement) {
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    console.log(mapboxgl.accessToken);
  } else {
    mapboxgl.accessToken = geoElement.dataset.mapboxApiKey;
    console.log(mapboxgl.accessToken);
  }

  // code map for landing page (begin here)
  if (!mapElement && geoElement) {
    mapboxgl.accessToken = geoElement.dataset.mapboxApiKey;
    const results = document.getElementById("result");
    const geocoder = initGeocoder(12); //value of zoom as argument
    geocoder.addTo("#geocoder");
    // Add geocoder result to container.
    geocoder.on("result", (e) => {
      createForm(e, results);
    });
    // Clear results container when search is cleared.
    geocoder.on("clear", () => {
      results.innerText = "";
    });
    // code map for landing page (end here)
  } else if (mapElement && geoElement) {
    // code map for index coworking (begin here)
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    addLoader(loaderElement, mapElement, geoElement);
    console.log(document.getElementById("map").attributes);
    if (document.getElementById("map").attributes[4] != "") {
      //if information from geocoder
      var research = document
        .getElementById("map")
        .attributes[4].value.replace("[", "")
        .replace("]", "")
        .split(", ")
        .map(Number);
    }
    var co_id = document.getElementById("map").attributes[2].value;
    co_id = co_id.replace("[", "").replace("]", "").split(", ").map(Number);
    var coordinates = document.getElementById("map").attributes[1].value;
    if (coordinates) {
      var box_focus = document.getElementById("map").attributes[3].value;
      coordinates = coordinates.replace("[[", "").replace("]]", "");
      coordinates = coordinates
        .split("], [")
        .map((c) => c.split(", "))
        .map((c) => c.map(Number));
      var latitudes = coordinates
        .map((c) => c[0])
        .filter(
          (lat) => lat !== 0 && lat !== undefined && typeof lat === Number
        );
      var longitudes = coordinates
        .map((c) => c[1])
        .filter(
          (lon) => lon !== 0 && lon !== undefined && typeof lon === Number
        );
      if (research[0] !== 0) {
        var box_upper_lat = research[0] + 0.05;
        var box_bottom_lat = research[0] - 0.05;
        var box_right_lon = research[1] + 0.05;
        var box_left_lon = research[1] - 0.05;
      } else if (box_focus === "France") {
        var box_upper_lat = 6;
        var box_bottom_lat = -1;
        var box_right_lon = 52;
        var box_left_lon = 42;
      } else {
        var box_upper_lat = Math.max(...latitudes) + 0.05;
        var box_bottom_lat = Math.min(...latitudes) - 0.05;
        var box_right_lon = Math.max(...longitudes) + 0.05;
        var box_left_lon = Math.min(...longitudes) - 0.05;
      }
      const map = new mapboxgl.Map({
        container: "map",
        // Replace YOUR_STYLE_URL with your style URL.
        style: "mapbox://styles/amelieloulergue/ckt8hlgfo20tr19v18ez6bpe3",
        center: [coordinates[0][0], coordinates[0][1]],
        zoom: 1,
      });
      map.addControl(new mapboxgl.NavigationControl()); //zoom +/- navigation
      // Set marker options.
      var group = [];
      for (i = 0; i < coordinates.length; i++) {
        const newChildforPopup = document.getElementById(
          "cwtoshow-" + co_id[i]
        );

        const popup = new mapboxgl.Popup({ closeOnClick: true })
          .setLngLat([coordinates[i][0], coordinates[i][1]])
          .setHTML(newChildforPopup.innerHTML);
        const marker = new mapboxgl.Marker({
          color: "#92DACA",
          draggable: false,
        })
          .setLngLat([coordinates[i][0], coordinates[i][1]])
          .setPopup(popup)
          .addTo(map);
        group.push(marker);
      }

      map.fitBounds([
        [box_upper_lat, box_right_lon], // southwestern corner of the bounds
        [box_bottom_lat, box_left_lon], // northeastern corner of the bounds
      ]);
      const geocoder2 = initGeocoder(12);
      geocoder2.addTo("#geocoder");

      // Get the geocoder results container.
      const results = document.getElementById("result");
      // Add geocoder result to container.
      geocoder2.on("result", (e) => {
        createForm(e, results);
      });

      // Clear results container when search is cleared.
      geocoder2.on("clear", () => {
        results.innerText = "";
      });
      new mapboxgl.Marker({
        color: "#008080",
        draggable: false,
      })
        .setLngLat(research)
        .addTo(map);
      // code map for index coworking (end here)
    }
  } else {
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    // code map for show coworking (begin here)
    var co_id = document.getElementById("map").attributes[2].value;
    co_id = co_id.replace("[", "").replace("]", "").split(", ").map(Number);
    var coordinates = document.getElementById("map").attributes[1].value;
    var box_focus = document.getElementById("map").attributes[3].value;
    if (coordinates) {
      coordinates = coordinates.replace("[[", "").replace("]]", "");
      coordinates = coordinates
        .split("], [")
        .map((c) => c.split(", "))
        .map((c) => c.map(Number));
      var latitudes = coordinates
        .map((c) => c[0])
        .filter(
          (lat) => lat !== 0 && lat !== undefined && typeof lat === Number
        );
      var longitudes = coordinates
        .map((c) => c[1])
        .filter(
          (lon) => lon !== 0 && lon !== undefined && typeof lon === Number
        );
      const map = new mapboxgl.Map({
        container: "map",
        // Replace YOUR_STYLE_URL with your style URL.
        style: "mapbox://styles/amelieloulergue/ckt8hlgfo20tr19v18ez6bpe3",
        center: [coordinates[0][0], coordinates[0][1]],
        zoom: 16,
      });
      map.addControl(new mapboxgl.NavigationControl()); //zoom +/- navigation
      // Set marker options.
      var group = [];
      for (i = 0; i < coordinates.length; i++) {
        const marker = new mapboxgl.Marker({
          color: "#92DACA",
          draggable: false,
        })
          .setLngLat([coordinates[i][0], coordinates[i][1]])
          .addTo(map);
        group.push(marker);
      }
      map.fitBounds([
        [box_upper_lat, box_right_lon], // southwestern corner of the bounds
        [box_bottom_lat, box_left_lon], // northeastern corner of the bounds
      ]);
    }
  }
  // code map for show coworking (end here)
};

function createForm(e, results) {
  let divFormu = document.createElement("div");
  let formuTest = document.createElement("form");
  let inputTest = document.createElement("input");
  let inputGeo = document.createElement("input");
  divFormu.appendChild(formuTest);
  formuTest.action = "/coworkings";
  formuTest.method = "GET";
  formuTest.id = "jsform";
  inputTest.name = "authenticity_token";
  inputTest.type = "hidden";
  inputTest.value = "";
  inputGeo.name = "geocode_information";
  inputGeo.type = "hidden";
  inputGeo.value = JSON.stringify(e.result, null, 2);
  formuTest.appendChild(inputTest);
  formuTest.appendChild(inputGeo);
  results.innerHTML += divFormu.innerHTML;
  document.getElementById("jsform").submit();
}

function initGeocoder(zoom) {
  return new MapboxGeocoder({
    // Initialize the geocoder
    accessToken: mapboxgl.accessToken, // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    placeholder: "Rechercher un coworking", // Placeholder text for the search bar
    zoom: zoom,
    types: "country,region,place,postcode,locality,address",
    countries: "fr",
  });
}
function addLoader(loaderElement, mapElement, geoElement) {
  mapElement.style.visibility = "hidden";
  geoElement.style.visibility = "hidden";

  setTimeout(() => {
    loaderElement.remove();
    mapElement.style.visibility = "visible";
    geoElement.style.visibility = "visible";
  }, 2000);
}
