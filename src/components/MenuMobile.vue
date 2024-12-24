<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: "MenuMobile",
    setup() {
      function toggleMenu() {
        const menu = document.querySelector('.menu__lista');

        menu?.classList.toggle('menu--ativo')

      }

      return {
        toggleMenu,
      }
    }
  })
</script>

<template>
  <nav class="menu">
    <button class="botao" type="button" @click="toggleMenu">
      <i class="bi bi-list"></i>
    </button>

    <ul class="menu__lista">
      <button class="botao" type="button" @click="toggleMenu">
        <i class="bi bi-x"></i>
      </button>

      <li>
        <a href="" class="menu__link">Home</a>
      </li>
      <span class="divisor"></span>
      <li>
        <a href="" class="menu__link">Nossas lojas</a>
      </li>
      <span class="divisor"></span>
      <li>
        <a href="" class="menu__link">Novidades</a>
      </li>
      <span class="divisor"></span>
      <li>
        <a href="" class="menu__link">Promoções</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
}

.menu__lista {
  display: none;
  flex-direction: column;

  background-color: var(--cinza-escuro);
  padding: 0.875rem 1.5rem;
  width: 144px;

  position: absolute;
  right: -22px;
  top: -22px;
  z-index: 2;
}

.menu__lista.menu--ativo {
  display: flex;
}

.menu__lista li:last-child {
  padding-bottom: .5rem;
}

.menu__link {
  color: var(--branco);
  font-size: 1rem;
  text-decoration: none;
  transition: all .3s ease-in-out;
}

.menu__link:hover {
  color: var(--verde);
}

.divisor {
  border-bottom: 1px solid var(--branco);
  height: 1px;
  width: 100%;
  margin: .7rem 0;
  align-self: center;
}

.botao {
  background-color: transparent;
  align-self: flex-end;
}

.bi-list,
.bi-x {
  color: var(--verde);
  cursor: pointer;
}

.bi-list {
  font-size: 26px;
}

.bi-x {
  font-size: 36px;
}

.hidden {
  display: none;
}

@media screen and (min-width: 768px) {
  .menu {
    display: none;
  }
}
</style>