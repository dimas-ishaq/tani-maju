/* eslint-disable import/prefer-default-export */
const createDetailTemplate = (product) => `
<!-- Hero Detail Section-Start -->

<section class="hero-detail">
  <div class="detail-image">
    <img src="http://localhost:3000${product.cover.url}" alt="${product.brandName}" />
  </div>
</section>

<!-- Hero Detail Section-End -->

<!-- Detail-Start -->

<section class="info">
  <div class="info-item">
    <h1>Informasi Saham Petani</h1>
    <h3>Nama Brand : </h3>
    <p>${product.brandName}</p>
    <h3>Nama Owner : </h3>
    <p>${product.ownerName}</p>
    <h3>Kota : </h3>
    <p>${product.city}</p>
    <h3>Deskripsi : </h3>
    <p>${product.businessDescription}</p>
    <h3>Harga 50% Saham : </h3>
    <p>Rp.${product.price}</p>
    <h3>Perkiraan Dana yang di Butuhkan : </h3>
    <p>Rp.${product.estimatedFund}</p>
    <h3>Perkiraan Deviden Tahunan : </h3>
    <p>Rp.${product.estimatedDividend}</p>
    <h3>Link Video Profile Perusahaan : </h3>
    <p><a href="${product.companyVideo}">${product.companyVideo}</a></p>
    <h3>Instagram : </h3>
    <p>@${product.instagram}</p>
  </div>

  <!-- Gallery-Start -->
  
  <div class="gallery-detail">
    <h2>"Gallery"</h2>
    <div class="gallery-detail-images">
      ${product.gallery.map((image) => `<img src="http://localhost:3000${image.url}" alt="Gallery image">`).join('')}
    </div>
  </div>
</section>

<!-- Gallery-End -->

<!-- Detail-End -->
`;
export {
  createDetailTemplate,
};
