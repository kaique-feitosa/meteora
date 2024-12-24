<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import IProduto from '../interfaces/IProduto';
  import { useStore } from 'vuex';

  export default defineComponent({
    name: "Produto",
    props: {
      produto: { type: Object as PropType<IProduto>, required: true }
    },
    setup(props) {
      const store = useStore();
      const produto = props.produto;

      const selecionarProduto = () => {
        store.commit("setProdutoSelecionado", produto);
      }

      return {
        produto,
        selecionarProduto
      }
    }
  })
</script>

<template>
  <div class="produto">
    <div class="produto__imagem">
      <img :src="produto.imagem" :alt="produto.nome.toLowerCase()">
    </div>

    <div class="produto__infos">
      <h3 class="produto__nome">{{ produto.nome }}</h3>
      <p class="produto__descricao">
        {{ produto.descricao }}
      </p>
      <p class="produto__preco">R$ {{ produto.preco }}</p>
    </div>

    <button type="button" class="btn-produto" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
      @click="selecionarProduto">
      Ver mais
    </button>
  </div>
</template>

<style scoped>
.produtos {
  display: flex;

  margin-top: 1.875rem;
}

.produto {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border: 1px solid rgba(0, 0, 0, 0.13);
  border-radius: 5px 5px 0 0;
  width: 323px;
}

.produto__imagem img {
  height: 422px;
  width: 100%;
  object-fit: cover;
}

.produto__infos {
  color: var(--cinza-escuro);
  padding: 0.8125rem 1rem;
}

.produto__nome {
  font-size: 1rem;
  font-weight: 700;
}

.produto__descricao {
  font-size: 0.8125rem;
  line-height: 20px;
  padding-top: 0.8125rem;
}

.produto__preco {
  font-size: 1rem;
  font-weight: 700;

  padding-top: 1rem;
}
</style>