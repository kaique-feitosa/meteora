<script lang="ts">
  import { defineComponent } from 'vue';
  import Produto from './Produto.vue';
  import { useStore } from 'vuex';
  import IProduto from '../interfaces/IProduto';

  export default defineComponent({
    name: "Produtos",
    components: {
      Produto
    },
    setup() {
      const store = useStore();
      const produtos: IProduto[] = store.state.produtos;

      return {
        produtos
      }
    }
  })
</script>

<template>
  <section class="container">
    <h2 class="titulo">
      Produtos que estão bombando!
    </h2>

    <div class="produtos">
      <Produto v-for="(produto, index) in produtos" :key="index" :produto="produto" />
    </div>

  </section>
</template>

<style scoped>
.container {
  padding: 1.625rem 0;
}

.produtos {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  margin-top: 1.875rem;
}

@media screen and (min-width: 768px) {
  .produtos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 32px;
    column-gap: 30px;
  }
}

@media screen and (min-width: 1440px) {
  .container {
    padding-bottom: 3rem;
  }

  .produtos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
}
</style>