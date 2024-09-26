<template>
  <div class="background">
    <!-- Navigation Bar -->
    <header>
      <nav>
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/about">About Me</nuxt-link></li>
          <li><nuxt-link to="/skills">Skills</nuxt-link></li>
          <li><nuxt-link to="/projects">Projects</nuxt-link></li>
          <li><nuxt-link to="/contact">Contact Me</nuxt-link></li>
        </ul>
      </nav>
    </header>

    <!-- Skills Section -->
    <section id="skills">
      <h2 class="skills-heading">Skills</h2>
      <div class="skills-grid">
        <div class="skill-item">HTML</div>
        <div class="skill-item">CSS</div>
        <div class="skill-item">PHP</div>
        <div class="skill-item">JavaScript</div>
        <div class="skill-item">Python</div>
        <div class="skill-item">SQL</div>
        <div class="skill-item">Machine Learning</div>
        <div class="skill-item">Deep Learning</div>
        <div class="skill-item">R</div>
        <div class="skill-item">Tableau</div>
        <div class="skill-item">Visual Studio Code</div>
        <div class="skill-item">Microsoft Excel</div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No script setup needed for now
</script>

<style scoped>
/* Full Page Background */
.background {
  background-image: url('~/assets/images/1.jpeg'); /* Use background image */
  background-size: cover; /* Cover the full page */
  background-position: center;
  min-height: 100vh;
  padding: 20px;
}

/* Navigation Bar Styles */
header {
  background-color: rgba(51, 51, 51, 0.8); /* Semi-transparent */
  padding: 10px 0;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

nav ul li {
  margin: 0 20px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}

nav ul li a:hover {
  text-decoration: underline;
}

/* Skills Section Styling */
section {
  margin-top: 80px; /* Avoid overlap with fixed header */
  text-align: center;
}

.skills-heading {
  font-size: 3rem;
  margin-bottom: 40px;
  color: #f39c12; /* Updated color (example: vibrant orange) */
  text-transform: uppercase;
  letter-spacing: 2px;
}


/* Skills Grid Styling */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Responsive grid */
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.skill-item {
  background-color: rgba(255, 255, 255, 0.8); /* Transparent white */
  padding: 20px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-10px); /* Lift the box slightly on hover */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

a:hover {
  color: red; 
}

/* Media Query for smaller screens */
@media (max-width: 600px) {
  .skills-heading {
    font-size: 2rem;
  }

  .skill-item {
    padding: 15px;
    font-size: 1rem;
  }
}
</style>
