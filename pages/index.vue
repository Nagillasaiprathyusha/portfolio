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

    <!-- Main Content -->
    <main>
      <!-- Greeting Line -->
      <p class="intro-text">Hello, my name is</p>

      <!-- Your Name with Animation -->
      <h1 class="animated infinite heartBeat">Sai Prathyusha Nagilla</h1>

      <!-- Data Science Degree with Highlight -->
      <div class="degree-box">
        <p class="degree">MSc Data Science</p>
      </div>

      <!-- Description Section -->
      <p class="description">
        A passionate IT professional with a keen interest in Data Science, Machine Learning, 
        Artificial Intelligence, and Deep Learning. With a strong foundation in Python and 
        hands-on experience in building software solutions.
      </p>
      
      <!-- Actively Seeking Opportunities Line -->
      <p class="seeking-opportunities">
        I am actively seeking opportunities in data science and software engineering. 
        I am eager to apply my skills in problem-solving, analytical thinking, and 
        innovation to contribute to cutting-edge projects and drive business growth.
      </p>

      <!-- "View My Projects" Button -->
      <div class="projects-box">
        <nuxt-link to="/projects" class="projects-link">View My Projects</nuxt-link>
      </div>

      <!-- Email Button -->
      <div class="email-box">
        <a href="mailto:saiprathyusha4121@gmail.com" class="email-link">Send Me an Email</a>
      </div>
    </main>
  </div>
</template>

<script setup>
// No script setup needed for now
</script>

<style scoped>
/* Full Page Background */
.background {
  background-image: url('~/assets/images/2.jpeg'); /* Full page background image */
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

/* Navigation Bar Styles */
header {
  background-color: rgba(51, 51, 51, 0.8);
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

/* Main Content Styling */
main {
  padding-top: 10px; /* To avoid overlap with the fixed header */
  text-align: center;
  color: #333;
}

/* Greeting Line */
.intro-text {
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
}

/* Name Animation Styling */
h1 {
  color: #333;
  margin-top: 10px;
  font-size: 48px;
  font-weight: bold;
}

/* MSc Data Science with Highlight Box */
.degree-box {
  background-color: #000; /* Black background */
  display: inline-block;
  padding: 10px;
  border-radius: 5px;
  margin-top: 5px;
}

.degree {
  color: #fff; /* White text */
  font-size: 18px;
  margin: 0;
}

/* Description Section */
.description {
  margin-top: 20px;
  font-size: 18px; /* Increased font size */
  color: #000; /* Changed color to black */
  max-width: 600px;
  line-height: 1.8; /* Slightly increased line height */
}

/* Seeking Opportunities */
.seeking-opportunities {
  margin-top: 20px;
  font-size: 18px; /* Increased font size */
  color: #000; /* Changed color to black */
  max-width: 600px;
  line-height: 1.8; /* Slightly increased line height */
}

/* Heartbeat Animation */
@keyframes heartBeat {
  0% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.3);
  }
  28% {
    transform: scale(1);
  }
}

.animated {
  animation-duration: 1.5s;
  animation-fill-mode: both;
}

.infinite {
  animation-iteration-count: infinite;
}

.heartBeat {
  animation-name: heartBeat;
}

/* "View My Projects" Box */
.projects-box {
  background: #FF6347;
  color: #000;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: inline-block;
  margin-top: 30px;
}

.projects-link {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
}

.projects-link:hover {
  text-decoration: underline;
  color: black;
}

/* Email Button Styling */
.email-box {
  margin-top: 20px;
  background-color: #5cb85c;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: inline-block;
}

.email-link {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
}

a:hover {
  color: red;
}

.email-link:hover {
  text-decoration: underline;
  color: black;
}
</style>
