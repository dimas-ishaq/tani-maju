const mulaiInvestasi = {
  async render() {
    return `
     <div class="content">
        <div id="petani" class=""></div>
      </div>

      <section class="hero-investasi">
      <div>
        <img
          src="img/hero-image-investasi.jpg"
          alt="hero-img"
          class="hero-img-2"
        />
      </div>
    </section>

    <section id="section-card-investasi" class="section-card-investasi">
      <div class="title-card-investasi">
        <h2>
          <span>Mulailah Berbisnis Dengan Mitra Kami</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
          repellendus numquam quam tempora voluptatum.
        </p>
      </div>
    </section>
    
      <div class="container-investasi">
        <!-- Konten kartu akan dimuat di sini -->
      </div>
      <div class="navigation-investasi">
        <a type="button" id="back-to--top" href="#">Kembali ke Atas</a>
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const containerInvestasi = document.querySelector('.container-investasi');

    if (!containerInvestasi) {
      console.error('Element .container-investasi not found');
      return;
    }

    try {
      // Memanggil data JSON setelah render
      const module = await import('../../data/data.json');
      const jsonData = module.default;
      console.log(jsonData);

      const dataPetani = jsonData.cards;
      let listPetani = '';
      dataPetani.forEach((card) => {
        listPetani += `
          <div class="card-investasi">
            <img class="img" src="img/card/${card.img}" alt="${card.title}" title="${card.title}">
            <div class="city">${card.city}</div>
            <h3>${card.title}</h3>
            <p class="amount">Perkiraan Dana yang Dibutuhkan ${card.estimation}</p>
            <p class="distribution">Pembagian Dividen: ${card.distribution}</p>
            <a type="button" class="button-card-investasi" href="#/detail">
              <span>Selengkapnya</span>
            </a>
          </div>
        `;
      });
      containerInvestasi.innerHTML = listPetani;
    } catch (error) {
      console.error('Failed to fetch JSON data', error);
    }
  },
};

export default mulaiInvestasi;
