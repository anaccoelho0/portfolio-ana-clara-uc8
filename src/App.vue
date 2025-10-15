<script>
import { RouterView } from 'vue-router'; 
import Header from './components/Header.vue';

export default {
    
    components: {
        Header,
        RouterView,

    }
}
</script>

<template>
  <div id="portfolio-app">
    <main class="main-content-wrapper">
      <div class="card-container">
        <Header />
        
        <RouterView />
      </div>
    </main>
  </div>
</template>


<style>

@import url('[https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:wght@300;400;500;600;700&display=swap](https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:wght@300;400;500;600;700&display=swap)');

body {
  /* Poppins é a fonte padrão Sans-Serif */
  font-family: 'Poppins', sans-serif; 
  background-color: var(--color-background-soft);
  color: var(--color-text-dark);
  min-height: 100vh;
}

/* Estilos Globais e Variáveis de Cor */
:root {
  --color-primary: #e8b4b8; /* Rosa Suave (Usado para acentuação visual) */
  --color-secondary: #66a567; /* Verde Sofisticado (Usado para botões e destaque) */
  --color-text-dark: #333333;
  --color-text-title: #363636;
  --color-text-light: #ffffff;
  --color-background-soft: #fbf0f0;; /* Fundo geral claro, levemente rosado */
  --color-card-background: #fcfaf6;
}

/* Reset Básico */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Estilo do Corpo da Aplicação (App.vue) */
#portfolio-app {
  font-family: 'Poppins', sans-serif; /* Use uma fonte elegante no seu projeto */
  background-color: var(--color-background-soft);
  color: var(--color-text-dark);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.card-container {
  /* A "Placa" branca que envolve o conteúdo, conforme a imagem */
  background-color: var(--color-card-background);
  border-radius: 20px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.08);
  max-width: 1100px; /* Limite o tamanho da "placa" */
  width: 100%;
  padding: 2rem 4rem; /* Padding interno */
}
</style>