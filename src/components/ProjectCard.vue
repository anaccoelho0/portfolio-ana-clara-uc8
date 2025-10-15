<template>
  <div class="project-card">
    <div class="project-image-wrapper">
      <img :src="project.imageSrc" :alt="project.title" class="project-image">
      <div class="overlay">
        <a :href="project.link" target="_blank" class="btn-live">Ver Site</a>
      </div>
    </div>

    <div class="project-details">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>
      
      <div class="project-meta">
        <span class="meta-label">Tecnologias:</span>
        <div class="tags">
          <span v-for="tag in project.techs" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  project: {
    type: Object,
    required: true,
    default: () => ({
      title: 'Título do Projeto',
      description: 'Descrição do projeto.',
      techs: [],
      imageSrc: '',
      link: '#',
    }),
  },
});
</script>

<style scoped>
/* Estilos elegantes para o card */
.project-card {
  background-color: var(--color-card-background); /* Fundo bege suave */
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 100%;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.project-image-wrapper {
  position: relative;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 250px; /* Altura fixa para visualização */
  object-fit: cover;
  display: block;
  transition: transform 0.5s;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

/* Efeito Overlay (Botão Ver Site) */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.project-card:hover .overlay {
  opacity: 1;
}

.btn-live {
  background-color: var(--color-primary); /* Rosa Suave */
  color: var(--color-text-light);
  text-decoration: none;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  transition: background-color 0.3s;
}

.btn-live:hover {
  background-color: #d1a0a5; /* Rosa um pouco mais escuro */
}

.project-details {
  padding: 1.5rem;
}

.project-title {
  font-family: 'Playfair Display', serif; /* Fonte elegante para o título */
  font-size: 1.75rem;
  color: var(--color-text-title);
  margin-bottom: 0.5rem;
}

.project-description {
  color: #777;
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.project-meta {
  margin-top: 1rem;
}

.meta-label {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-secondary); /* Verde para destaque */
  display: block;
  margin-bottom: 0.5rem;
}

.tags .tag {
  display: inline-block;
  background-color: #eee; /* Fundo cinza suave */
  color: #555;
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>