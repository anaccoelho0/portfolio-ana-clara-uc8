<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="profile-image-container">
        <img src="../assets/img/perfil.jpg" alt="Ana Clara Coelho - Desenvolvedora Front-End & UX Designer" class="profile-image">
      </div>
      <div class="text-content">
        <h2 class="greeting">Olá, Eu sou</h2>
        <h1 class="main-name">Ana Clara Coelho</h1>
        <p class="role">Desenvolvedora Front-End & UX Designer</p>
        <p class="tagline">
          Criando experiências digitais que encantam e funcionam.
        </p>
        
                <RouterLink :to="{ name: 'Projetos' }" class="btn-link">
          <button class="btn-primary">Ver Projetos</button>
        </RouterLink>
        
        <div class="social-links">
          <a href="https://www.linkedin.com/in/ana-clara-lopes-coelho-da-silva-070460232" aria-label="LinkedIn">in</a>
          <a href="https://github.com/anaccoelho0" aria-label="GitHub">gh</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup >


</script>

<style scoped>
.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 5rem;
  width: 100%;
}

.profile-image-container {
  /* O círculo com o fundo rosa suave */
  background-color: var(--color-primary);
  border-radius: 50%;
  padding: 10px;
  flex-shrink: 0; /* Garante que a imagem não encolha */
}

.profile-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}

.text-content {
  flex-grow: 1;
}

.greeting {
/* Aplicando a fonte Serif e a cor escura */
    font-family: 'Playfair Display', serif; 
    font-size: 3rem;
    font-weight: 400;
    color: var(--color-text-title); /* Cor preta/escura */
    margin-bottom: 0.5rem;
}

.main-name {
/* Aplicando a fonte Serif, mantendo o peso para destaque */
  font-family: 'Playfair Display', serif; 
  font-size: 3rem;
  font-weight: 700; /* Forte, como na imagem */
  line-height: 1.2;
  color: var(--color-text-title); /* Cor preta/escura */
}

.role {
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  color: #777;
}

.tagline {
 font-family: 'Playfair Display', serif; 
  font-size: 1.4rem;
  font-weight: 400; 
  color: var(--color-secondary); 
  font-style: italic;
  margin-bottom: 2.5rem;
  line-height: 1.4;
}

.btn-primary {
  background-color: var(--color-secondary);
  color: var(--color-text-light);
  border: none;
  padding: 0.8rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 4px 15px rgba(102, 165, 103, 0.4);
}

.btn-primary:hover {
  background-color: #528a54;
  transform: translateY(-2px);
}

.social-links {
  margin-top: 1.5rem;
}

.social-links a {
  color: #888;
  text-decoration: none;
  font-size: 1.2rem;
  margin-right: 1.2rem;
  transition: color 0.3s;
}

.social-links a:hover {
  color: var(--color-secondary);
}

/* Responsividade: Telas menores */
@media (max-width: 900px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
  .main-name {
    font-size: 2.5rem;
  }
}
</style>