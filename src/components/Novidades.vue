<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { Modal } from 'bootstrap';
  import ModalNovidades from './ModalNovidades.vue';

  export default defineComponent({
    name: "Novidades",
    components: {
      ModalNovidades
    },
    setup() {
      const email = ref('');
      const emailValido = ref(false);
      let modalInstance: Modal | null = null;

      onMounted(() => {
        const modalElement = document.getElementById('exampleModal');

        if (modalElement) {
          modalInstance = new Modal(modalElement);
        }
      })

      const validarEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        emailValido.value = emailRegex.test(email.value);

        if (emailValido.value) {
          if (modalInstance) {
            modalInstance.show();
            email.value = ''
          }
          else {
            console.error('Modal não foi encontrado.');
          }
        } else {
          alert("Por favor, insira um email válido.")
        }
      }

      return {
        email,
        validarEmail
      }
    }
  })
</script>

<template>
  <section class="novidades">
    <form class="novidades__conteudo" @submit.prevent="validarEmail">
      <p class="novidades__titulo">
        Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!
      </p>

      <div class="novidades__email">
        <input type="email" id="email" class="novidades__input" placeholder="Digite seu email" v-model="email"
          required />
        <button type="submit" class="novidades__btn">
          Enviar
        </button>
      </div>
    </form>

    <ModalNovidades />
  </section>
</template>

<style scoped>
.novidades {
  padding: 1.78125rem 0;
}

.novidades__conteudo,
.novidades__input {
  border: 1px solid var(--preto);
}

.novidades__conteudo {
  padding: 1.5rem 0;
}

.novidades__titulo {
  color: var(--cinza-escuro);
  font-size: 1rem;
  line-height: 23px;
  text-align: center;
}

.novidades__email {
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem 0;
}

.novidades__input {
  border-right: 0;
  color: var(--roxo);
  font-weight: 500;
  padding: .48rem 1rem;
  width: 70%;
}

.novidades__input::placeholder {
  font-size: 1rem;
  color: #6C757D;
}

.novidades__btn {
  background-color: var(--roxo);
  border: 1px solid transparent;
  color: var(--branco);
  cursor: pointer;
  font-size: 1rem;
  padding: .47rem 1.125rem;
}

.novidades__btn:hover {
  background-color: transparent;
  border-color: var(--roxo);
  color: var(--roxo);
  font-weight: 500;
}

@media screen and (min-width: 768px) {
  .novidades__conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2.5rem 3.75rem;
  }

  .novidades__titulo {
    font-size: 1.25rem;
  }

  .novidades__input {
    width: 372px;
  }
}

@media screen and (min-width: 1440px) {
  .novidades {
    padding: 4.09375rem 0;
  }

  .novidades__conteudo {
    margin: 0 auto;
    width: 729px;
  }
}
</style>