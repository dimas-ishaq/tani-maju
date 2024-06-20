const HomePage = {
  async render() {
    return `
      <hero-section>
      
      </hero-section>

      <!-- Card Section-Start -->
      <section id="section-card" class="section-card">
        <div class="title-card">
          <h2>
            <span>Mulailah Berbisnis Dengan Mitra Kami</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
            repellendus numquam quam tempora voluptatum.
          </p>
        </div>
      </section>

        <div class="container">
        </div>
        <div class="navigation">
          <button id="prevBtn">Prev</button>
          <button id="nextBtn">Next</button>
        </div>
        
      <!-- Card Section-End -->
    `;
  },

  async afterRender() {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const dataPetani = await response.json();
      let listPetani = '';
      dataPetani.forEach((card) => {
        listPetani += `
          <div class="card">
            <img class="img" src="http://localhost:3000${card.cover.url}" alt="${card.brandName}" title="${card.brandName}">
            <div class="city">${card.city}</div>
            <h3>${card.brandName}</h3>
            <p class="amount">Perkiraan Dana yang Dibutuhkan ${card.estimatedFund}</p>
            <p class="distribution">Pembagian Dividen: ${card.estimatedDividend}</p>
            <a type="button" class="button-card" href="#/detail/${card.id}">
              <span>Selengkapnya</span>
            </a>
          </div>
        `;
      });

      document.querySelector('.container').innerHTML = listPetani;

      const container = document.querySelector('.container');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');

      prevBtn.addEventListener('click', () => {
        container.scrollBy({ left: -300, behavior: 'smooth' });
      });

      nextBtn.addEventListener('click', () => {
        container.scrollBy({ left: 300, behavior: 'smooth' });
      });

      let isDown = false;
      let startX;
      let scrollLeft;

      container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
      });

      container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active');
      });

      container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active');
      });

      container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1;
        container.scrollLeft = scrollLeft - walk;
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
};

export default HomePage;
