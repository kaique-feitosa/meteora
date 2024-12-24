<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: "Carrossel",
  })
</script>

<template>
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>

    <div class="carousel-inner">
      <div class="carousel-item active">
        <picture>
          <source media="(min-width: 1440px)" srcset="../assets/img/banner/tablet/banner01.png" class="d-block w-100">
          <source media="(min-width: 768px)" srcset="../assets/img/banner/tablet/banner01.png" class="d-block w-100">
          <img src="../assets/img/banner/mobile/banner01.png" class="d-block w-100"
            alt="Modelo feminino usando casaco rosa metálico">
        </picture>
      </div>
      <div class="carousel-item carousel-item-2">
        <picture>
          <source media="(min-width: 1440px)" srcset="../assets/img/banner/tablet/banner02.png" class="d-block w-100">
          <source media="(min-width: 768px)" srcset="../assets/img/banner/tablet/banner02.png" class="d-block w-100">
          <img src="../assets/img/banner/mobile/banner02.png" class="d-block w-100"
            alt="Modelo feminino usando conjunto esportivo preto com listras brancas na lateral">
        </picture>

        <div class="carousel-caption item-2">
          <h5>COLEÇÃO ATEMPORAL</h5>
          <p>Estilo e qualidade para durar.</p>
        </div>
      </div>
      <div class="carousel-item carousel-item-3">
        <picture>
          <source media="(min-width: 1440px)" srcset="../assets/img/banner/tablet/banner03.png" class="d-block w-100">
          <source media="(min-width: 768px)" srcset="../assets/img/banner/tablet/banner03.png" class="d-block w-100">
          <img src="../assets/img/banner/mobile/banner03.png" class="d-block w-100"
            alt="Modelo masculino usando terno cinza com gravata borboleta preta, chápeu cinza e óculos de grau">
        </picture>

        <div class="carousel-caption item-3">
          <h5>COLEÇÃO ATEMPORAL</h5>
          <p>Alto impacto visual, baixo impacto ambiental!</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>
.carousel-item-2,
.carousel-item-3 {
  position: relative;
}

.carousel-caption {
  font-family: var(--fonte-principal);

  position: absolute;
}

.item-2 {
  bottom: 12%;
}

.item-3 {
  bottom: 10%;
}

.carousel-caption h5 {
  font-size: 2rem;
  line-height: 38px;
  padding-bottom: .5rem;
}

.carousel-caption p {
  font-size: 1rem;
}

@media screen and (min-width: 768px) {
  .carousel-caption h5 {
    padding-bottom: 1rem;
  }

  .item-2 {
    bottom: 38%;
    left: 40%;
  }

  .item-3 {
    bottom: 38%;
    right: 40%;
  }
}

@media screen and (min-width: 1440px) {
  .carousel-caption h5 {
    font-size: 3rem;
    padding-bottom: 1rem;
  }

  .carousel-caption p {
    font-size: 1.25rem;
  }

  .item-2 {
    bottom: 43%;
    left: 49%;
  }

  .item-3 {
    bottom: 43%;
    right: 49%;
  }
}
</style>