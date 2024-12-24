<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: "Rodape"
  })
</script>

<template>
  <footer>
    <p>
      2024 © Projetado por Alura | Desenvolvido por
      <a href="https://github.com/kaique-feitosa" target="_blank">
        Kaique Feitosa.
      </a>
    </p>
    <p> Projeto fictício sem fins comerciais.</p>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--preto);
  color: var(--branco);
  padding: 1.0625rem 4rem;
}

footer p,
footer p a {
  font-size: 0.8125rem;
  font-weight: 300;
  line-height: 20px;
  text-align: center;
}

footer p:first-child {
  padding-bottom: .5rem;
}

footer p a {
  color: var(--branco);
  font-weight: 400;
  text-decoration: none;
  transition: .3s all ease-in-out;
}

footer p a:hover {
  font-weight: 600;
}
</style>