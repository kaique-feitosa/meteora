<script lang="ts">
  import { defineComponent } from 'vue';
  import Cabecalho from './components/Cabecalho.vue';
  import Carrossel from './components/Carrossel.vue';
  import Categoria from './components/Categoria.vue';
  import Produtos from './components/Produtos.vue';
  import Facilidades from './components/Facilidades.vue';
  import Novidades from './components/Novidades.vue';
  import Rodape from './components/Rodape.vue';
  import ModalProduto from './components/ModalProduto.vue';
  import ModalNovidades from './components/ModalNovidades.vue';

  export default defineComponent({
    name: "App",
    components: {
      Cabecalho,
      Carrossel,
      Categoria,
      Produtos,
      ModalProduto,
      ModalNovidades,
      Facilidades,
      Novidades,
      Rodape
    }
  })
</script>

<template>
  <Cabecalho />
  <Carrossel />

  <div class="content">
    <Categoria />
    <Produtos />
  </div>

  <ModalProduto />

  <Facilidades />

  <div class="content">
    <Novidades />
    <ModalNovidades />
  </div>

  <Rodape />
</template>

<style>
.titulo {
  font-size: 1.75rem;
  font-weight: 500;
  text-align: center;
}

.btn-produto {
  background-color: var(--roxo);
  border: 1px solid transparent;
  color: var(--branco);
  font-size: 1rem;
  margin: 0 0 1rem 1rem;
  padding: 0.5625rem 1rem;
  text-decoration: none;
  transition: background .4s ease;
}

.btn-produto:hover {
  border-color: var(--roxo);
  background-color: transparent;
  color: var(--roxo);
  font-weight: 500;
}

.content {
  padding: 0 1.625rem;
}

@media screen and (min-width: 1440px) {
  .content {
    padding: 0 10.3125rem;
  }
}
</style>
