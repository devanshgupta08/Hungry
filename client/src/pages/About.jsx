// AboutPage.js

import React from 'react';
import '../pages/About.css'
const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>ZeroWasteFeast: Bridging Plates, Breaking Chains</h1>

      {/* Introduction */}
      <section className="introduction">
        <h2>Welcome to ZeroWasteFeast</h2>
        <p>
          In a world where food wastage coexists with hunger, we've embarked on a mission to create a seamless bridge between abundance and need. Our platform harnesses the power of technology to ensure that no plate goes wasted, and no one goes to bed hungry.
        </p>
      </section>

      {/* About Us */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          At ZeroWasteFeast, we've recognized the heartbreaking paradox within our society—while vast amounts of food are left uneaten, countless individuals struggle with hunger and poverty. We are not just a website; we are a movement that seeks to redefine the narrative around food wastage and hunger.
        </p>
      </section>

      {/* Our Purpose */}
      <section className="our-purpose">
        <h2>Our Purpose</h2>
        <p>
          Our primary goal is to revolutionize the way surplus food is managed, especially in college messes, parties, weddings, and other functions. We act as the intermediary, connecting generous donors with surplus food to NGOs and individuals committed to alleviating hunger in their communities.
        </p>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>
          Through our user-friendly platform developed with React, we've made it easier than ever to make a difference. Donors can simply post their live location and details about the surplus food they have, ensuring that those in need can easily locate and access it. Our website facilitates direct communication between donors and NGOs, fostering a sense of community and shared responsibility.
        </p>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li><strong>Real-Time Food Locator:</strong> Our live location feature ensures that surplus food is not only identified but can be claimed by those who need it, all in real-time.</li>
          <li><strong>NGO Collaboration:</strong> We partner with NGOs dedicated to eradicating hunger, facilitating a streamlined process for them to connect with food donors.</li>
          <li><strong>Community Impact:</strong> Track the positive impact of your contributions through our interactive dashboard. See the number of meals provided, lives touched, and communities strengthened—all in one place.</li>
        </ul>
      </section>

      {/* Join the Movement */}
      <section className="join-the-movement">
        <h2>Join the Movement</h2>
        <p>
          ZeroWasteFeast isn't just a platform; it's a call to action. Join us in the fight against food wastage and hunger. Be a part of a community that believes in making a difference—one meal at a time.
        </p>
      </section>

      {/* Closing Statement */}
      <section className="closing-statement">
        <p>
          Let's bridge plates, break chains, and nourish lives together with ZeroWasteFeast.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
