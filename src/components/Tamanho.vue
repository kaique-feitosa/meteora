<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: "Tamanho",
    props: {
      tamanho: { type: String, default: '' }
    },
    setup(props) {
      const tamanho = props.tamanho;

      return {
        tamanho
      }
    }
  })
</script>

<template>
  <div class="tamanho">
    <input type="radio" name="tamanho" :id="`tam-${tamanho}`" :value="tamanho">
    <label :for="`tam-${tamanho}`"></label>
    <span>{{ tamanho.toUpperCase() }}</span>
  </div>
</template>

<style scoped>
.tamanho {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
}

.tamanho input[type="radio"] {
  display: none;
}

.tamanho label {
  display: block;
  border: 2px solid #dee2e6;
  border-radius: 50%;
  cursor: pointer;
  height: 13px;
  transition: border-color 0.3s, background-color 0.3s;
  width: 13px;
}

.tamanho input[type="radio"]:checked+label {
  border-color: var(--roxo);
  background-color: var(--branco);
  border-width: 4px;
  box-shadow: 1px 1px 3px var(--roxo);
}
</style>