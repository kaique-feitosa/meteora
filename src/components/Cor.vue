<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: "Cor",
    props: {
      cor: { type: Object, default: '' }
    },
    setup(props) {
      const cor = props.cor
      return {
        cor
      }
    }
  })
</script>

<template>
  <div class="cor">
    <input type="radio" name="name" :id="cor.idCor" :value="cor.idCor">
    <label :style="`background-color: ${cor.cor};`" :for="cor.idCor"></label>
    <span>{{ cor.nome }}</span>
  </div>
</template>

<style scoped>
.cor {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
}

.cor input[type="radio"] {
  display: none;
}

.cor label {
  display: block;
  border: 2px solid #dee2e6;
  border-radius: 50%;
  cursor: pointer;
  height: 13px;
  transition: border-color 0.3s, background-color 0.3s;
  width: 13px;
}

.cor input[type="radio"]:checked+label {
  border-color: var(--roxo);
  border-width: 3px;
  box-shadow: 1px 1px 5px var(--roxo);
}
</style>