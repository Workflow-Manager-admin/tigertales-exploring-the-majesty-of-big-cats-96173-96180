import React from 'react';
import './App.css';

/**
 * TigerTales: Exploring the Majesty of Big Cats
 * Main Container Component
 * 
 * This component serves as the primary layout/entry point for the TigerTales blog.
 * It provides structure for thematic child components to be plugged in later.
 */
function App() {
  return (
    <div className="app">
      {/* Header/Navigation Section */}
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <a href="/" className="tiger-logo">
              <span className="logo-symbol">🐯</span> TigerTales
            </a>
            <div>
              {/* Navigation links placeholder - to be replaced with actual navigation component */}
              <button className="btn">Conservation</button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <div className="container">
          <div className="hero">
            <div className="subtitle">Welcome to</div>
            
            <h1 className="title">TigerTales: Exploring the Majesty of Big Cats</h1>
            
            <div className="description">
              A comprehensive blog dedicated to exploring the world of tigers, 
              their conservation, habitat, behavior, and fascinating facts about these magnificent big cats.
            </div>
            
            <button className="btn btn-large">Discover Tigers</button>
          </div>
        </div>

        {/* Main Blog Content Area with Sidebar */}
        <div className="container">
          <div className="content-area">
            {/* Main Content Area */}
            <div className="main-content">
              <h2 className="section-title">Featured Articles</h2>
              
              {/* Article Cards Placeholder - to be replaced with actual article components */}
              <div className="article-card">
                <div className="article-image">
                  {/* Article image placeholder - to be replaced with actual images */}
                  <div>Article Image Placeholder</div>
                </div>
                <div className="article-content">
                  <h3 className="article-title">The Declining Population of Sumatran Tigers</h3>
                  <p className="article-excerpt">
                    Learn about the challenges facing one of the most critically endangered tiger subspecies and conservation efforts...
                  </p>
                  <button className="btn">Read More</button>
                </div>
              </div>
              
              {/* More article placeholders */}
              <div className="article-card">
                <div className="article-image">
                  <div>Article Image Placeholder</div>
                </div>
                <div className="article-content">
                  <h3 className="article-title">A Day in the Life of a Bengal Tiger</h3>
                  <p className="article-excerpt">
                    Explore the daily routine, hunting patterns, and social behaviors of the majestic Bengal tiger in its natural habitat...
                  </p>
                  <button className="btn">Read More</button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="sidebar">
              {/* Categories Section */}
              <div className="sidebar-section">
                <h3 className="sidebar-title">Categories</h3>
                <ul className="category-list">
                  <li><a href="#">Conservation Efforts</a></li>
                  <li><a href="#">Tiger Subspecies</a></li>
                  <li><a href="#">Habitat & Ecosystem</a></li>
                  <li><a href="#">Behavior & Biology</a></li>
                  <li><a href="#">Tigers in Culture</a></li>
                </ul>
              </div>
              
              {/* Popular Tags */}
              <div className="sidebar-section">
                <h3 className="sidebar-title">Popular Tags</h3>
                <div className="tag-cloud">
                  <span className="tag">Conservation</span>
                  <span className="tag">Bengal</span>
                  <span className="tag">Siberian</span>
                  <span className="tag">Endangered</span>
                  <span className="tag">Wildlife</span>
                  <span className="tag">Habitat</span>
                  <span className="tag">Hunting</span>
                  <span className="tag">Cubs</span>
                </div>
              </div>
              
              {/* Recent Posts */}
              <div className="sidebar-section">
                <h3 className="sidebar-title">Recent Posts</h3>
                <ul className="recent-list">
                  <li><a href="#stripes">Why Tiger Stripes Are Unique Like Fingerprints</a></li>
                  <li><a href="#ecosystem">The Role of Tigers in Maintaining Ecosystem Balance</a></li>
                  <li><a href="#success-stories">Tiger Conservation Success Stories from Around the World</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Conservation Section */}
        <div className="conservation-section">
          <div className="container">
            <div className="conservation-content">
              <h2 className="section-title">Conservation Spotlight</h2>
              <p className="description">
                This section will highlight current conservation efforts, challenges, and success stories
                related to protecting tigers and their natural habitats around the world.
              </p>
              <button className="btn btn-large">Support Tiger Conservation</button>
            </div>
          </div>
        </div>
        
        {/* Tiger Facts Section */}
        <div className="facts-section">
          <div className="container">
            <h2 className="section-title">Tiger Facts & Information</h2>
            <div className="fact-cards">
              {/* Fact Card Placeholders - to be replaced with actual fact components */}
              <div className="fact-card">
                <h4>Did You Know?</h4>
                <p>
                  Tigers are the largest cat species in the world, with males weighing up to 660 pounds!
                </p>
              </div>
              <div className="fact-card">
                <h4>Tiger Range</h4>
                <p>
                  Tigers currently live in just 7% of their historical range due to habitat loss and fragmentation.
                </p>
              </div>
              <div className="fact-card">
                <h4>Subspecies</h4>
                <p>
                  There are 6 surviving tiger subspecies: Bengal, Siberian, Sumatran, Malayan, Indochinese, and South China.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Photo Gallery Section */}
        <div className="gallery-section">
          <div className="container">
            <h2 className="section-title" style={{ color: 'white' }}>Tiger Photo Gallery</h2>
            <div className="gallery-container">
              {/* Gallery Item Placeholders - to be replaced with actual gallery components */}
              <div className="gallery-item">Gallery Image 1</div>
              <div className="gallery-item">Gallery Image 2</div>
              <div className="gallery-item">Gallery Image 3</div>
              <div className="gallery-item">Gallery Image 4</div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            {/* About Section */}
            <div className="footer-section">
              <h3>About TigerTales</h3>
              <p>
                TigerTales is dedicated to raising awareness about tiger conservation through education,
                stunning photography, and compelling stories about these magnificent creatures.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Articles</a></li>
                <li><a href="#">Conservation</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            
            {/* Conservation Partners */}
            <div className="footer-section">
              <h3>Conservation Partners</h3>
              <ul>
                <li><a href="#">World Wildlife Fund</a></li>
                <li><a href="#">Global Tiger Forum</a></li>
                <li><a href="#">Panthera</a></li>
                <li><a href="#">Wildlife Conservation Society</a></li>
              </ul>
            </div>
          </div>
          
          <div className="copyright">
            &copy; {new Date().getFullYear()} TigerTales: Exploring the Majesty of Big Cats. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;