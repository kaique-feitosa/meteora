<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: "Facilidades"
  })
</script>

<template>
  <section class="container">
    <h2 class="titulo titulo--facilidades">
      Conheça todas as nossas facilidades
    </h2>

    <div class="facilidades">
      <div class="facilidade">
        <div class="facilidade__imagem">
          <img src="../assets/img/icones/icon-pix.svg" alt="ícone de PIX">
        </div>
        <div class="facilidade__conteudo">
          <h5 class="facilidade__titulo">
            Pague pelo pix
          </h5>
          <p class="facilidade__texto">
            Ganhe 5% OFF em pagamentos via PIX
          </p>
        </div>
      </div>
      <div class="facilidade">
        <div class="facilidade__imagem">
          <img src="../assets/img/icones/arrow-repeat.svg" alt="Ícone de troca">
        </div>
        <div class="facilidade__conteudo">
          <h5 class="facilidade__titulo">
            Troca grátis
          </h5>
          <p class="facilidade__texto">
            Fique livre para trocar em até 30 dias.
          </p>
        </div>
      </div>
      <div class="facilidade">
        <div class="facilidade__imagem">
          <img src="../assets/img/icones/flower.svg" alt="Ícone de flor">
        </div>
        <div class="facilidade__conteudo">
          <h5 class="facilidade__titulo">
            Sustentabilidade
          </h5>
          <p class="facilidade__texto">
            Moda responsável, que respeita o meio ambiente.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  background-color: var(--preto);
  padding: 2rem 1.625rem;
}

.titulo--facilidades {
  color: var(--branco);
  padding-bottom: 2rem;
}

.facilidades {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.facilidade {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.facilidade__imagem img {
  width: 56px;
}

.facilidade__conteudo {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  color: var(--branco);
}

.facilidade__titulo {
  color: var(--verde);
  font-size: 1rem;
  line-height: 23px;
  font-weight: 700;
  text-transform: uppercase;
}

.facilidade__texto {
  font-size: 0.8125rem;
  font-weight: 300;
  line-height: 20px;
  width: 80%;
}

@media screen and (min-width: 768px) {
  .container {
    max-width: 100%;
  }

  .titulo--facilidades {
    font-size: 2rem;
    padding-bottom: 2.5rem;
  }

  .facilidades {
    margin: 0 auto;
    width: 50%;
  }

  .facilidade__imagem img {
    width: 72px;
  }

  .facilidade__texto {
    width: 83%;
  }
}

@media screen and (min-width: 1440px) {
  .facilidades {
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
  }

  .facilidade__imagem img {
    width: 72px;
  }

  .facilidade__texto {
    width: 83%;
  }
}
</style>