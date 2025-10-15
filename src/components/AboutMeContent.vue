<template>
  <section class="about-me-section">
    <div class="content-wrapper">
      <div class="text-content">
        <h2 class="section-title">Sobre Mim</h2>
        <h1 class="main-heading">Desenvolvedor Front-End & Designer de UX</h1>

        <p class="paragraph">
          Olá! Eu sou Ana Clara Coelho, uma profissional apaixonada por
          transformar ideias em interfaces digitais elegantes e intuitivas.
          Minha trajetória combina a precisão técnica do desenvolvimento
          Front-End com a empatia e o foco no usuário do Design de Experiência
          (UX).
        </p>

        <p class="paragraph">
          Acredito que o código mais bonito é aquele que proporciona a melhor
          experiência ao usuário. Meu objetivo é criar produtos que **encantem**
          e **funcionem**, garantindo que cada interação seja fluida e
          significativa.
        </p>

        <div class="skills">
          <h3 class="skills-title">Minha Expertise</h3>
          <div class="tags-container">
            <span class="skill-tag">Vue.js</span>
            <span class="skill-tag">HTML5 & CSS3</span>
            <span class="skill-tag">JavaScript ES6+</span>
            <span class="skill-tag">UX Research</span>
            <span class="skill-tag">Figma & Prototyping</span>
            <span class="skill-tag">Responsive Design</span>
          </div>
        </div>

        <a
          href="/AnaClara_CV.pdf"
          download="AnaClara_Resume.pdf"
          class="btn-primary"
        >
          Baixar Currículo (PDF)
        </a>
      </div>

      <div class="visual-element">
        <div class="circle-accent"></div>
        <img
          :src="perfilFoto"
          alt="Ana Clara Coelho - Profile Picture"
          class="about-me-photo"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// Ajuste o caminho de importação conforme a sua estrutura (assumindo o caminho que funcionou antes)
import perfilFoto from "../assets/img/perfil.jpg";
</script>

<style scoped>
/* Estilos elegantes e com as cores do seu portfólio (Rosa Suave, Verde Sofisticado, etc.) */

.about-me-section {
  padding: 4rem 0;
}

.content-wrapper {
  display: flex;
  gap: 5rem;
  align-items: center;
}

.text-content {
  flex: 3;
}

.visual-element {
  flex: 2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-secondary);
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.main-heading {
  font-family: "Playfair Display", serif;
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--color-text-title);
  line-height: 1.2;
  margin-bottom: 2rem;
}

.paragraph {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1rem;
}

.skills {
  margin: 2.5rem 0;
}

.skills-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text-title);
  margin-bottom: 1rem;
}

.skill-tag {
  display: inline-block;
  background-color: var(--color-background-soft);
  color: var(--color-text-dark);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  border: 1px solid #e0e0e0;
}

/* Estilo do botão (verde) */
.btn-primary {
  background-color: var(--color-secondary);
  color: var(--color-text-light);
  border: none;
  padding: 0.8rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0 4px 15px rgba(102, 165, 103, 0.4);
}

.btn-primary:hover {
  background-color: #528a54;
}

.about-me-photo {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.circle-accent {
  position: absolute;
  width: 350px;
  height: 350px;
  background-color: var(--color-primary);
  border-radius: 50%;
  top: -20px;
  left: 20px;
  z-index: 1;
  opacity: 0.4;
}

@media (max-width: 900px) {
  .content-wrapper {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
  .visual-element {
    order: -1;
  }
  .tags-container {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
