<template>
  <section class="projects-view">
    <h1 class="main-title">Meus Projetos de Destaque</h1>
    <p class="subtitle">Uma vitrine de experiências digitais criadas com foco em design e funcionalidade.</p>

    <div class="projects-grid">
      <ProjectCard 
        v-for="project in projects" 
        :key="project.title" 
        :project="project" 
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ProjectCard from '../components/ProjectCard.vue'; // Caminho que já funciona


import siteConfeitaria from '../assets/img/site1.jpg'; 
import siteTupiFlix from '../assets/img/site2.jpg';
import sitePerfumaria from '../assets/img/site3.jpg';

const projects = ref([
  {
    title: 'Confeitaria Doce Sabor',
    description: 'Landing page elegante para uma confeitaria artesanal, focada em conversão e experiência visual de dar água na boca.',
    techs: ['HTML5', 'CSS3', 'JavaScript'],
    imageSrc: siteConfeitaria,
    link: 'https://seusite.com/confeitaria', // Substitua pelo link real
  },
  {
    title: 'TupiFlix - Streaming Brasileiro',
    description: 'Interface de streaming inspirada na Netflix, trazendo o design moderno para o universo das lendas brasileiras (Saci-Pererê).',
    techs: ['Vue.js', 'Tailwind CSS', 'API de Conteúdo'],
    imageSrc: siteTupiFlix,
    link: 'https://projeto-netflix-xi.vercel.app/', // Substitua pelo link real
  },
  {
    title: 'Perfumaria Boutique Ana Clara',
    description: 'E-commerce com foco em identidade e sofisticação, apresentando o catálogo de perfumes com um toque de luxo e cores suaves.',
    techs: ['HTML5', 'SASS', 'Responsividade'],
    imageSrc: sitePerfumaria,
    link: 'https://perfumes-da-ana.vercel.app/', // Substitua pelo link real
  },
]);
</script>

<style scoped>
.projects-view {
  padding: 3rem 0;
}

.main-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  text-align: center;
  color: var(--color-text-title);
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.1rem;
  text-align: center;
  color: #777;
  margin-bottom: 3rem;
}

.projects-grid {
  display: grid;
  /* Cria 3 colunas em telas grandes */
  grid-template-columns: repeat(3, 1fr); 
  gap: 2rem;
}

/* Responsividade: 2 colunas em telas médias */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Responsividade: 1 coluna em telas pequenas */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>