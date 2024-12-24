<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: "Menu",
  })
</script>

<template>
  <nav>
    <ul class="menu">
      <li>
        <a href="#" class="menu__link">Home</a>
      </li>
      <li>
        <a href="#" class="menu__link">Nossas lojas</a>
      </li>
      <li>
        <a href="#" class="menu__link">Novidades</a>
      </li>
      <li>
        <a href="#" class="menu__link">Promoções</a>
      </li>
    </ul>
  </nav>

  <div class="buscar">
    <input type="text" id="busca" class="buscar__input" placeholder="Digite um produto" />
    <button type="button" class="buscar__btn">Buscar</button>
  </div>
</template>

<style scoped>
.menu {
  display: none;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
}

.menu__link {
  color: var(--branco);
  font-size: 0.8125rem;
  text-decoration: none;
  transition: font-weight 0.5s ease;
}

.menu__link:hover {
  font-weight: 600;
}

.buscar {
  display: none;
  align-items: center;
  gap: 1rem;
}

.buscar__input {
  color: #6C757D;
  font-family: var(--fonte-principal);
  font-size: 0.8125rem;
  padding: .5625rem 0.8125rem;
  width: 145px;
}

.buscar__input::placeholder {
  color: #6C757D;
  font-family: var(--fonte-principal);
  font-size: 0.8125rem;
}

.buscar__btn {
  background-color: transparent;
  border: 1px solid var(--branco);
  color: var(--branco);
  font-size: 0.8125rem;
  padding: .5rem .75rem;
  transition: all 0.3s ease-in-out;
  margin-left: 1rem;
}

.buscar__btn:hover {
  background-color: var(--branco);
  color: var(--preto);
}

@media screen and (min-width: 768px) {
  .menu,
  .buscar {
    display: flex;
  }
}

@media screen and (min-width: 1440px) {
  .menu {
    gap: 2.5rem;

    position: absolute;
    top: 2%;
    left: 15%;

  }

  .menu__link {
    font-size: 1rem;
  }

  .busca__input {
    font-size: 0.9375rem;
    padding: .5625rem 0.9375rem;
    width: 155px;
  }

  .busca__input::placeholder {
    font-size: 0.9375rem;
  }


  .busca__btn {
    font-size: 1rem;
    padding: .5625rem .75rem;
    margin-left: 1rem;
  }
}
</style>