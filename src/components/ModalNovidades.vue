<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: "ModalNovidades",
  })
</script>

<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div class="titulo-modal">
            <img src="../assets/img/icones/check-circle.svg" alt="">
            <h2 class="modal-title fs-5" id="staticBackdropLabel">
              E-mail cadastrado com sucesso!
            </h2>
          </div>
          <button type="button" class="botao-fechar" data-bs-dismiss="modal" aria-label="Close">
            <i class="bi bi-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <p class="mensagem">
            Em breve você receberá novidades exclusivas da Meteora.
          </p>
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

.mensagem {
  font-size: 1rem;
  line-height: 23px;
  padding-bottom: 1rem;
}
</style>