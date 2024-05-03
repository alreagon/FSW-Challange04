// Class App
class App {
  constructor() {
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }

  // Async Await Button
  async init() {
    await this.load();

    // Register click listener
    this.loadButton.onclick = this.run;

    // Enable load button if driver, date, and time inputs are not empty
    const driverInput = document.getElementById("driver");
    const dateInput = document.getElementById("date");
    const timeInput = document.getElementById("time");

    // Check if all inputs have values
    const enableLoadButton = () => {
      if (
        driverInput.value.trim() !== "" &&
        dateInput.value.trim() !== "" &&
        timeInput.value.trim() !== ""
      ) {
        this.loadButton.removeAttribute("disabled");
      } else {
        this.loadButton.setAttribute("disabled", "true");
      }
    };

    // Add event listeners to inputs
    driverInput.addEventListener("input", enableLoadButton);
    dateInput.addEventListener("input", enableLoadButton);
    timeInput.addEventListener("input", enableLoadButton);
  }

  // Function Filter car
  run = () => {
    this.clear();
    const data = this.filterCar();

    // If data not found
    if (data.length == 0 || data == undefined) {
      const node = document.createElement("div");
      node.innerHTML = `<div class="alert alert-danger mt-2" role="alert">Data tidak ditemukan</div>`;
      this.carContainerElement.appendChild(node);
    } else {
      // Data found
      data.forEach((car) => {
        const node = document.createElement("div");
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      });
    }
  };

  // method filterCar
  filterCar() {
    const driver = document.getElementById("driver").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const dateTime = new Date(`${date} ${time}`);
    const passanger = document.getElementById("passanger").value;

    if (driver === undefined || driver === "") {
      alert("Please select a driver");
      return;
    } else if (passanger == "" && driver.toString() == "true") {
      return Car.list.filter(
        (car) => car.available === true && car.availableAt <= dateTime
      );
    } else if (passanger != "" && driver.toString() == "true") {
      return Car.list.filter(
        (car) =>
          car.available === true &&
          car.capacity >= passanger &&
          car.availableAt <= dateTime
      );
    } else if (passanger == "" && driver.toString() == "false") {
      return Car.list.filter(
        (car) => car.available === false && car.availableAt <= dateTime
      );
    } else if (passanger != "" && driver.toString() == "false") {
      return Car.list.filter(
        (car) =>
          car.available === false &&
          car.capacity >= passanger &&
          car.availableAt <= dateTime
      );
    } else {
      alert("Data is not available");
      return;
    }
  }

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}

// function format rupiah
function rupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
}

// function format time date
function getDateTimeNow() {
  var today = new Date();
  var date =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");
  var time =
    String(today.getHours()).padStart(2, "0") +
    ":" +
    String(today.getMinutes()).padStart(2, "0") +
    ":" +
    String(today.getSeconds()).padStart(2, "0");
  var dateNow = date + "T" + time + ".000Z";
  return dateNow;
}
