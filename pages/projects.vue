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

    <!-- Projects Section -->
    <section id="projects">
      <h2>PROJECTS</h2>
      <div class="project-list">
        <div class="project" v-for="project in projects" :key="project.id">
          <h3><b>{{ project.title }}</b></h3>
          <p>{{ project.description }}</p>
          <h5><b>Skills Used:</b> {{ project.skills }}</h5>
          <div class="link-box">
            <a :href="project.link" target="_blank">Link to view my project</a> <!-- Project Link -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const projects = ref([]);

// Mock data for testing purposes
const mockProjects = [
  {
    id: 1,
    title: "Image Segmentation",
    description: "Developed an image segmentation system using deep learning and computer vision techniques, utilizing the COCO 2014 dataset.",
    skills: "Deep learning, Python Programming, Problem Solving",
    link: "https://github.com/Nagillasaiprathyusha/Image_segmentation", // Project link
  },
  {
    id: 2,
    title: "Predicting Wine Quality Through ML Technique",
    description: "Utilized Python and various machine learning algorithms to analyze the Wine Quality dataset.",
    skills: "Python, Keras, TensorFlow",
    link: "https://github.com/Nagillasaiprathyusha/wine-quality-ML-project.git", // Project link
  },
  {
    id: 3,
    title: "Speaker Recognition",
    description: "Employs audio recordings and machine learning for speaker identification.",
    skills: "Google Colab, Python",
    link: "https://github.com/Nagillasaiprathyusha/Speaker-recognition-ML-project", // Project link
  },
  {
    id: 4,
    title: "Amazon Sales in India",
    description: "Comprehensive analysis of Amazon's Sales data through Tableau.",
    skills: "Tableau",
    link: "https://github.com/Nagillasaiprathyusha/Amazon-sales-in-India", // Project link
  },
  {
    id: 5,
    title: "Online Gym Management System",
    description: "Developed a web-based Gym Management System enabling users to book gym packages and access videos.",
    skills: "HTML, CSS, PHP",
    link: "https://github.com/Nagillasaiprathyusha/Gym-Management-System", // Project link
  },
];

// Function to fetch projects
const fetchProjects = async () => {
  projects.value = mockProjects;
};

onMounted(fetchProjects);
</script>

<style scoped>
/* Full Page Background */
.background {
  background-image: url('~/assets/images/1.jpeg'); /* Use your background image */
  background-size: cover; /* Cover entire section */
  background-position: center; /* Center the image */
  min-height: 100vh; /* Full page height */
  padding: 20px;
}

/* Navigation Bar Styles */
header {
  background-color: rgba(51, 51, 51, 0.8); /* Semi-transparent background */
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

/* Projects Section Styling */
section {
  padding-top: 15px; /* Add padding to avoid overlap with fixed header */
  text-align: center; /* Center heading */
}

h2 {
  font-size: 2.5rem; /* Larger heading size */
  margin: 0;
  padding-top: 10px;
  margin-bottom: 20px;
  color: #3498db; /* Change color to blue or any preferred color */
}

.project-list {
  display: flex;
  flex-wrap: wrap; /* Ensure items wrap to the next line */
  justify-content: center; /* Center the items horizontally */
  gap: 20px; /* Space between the project cards */
}

.project {
  flex: 1 1 300px; /* Allow each project to take up at least 300px, but grow if there is more space */
  max-width: 300px; /* Ensure no project exceeds 300px in width */
  background-color: rgba(255, 255, 255, 0.9); /* Slightly transparent white background */
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Light shadow */
  transition: transform 0.2s;
}


.project:hover {
  transform: translateY(-5px); /* Lift effect on hover */
}

.project h3 {
  color: #27ae60; /* Green for project titles */
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.project p {
  color: #2c3e50;
}

.project h5 {
  color: #e74c3c; /* Red for skills used */
}

.link-box {
  background-color: #dff9d8; /* Light green background for link box */
  border: 1px solid #28a745; /* Green border */
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
}

.link-box a {
  color: #000; /* Black text */
  text-decoration: none;
}

.link-box a:hover {
  text-decoration: underline; /* Underline on hover */
}

a:hover {
  color: red;
}

@media (max-width: 768px) {
  .project {
    width: 100%;
  }
}
</style>
