<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import camisetas from "../assets/img/categoria/camisetas.svg"
  import bolsas from "../assets/img/categoria/bolsas.svg"
  import calcados from "../assets/img/categoria/calcados.svg"
  import calcas from "../assets/img/categoria/calcas.svg"
  import casacos from "../assets/img/categoria/casacos.svg"
  import oculos from "../assets/img/categoria/oculos.svg"
  import ICategoria from '../interfaces/ICategoria';

  export default defineComponent({
    name: "Categoria",
    setup() {
      const categorias = ref<ICategoria[]>([
        {
          nome: "Camisetas",
          imagem: camisetas
        },
        {
          nome: "Bolsas",
          imagem: bolsas
        },
        {
          nome: "Calçados",
          imagem: calcados
        },
        {
          nome: "Calças",
          imagem: calcas
        },
        {
          nome: "Casacos",
          imagem: casacos
        },
        {
          nome: "Óculos",
          imagem: oculos
        },
      ])

      return {
        categorias
      }
    }
  })
</script>

<template>
  <section class="categoria">
    <h2 class="titulo">Busque por categoria:</h2>

    <div class="categoria__container">
      <a href="#" class="categoria__item" v-for="(categoria, index) in categorias" :key="index">
        <div class="categoria__imagem">
          <img :src="categoria.imagem" :alt="categoria.nome">
        </div>
        <span class="categoria__nome">{{ categoria.nome }}</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.categoria {
  padding: 1.5rem 0;
}

.categoria h2 {
  padding-bottom: 1.5rem;
}

.categoria__container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.categoria__item {
  display: flex;
  flex-direction: column;
  align-items: center;

  text-decoration: none;
  width: 146px;
}

.categoria__imagem {
  background-color: var(--verde);
  text-align: center;
  width: 100%;
}

.categoria__imagem img {
  object-fit: cover;
  transition: .4s all ease-in-out;
  width: 80%;
}

.categoria__imagem:hover img {
  transform: scale(1.1)
}

.categoria__nome {
  background-color: var(--preto);
  color: var(--branco);
  font-size: 1rem;
  padding: .5rem 0;
  text-align: center;
  width: 100%;
}

@media screen and (min-width: 768px) {
  .categoria__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .categoria__item {
    width: 211px;
  }
}

@media screen and (min-width: 1440px) {
  .categoria {
    padding: 4.5rem 0;
  }

  .categoria__container {
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }

  .categoria__item {
    width: 160px;
  }
}
</style>