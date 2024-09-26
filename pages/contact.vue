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

    <!-- Contact Section -->
    <section class="contact-section">
      <h2>CONTACT ME</h2>
      <!-- Display your own name and email outside the form -->
      <div class="personal-info">
        <p style="font-size: 22px;"><strong>Name:</strong> Sai Prathyusha Nagilla</p>
        <p style="font-size: 20px;">Email: <a href="mailto:saiprathyusha4121@gmail.com" style="font-size: 20px;">saiprathyusha4121@gmail.com</a></p>
      </div>

      <form>
      
        <!-- LinkedIn Link -->
        <label for="linkedin" style="font-size: 18px;">LinkedIn:</label>
        <a href="https://www.linkedin.com/in/saiprathyushanagilla" target="_blank" id="linkedin" style="font-size: 18px;">
          Connect on LinkedIn
        </a>

        <!-- GitHub Link -->
        <label for="github" style="font-size: 18px;">GitHub:</label>
        <a href="https://github.com/Nagillasaiprathyusha" target="_blank" id="github" style="font-size: 18px;">
          Check my GitHub
        </a>

      </form>
    </section>
  </div>
</template>

<style scoped>
/* Full Page Background */
.background {
  background-image: url('~/assets/images/1.jpeg'); /* Use your background image */
  background-size: cover; /* Ensure the image covers the entire background */
  background-position: center; /* Center the background image */
  min-height: 100vh; /* Full page height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

/* Contact Section Styling */
.contact-section {
  background-color: rgba(255, 255, 255, 0.8); /* Light background with transparency */
  padding: 20px 40px; /* Reduced padding for less height */
  border-radius: 10px;
  text-align: center;
  max-width: 700px; /* Increased width */
  margin-top: 20px; /* Space from the top, accounting for the fixed header */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow */
}

/* Personal Info Styles */
.personal-info p {
  font-size: 18px;
  color: #2c3e50;
}

.personal-info a {
  color: #0077b5;
  text-decoration: none;
}

.personal-info a:hover {
  color: #e74c3c;
}

/* Form Styles */
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

label {
  margin-top: 10px;
  font-size: 16px;
}

input {
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 600px; /* Increased input width */
}

a {
  color: #0077b5;
  margin-top: 5px;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 10px;
  font-size: 18px; /* Increased font size for links */
}

a:hover {
  color: #e74c3c;
}

button {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #5cb85c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #4cae4c;
}
</style>
