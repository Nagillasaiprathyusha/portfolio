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

    <!-- About Me Section -->
    <section id="about-me">
      <div class="content-box">
        <h2 class="about-heading">About Me</h2>
        <p>Hi, I’m Sai Prathyusha Nagilla, recently completed MSc in Data Science from St. Francis College for Women in Hyderabad. Skilled in Python, R, SQL, Machine learning, AI, Deep learning, HTML, CSS, JavaScript, and PHP.</p>

        <!-- Objective Section -->
        <div class="content-section">
          <h3>Objective</h3>
          <p>
            Seeking a challenging position in a reputed company where I can learn new skills, expand my knowledge, and leverage my learnings to create value for my prospective employer through my dedicated and diligent efforts.
          </p>
        </div>

        <!-- Experience Section -->
        <div class="content-section">
          <h3>Experience</h3>
          <p>
            <strong>Data Science Intern</strong><br />
            Data Science intern at Oasis Infobyte, Hyderabad, Telangana. My internship experience was a valuable learning opportunity where I gained practical knowledge in the field I am passionate about. I completed various tasks using Python (Jupyter Notebook).
          </p>
        </div>

        <!-- Education Section -->
        <div class="content-section">
          <h3>Education</h3>
          <p>
            <strong>Master's in Data Science</strong><br />
            St. Francis College for Women, Hyderabad<br />
            CGPA: 8.42
          </p>
          <p>
            <strong>Bachelor's in Math, Physics, Computer Science</strong><br />
            St. Francis College for Women, Hyderabad<br />
            CGPA: 7.89
          </p>
        </div>

        <!-- Leadership Section -->
        <div class="content-section">
          <h3>Leadership</h3>
          <p>
            Student Quality Circle (SQC) Representative (2022-2024)
          </p>
        </div>
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
  background-image: url('~/assets/images/1.jpeg'); /* Set background image */
  background-size: cover; /* Cover the entire section */
  background-position: center; /* Center the image */
  min-height: 100vh; /* Full height of the viewport */
  padding: 20px; /* Padding for the section */
}

/* Navigation Bar Styles */
header {
  background-color: rgba(51, 51, 51, 0.8); /* Semi-transparent background */
  padding: 8px 0;
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

/* About Me Section Styling */
section {
  margin-top: 20px; /* Adjusted margin to account for fixed header */
}

/* Content Box Styling */
.content-box {
  background-color: rgba(255, 255, 255, 0.8); /* White background with transparency */
  padding: 20px;
  border-radius: 20px;
  max-width: 1100px;
  margin: 0 auto; /* Center the box */
}

/* Subtle styling for sections (Objective, Experience, Education, Leadership) */
.content-section {
  background-color: rgba(240, 240, 240, 0.8); /* Subtle background to distinguish sections */
  padding: 15px;
  margin: 20px 0;
  border-radius: 10px;
}

/* Center the About Me heading */
.about-heading {
  text-align: center;
  color: #2c3e50; /* Darker shade for heading */
  margin-bottom: 10px;
  font-size: 2.5rem;
  text-transform: uppercase;
}

/* Styling for section headings */
h3 {
  margin-top: 0;
  color: #2980b9; /* Blue color for section titles */
}

a:hover {
  color: red; 
}

p {
  color: #333; /* Dark text for readability */
}
</style>
