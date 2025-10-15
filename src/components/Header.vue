<template>
  <header class="portfolio-header">
    <div class="logo">
      <span class="logo-ac">AC</span> <span class="logo-name">Ana Clara Coelho</span>
    </div>
    <nav class="nav-links">
     <RouterLink :to="{ name: 'Home' }" class="nav-item">Início</RouterLink>
      <RouterLink :to="{ name: 'SobreMim' }" class="nav-item">Sobre Mim</RouterLink>
      <RouterLink :to="{ name: 'Projetos' }" class="nav-item">Projetos</RouterLink>
      <RouterLink :to="{ name: 'Contato' }" class="nav-item">Contato</RouterLink>
    </nav>
  </header>
</template>

<script setup>

</script>

<style scoped>
.portfolio-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0; /* Ajustado para encaixar no App.vue padding */
  border-bottom: 1px solid transparent; /* Para simular o separador, se necessário */
}

.logo {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text-title);
  display: flex;
  align-items: center;
}

.logo-name {
 font-family: 'Playfair Display', serif; 
  font-size: 1.3rem;
  font-weight: 500;
  color: #A08C7E; /* Cor suave de marrom/bege escuro para dar a aparência da imagem */
  margin-left: 0.25rem;
}

.logo-ac {
  /* Cor e estilo da abreviação AC */
   font-weight: 700;
  font-size: 1.5rem;
  color: #CCB2A8; 
  margin-right: 0.5rem;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-item {
  text-decoration: none;
  color: #888;
  margin-left: 1.8rem;
  font-weight: 500;
  transition: color 0.3s;
  font-size: 0.95rem;
}

.nav-item:hover,
.nav-item.active {
  color: var(--color-text-title);
  text-decoration: underline;
  text-decoration-color: var(--color-primary);
  text-underline-offset: 5px;
}

.bag-icon {
  font-size: 1.2rem;
  margin-left: 2rem;
  color: #333;
}
</style>