<script lang="ts">
  import { computed, defineComponent, onMounted, ref } from 'vue';
  import { useStore } from 'vuex';
  import Cor from './Cor.vue';
  import Tamanho from './Tamanho.vue';
  import { Modal } from 'bootstrap';

  export default defineComponent({
    name: "ModalProduto",
    components: {
      Cor,
      Tamanho
    },
    setup(_, { expose }) {
      const store = useStore();
      const produtoSelecionado = computed(() => store.state.produtoSelecionado);

      const modalElement = ref<HTMLDivElement | null>(null);
      let modalInstance: Modal | null = null;

      onMounted(() => {
        if (modalElement.value) {
          modalInstance = new Modal(modalElement.value);
        }
      })

      const showModal = () => {
        modalInstance?.show();
      }

      expose({ showModal });

      return {
        produtoSelecionado,
        modalElement
      }
    }
  })
</script>

<template>
  <div class="modal-produto">
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true" ref="modalElement">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div class="titulo-modal">
              <img src="../assets/img/icones/check-circle.svg" alt="">
              <h2 class="modal-title fs-5" id="staticBackdropLabel">
                Confira detalhes sobre o produto
              </h2>
            </div>
            <button type="button" class="botao-fechar" data-bs-dismiss="modal" aria-label="Close">
              <i class="bi bi-x"></i>
            </button>
          </div>
          <div class="modal-body">
            <div v-if="produtoSelecionado" class="produto">
              <div class="produto__imagem">
                <img :src="produtoSelecionado.imagem" :alt="produtoSelecionado?.nome">
              </div>
              <div class="produto__conteudo">
                <h3 class="produto__nome">{{ produtoSelecionado.nome }}</h3>
                <p class="produto__descricao">{{ produtoSelecionado.descricao }}</p>
                <span class="divisor"></span>
                <p class="produto__preco">{{ produtoSelecionado.preco }}</p>
                <p class="produto__vendedor">Vendido e entregue por {{ produtoSelecionado.vendedor }}</p>
                <div class="produto__cores" v-if="produtoSelecionado.cores.length">
                  <h4 class="produto__cores__titulo">Cores:</h4>
                  <div class="cores">
                    <Cor v-for="(cor) in produtoSelecionado.cores" :key="cor.idCor" :cor="cor" />
                  </div>
                </div>
                <div class="produto__tamanho" v-if="produtoSelecionado.tamanhos.length">
                  <h4 class="produto__tamanho__titulo">Tamanho:</h4>
                  <div class="tamanhos">
                    <Tamanho v-for="(tamanho, index) in produtoSelecionado.tamanhos" :key="index" :tamanho="tamanho" />
                  </div>
                </div>
                <button type="button" class="btn-produto btn-modal">Adicionar à sacola</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-header {
  justify-content: space-between;

  background-color: var(--preto);
  --bs-modal-header-padding: 0.5rem 1rem;
}

.titulo-modal {
  display: flex;
  gap: 1rem;
  width: 70%;
}

.titulo-modal h2 {
  display: flex;
  flex-direction: row;

  color: var(--branco);
  font-size: 1.25rem;
}

.botao-fechar {
  background-color: transparent;
}

.bi-x {
  color: #6C757D;
  font-size: 2rem;
}

.produto {
  border: 1px solid rgba(0, 0, 0, 0.13);
  width: 311px;
  margin: 0 auto;
}

.produto__imagem {
  width: 100%;
}

.produto__imagem img {
  object-fit: cover;
  width: 100%;
}

.produto__conteudo {
  color: var(--cinza-escuro);
  padding: 0 1rem;
}

.produto__nome {
  font-size: 1rem;
  font-weight: 700;
  line-height: 23px;
  padding: 1.5rem 0;
}

.produto__descricao {
  font-size: 0.8125rem;
  line-height: 20px;
}

.divisor {
  display: inline-block;
  border: 1px solid #000;
  height: 1px;
  margin: 1.5rem 0;
  width: 100%;
}

.produto__preco {
  font-size: 1.25rem;
  font-weight: 500;
  padding-bottom: 1.5rem;
}

.produto__vendedor {
  color: var(--cinza);
  font-size: 0.8125rem;
  padding-bottom: 1rem;
}

.produto__cores,
.produto__tamanho {
  border-top: 1px solid var(--cinza);
  color: var(--cinza-escuro);
  font-size: 0.8125rem;
  line-height: 20px;
  margin-bottom: 1rem;
}

.produto__cores__titulo,
.produto__tamanho__titulo {
  font-weight: 700;
  padding: 1rem 0;
}

.cores,
.tamanhos {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

.btn-modal {
  justify-content: flex-start;
  margin: 0;
  margin-bottom: 1rem;
}

@media screen and (min-width: 768px) {
  .modal-dialog {
    margin: auto;
    max-width: 700px;
  }

  .produto {
    display: flex;

    border: none;
    width: 100%;
  }
}
</style>