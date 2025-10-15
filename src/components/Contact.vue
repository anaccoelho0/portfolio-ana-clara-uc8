<template>
  <section class="contact-section">
    <div class="content-wrapper">
      
      <div class="contact-header">
        <h2 class="section-title">Fale Comigo</h2>
        <h1 class="main-heading">Vamos Criar Algo Incrível Juntos.</h1>
        <p class="paragraph">
          Se você tem uma nova ideia de projeto, uma oportunidade de emprego ou apenas quer dizer um "olá", adoraria conversar. Minha caixa de entrada está sempre aberta!
        </p>
      </div>

      <div class="contact-card-container">
        
        <a href="mailto:ana.clara.dev@email.com" class="contact-card email-card" target="_blank">
            <i class="icon fas fa-envelope"></i>
            <h3>E-mail</h3>
            <p>anaclaralcoelho2006@gmail.com</p>
            <span class="action-link">Enviar E-mail &rarr;</span>
        </a>

        <a href="https://www.linkedin.com/in/ana-clara-lopes-coelho-da-silva-070460232" class="contact-card linkedin-card" target="_blank">
            <i class="icon fab fa-linkedin"></i>
            <h3>LinkedIn</h3>
            <p>/ana-clara-lopes-coelho-da-silva</p>
            <span class="action-link">Ver Perfil &rarr;</span>
        </a>

        <a href="https://github.com/anaccoelho0" class="contact-card github-card" target="_blank">
            <i class="icon fab fa-github"></i>
            <h3>GitHub</h3>
            <p>/anaccoelho0</p>
            <span class="action-link">Ver Repositórios &rarr;</span>
        </a>
      </div>

      <div class="contact-form-wrapper">
          <h3 class="form-subtitle">Ou Envie uma Mensagem Rápida</h3>
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group-inline">
                <input type="text" id="name" placeholder="Seu Nome" required>
                <input type="email" id="email" placeholder="Seu Email" required>
            </div>
            
            <div class="form-group">
              <textarea id="message" rows="5" placeholder="Fale sobre seu projeto ou oportunidade..." required></textarea>
            </div>
            
            <button type="submit" class="btn-primary">Enviar Mensagem</button>
          </form>
      </div>

    </div>
  </section>
</template>

<script setup>
const submitForm = () => {
  alert('Mensagem enviada! (Esta é uma ação de placeholder.)');
};
</script>

<style scoped>
/* CORES E ESTILOS MANTIDOS, pois já refletem seu branding. */

.contact-section {
  padding: 6rem 0;
}

.contact-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3.5rem auto;
}

.section-title {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-secondary); /* Verde Sofisticado */
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.main-heading {
  font-family: 'Playfair Display', serif;
  font-size: 2.6rem;
  font-weight: 700;
  color: var(--color-text-title);
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.paragraph {
  font-size: 1rem;
  color: #555;
}

/* --- ESTILOS DOS CARTÕES (CARDS) --- */

.contact-card-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem auto;
}

.contact-card {
  flex: 1;
  text-align: center;
  padding: 2.5rem 1.5rem;
  border-radius: 12px;
  background-color: var(--color-card-contact, #CCB2A8); /* Marrom Suave */
  color: var(--color-text-light); /* Cor de texto claro */
  text-decoration: none;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.contact-card .icon {
  font-size: 2.5rem;
  color: #fff; /* Ícones em branco */
  margin-bottom: 1rem;
}

.contact-card h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #fff;
}

.contact-card p {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 1rem;
  color: #fff;
}

.action-link {
    font-size: 0.85rem;
    font-weight: 600;
    color: #fff;
    border-bottom: 2px solid #fff;
    padding-bottom: 2px;
}


/* --- ESTILOS DO FORMULÁRIO --- */

.contact-form-wrapper {
    max-width: 650px;
    margin: 0 auto;
    padding: 2.5rem;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.form-subtitle {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--color-text-title);
    text-align: center;
    margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group-inline {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}

.form-group-inline input {
    flex: 1;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem 1.2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--color-secondary); 
  outline: none;
}

.btn-primary {
  display: block; 
  width: fit-content;
  margin: 0 auto;
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

/* Responsive adjustments */
@media (max-width: 900px) {
  .contact-card-container {
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 1.5rem;
  }
  
  .form-group-inline {
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>