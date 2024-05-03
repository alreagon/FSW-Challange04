class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }
  
  render() {
    const rentCost = rupiah(this.rentPerDay);
    return `
          <div class="col-lg-4 col-md-4 col-sm-12 mx-2">
              <div class="card mx-0 my-4 g-0"  style="width: 18rem; box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);">
                  <img src="${this.image}" class="card-img-top img-fluid" alt="${this.manufacture}" style="height: 195px; border-radius: 3px; object-fit: cover;" />
                  <div class="card-body" style="font-size: 14px">
                      <p class="card-title">${this.manufacture} ${this.model}</p>
                      <p class="fw-bold">${rentCost} / hari</p>
                      <p class="card-text" style="height: 90px">${this.description}</p>

                      <div class="my-2" vertical-align-center><img src="./assets/image/fi_users.png" class="me-2" style="height: 16px;">${this.capacity} Orang</div>

                      <div class="my-2"><img src="./assets/image/fi_settings.png" class="me-2" style="height: 16px;">${this.transmission}</div>

                      <div class="my-2"><img src="./assets/image/fi_calendar.png" class="me-2" style="height: 16px;">${this.year}</div>

                      <a href="#" class="btn btn-success text-white w-100 mt-2 fw-bold mt-4 d-flex align-items-center justify-content-center" style="font-size: 14px; height: 48px;">Pilih Mobil</a>
                  </div>
              </div>
          </div>
      `;
  }
}
