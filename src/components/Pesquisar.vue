<script setup lang="ts"></script>

<template>
  <div class="pesquisar">
    <input type="text" id="buscar" class="buscar" placeholder="Digite o produto" />

    <button class="botao">Buscar</button>
  </div>
</template>

<style scoped>
.pesquisar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  padding: 1.5rem 1.625rem;
}

.buscar {
  border: 1px solid var(--preto);
  font-family: var(--fonte-principal);
  height: 37px;
  padding: 0.43rem 0.75rem;
}

.buscar::placeholder {
  color: #6C757D;
  font-family: var(--fonte-principal);
  font-size: 0.75rem;
}

.botao {
  background-color: transparent;
  border: 1px solid var(--preto);
  font-size: 1rem;
  font-weight: 500;
  height: 37px;
  padding: 0.5rem 1rem;
  text-align: center;
  transition: all .4s ease;
}

.botao:hover {
  border-color: transparent;
  background-color: var(--preto);
  color: var(--branco);
}

@media screen and (min-width: 768px) {
  .pesquisar {
    display: none;
  }
}
</style>