<script lang="ts">
  import Pesquisar from './Pesquisar.vue';
  import MenuMobile from './MenuMobile.vue';
  import Menu from './Menu.vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: "Cabecalho",
    components: {
      Pesquisar,
      MenuMobile,
      Menu
    }
  })
</script>

<template>
  <header class="cabecalho">
    <div class="cabecalho__logo">
      <img src="../assets/img/logos/logo-branca-simples.svg" alt="Logo da Meteora">
    </div>

    <Menu />
    <MenuMobile />

    <div class="cabecalho__pesquisar">
      <input type="text" id="pesquisar" placeholder="Digite o produto" />

      <button class="botao">Buscar</button>
    </div>
  </header>
  <Pesquisar />
</template>

<style scoped>
.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--preto);
  padding: 1.25rem 1.375rem;
}

.cabecalho__logo img {
  width: 125.7px;
}

.cabecalho__pesquisar {
  display: none;
}

@media screen and (min-width: 1440px) {
  .cabecalho {
    padding: 0.625rem 0.8125rem;
  }

  .cabecalho__logo img {
    width: 132.75px;
  }
}
</style>