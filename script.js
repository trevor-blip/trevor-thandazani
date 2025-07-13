// Enhanced Modern Romantic Love Story - JavaScript (Performance Optimized)

document.addEventListener("DOMContentLoaded", function () {
  // Set romantic background music volume
  const bgMusic = document.getElementById("bg-music");
  if (bgMusic) {
    bgMusic.volume = 0.25; // Gentle romantic volume
  }

  // Play buttons for music (required for autoplay restrictions)
  const playBtns = document.querySelectorAll(".play-music-btn");
  if (playBtns.length && bgMusic) {
    playBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        bgMusic.play();
        playBtns.forEach((b) => (b.style.display = "none")); // Hide all buttons after playing
      });
    });
  }

  // Initialize all features
  initFloatingElements();
  initScrollAnimations();
  initInteractiveElements();
  initParallaxEffects();
  initTypingEffect();
});

// Enhanced Floating Elements Animation (Hearts + Images) - OPTIMIZED
function initFloatingElements() {
  const hearts = document.querySelector(".hearts");
  const heartEmojis = ["💖", "💕", "💗", "💓", "💝", "💘", "💞", "💟"];

  // REDUCED: Add fewer floating hearts for better performance
  for (let i = 0; i < 12; i++) {
    // Reduced from 25 to 12
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 25 + 15 + "px";
    heart.style.animationDuration = Math.random() * 8 + 6 + "s";
    heart.style.animationDelay = Math.random() * 5 + "s";
    heart.textContent =
      heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    hearts.appendChild(heart);
  }

  // Add floating images with different shapes - OPTIMIZED
  const floatingImages = [
    "Love story/20250126_174400.jpg",
    "Love story/20250126_174357.jpg",
    "Love story/ChatGPT Image Mar 31, 2025, 08_31_32 PM.png",
    "Love story/IMG-20250120-WA0017.jpg",
    "Love story/20250101_124702.jpg",
    "Love story/IMG-20250331-WA0015.jpg",
    "Love story/Screenshot_20250713_042129_WhatsApp.jpg",
    "Love story/20250101_115946.jpg",
    "Love story/IMG-20250120-WA0016.jpg",
    "Love story/IMG-20250217-WA0007.jpg",
    "Love story/20250101_124455.jpg",
    "Love story/IMG-20250217-WA0011.jpg",
    "Love story/Screenshot_20250713_042119_WhatsApp.jpg",
    "Love story/Screenshot_20250713_042159_WhatsApp.jpg",
    "Love story/IMG-20250217-WA0015.jpg",
    "Love story/Screenshot_20250713_041917_WhatsApp.jpg",
    "Love story/Screenshot_20250713_041352_WhatsApp.jpg",
    "Love story/Screenshot_20250713_042018_WhatsApp.jpg",
    "Love story/Screenshot_20250713_041533_WhatsApp.jpg",
    "Love story/Screenshot_20250713_042028_WhatsApp.jpg",
    "Love story/Screenshot_20250713_041707_WhatsApp.jpg",
    "Love story/Screenshot_20250713_041345_WhatsApp.jpg",
    "Love story/Screenshot_20250713_041523_WhatsApp.jpg",
    "Love story/Screenshot_20250713_041236_WhatsApp.jpg",
    "Love story/Screenshot_20250713_040234_WhatsApp.jpg",
    "Love story/Screenshot_20250713_041039_WhatsApp.jpg",
    "Love story/Screenshot_20250713_041309_WhatsApp.jpg",
    "Love story/Screenshot_20250713_041245_WhatsApp.jpg",
    "Love story/Screenshot_20250713_041251_WhatsApp.jpg",
    "Love story/Screenshot_20250713_040336_WhatsApp.jpg",
    "Love story/Screenshot_20250713_035743_WhatsApp.jpg",
    "Love story/Screenshot_20250713_040001_WhatsApp.jpg",
    "Love story/Screenshot_20250713_040118_WhatsApp.jpg",
    "Love story/Screenshot_20250713_035822_WhatsApp.jpg",
    "Love story/Screenshot_20250713_035638_WhatsApp.jpg",
    "Love story/Photo from Trevor (3).jpg",
    "Love story/Photo from Trevor (2).jpg",
    "Love story/Photo from Trevor (1).jpg",
    "Love story/Photo from Trevor.jpg",
    "Love story/IMG-20250505-WA0004.jpg",
    "Love story/IMG-20250331-WA0015.jpg",
  ];

  // Different shapes for variety - optimized for chat screenshots
  const shapes = [
    "15px", // Rounded rectangle - perfect for chat screenshots
    "20px", // Rounded square
    "10px", // Slightly rounded
    "25px", // More rounded
    "12px", // Medium rounded
    "18px", // Balanced rounded
    "8px", // Minimal rounded
    "22px", // Generously rounded
  ];

  // REDUCED: Show fewer images at once for better performance
  const maxImages = 15; // Reduced from all images to 15
  const selectedImages = floatingImages.slice(0, maxImages);

  for (let i = 0; i < selectedImages.length; i++) {
    const image = document.createElement("img");
    image.className = "floating-image";
    image.src = selectedImages[i];
    image.alt = "Floating memory";
    image.style.left = Math.random() * 100 + "vw";
    image.style.animationDuration = Math.random() * 10 + 8 + "s";
    image.style.animationDelay = Math.random() * 3 + "s";
    image.style.width = Math.random() * 60 + 180 + "px"; // Random size between 180-240px
    image.style.height = "auto";
    image.style.borderRadius = shapes[i % shapes.length]; // Different shapes
    image.style.border = "4px solid rgba(255, 255, 255, 0.4)";
    image.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.3)";
    image.style.cursor = "pointer";

    // Add click effect to images
    image.addEventListener("click", function () {
      createImageBurst(this);
    });

    hearts.appendChild(image);
  }
}

// Image burst effect when clicked - OPTIMIZED
function createImageBurst(element) {
  const rect = element.getBoundingClientRect();
  const burstContainer = document.createElement("div");
  burstContainer.style.position = "fixed";
  burstContainer.style.left = rect.left + rect.width / 2 + "px";
  burstContainer.style.top = rect.top + rect.height / 2 + "px";
  burstContainer.style.pointerEvents = "none";
  burstContainer.style.zIndex = "1000";

  document.body.appendChild(burstContainer);

  // REDUCED: Fewer sparkles for better performance
  for (let i = 0; i < 8; i++) {
    // Reduced from 12 to 8
    const sparkle = document.createElement("div");
    sparkle.textContent = "✨";
    sparkle.style.position = "absolute";
    sparkle.style.fontSize = "15px";
    sparkle.style.transform = "translate(-50%, -50%)";
    sparkle.style.animation = `sparkleBurst 1.5s ease-out forwards`;
    sparkle.style.animationDelay = `${i * 0.1}s`;

    const angle = i * 45 * (Math.PI / 180); // Changed from 30 to 45 degrees
    const distance = 80;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    sparkle.style.setProperty("--x", x + "px");
    sparkle.style.setProperty("--y", y + "px");

    burstContainer.appendChild(sparkle);
  }

  // Add CSS animation for sparkle burst
  if (!document.querySelector("#sparkle-burst-styles")) {
    const style = document.createElement("style");
    style.id = "sparkle-burst-styles";
    style.textContent = `
            @keyframes sparkleBurst {
                0% {
                    transform: translate(-50%, -50%) scale(0) rotate(0deg);
                    opacity: 1;
                }
                50% {
                    transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(1.5) rotate(180deg);
                    opacity: 1;
                }
                100% {
                    transform: translate(calc(-50% + var(--x) * 1.5), calc(-50% + var(--y) * 1.5)) scale(0) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
    document.head.appendChild(style);
  }

  setTimeout(() => {
    if (burstContainer.parentNode) {
      document.body.removeChild(burstContainer);
    }
  }, 2000);
}

// Scroll Animations - OPTIMIZED
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("fade-in");
    observer.observe(section);
  });
}

// Interactive Elements - OPTIMIZED
function initInteractiveElements() {
  // Cache DOM queries
  const galleryImages = document.querySelectorAll(".gallery img");
  const timelineItems = document.querySelectorAll(".timeline-item");

  // Gallery image click effects
  galleryImages.forEach((img) => {
    img.addEventListener("click", function () {
      createHeartBurst(this);
    });

    // Add hover sound effect simulation
    img.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05) rotate(2deg)";
    });

    img.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)";
    });
  });

  // Timeline item interactions
  timelineItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(10px) scale(1.02)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0) scale(1)";
    });
  });
}

// Parallax Effects - MAJOR OPTIMIZATION
function initParallaxEffects() {
  let ticking = false;
  const parallaxElements = document.querySelectorAll("section");

  // Throttled scroll handler using requestAnimationFrame
  function updateParallax() {
    const scrolled = window.pageYOffset;

    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + index * 0.1;
      element.style.transform = `translateY(${scrolled * speed * 0.1}px)`;
    });

    ticking = false;
  }

  // Throttled scroll event listener
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    },
    { passive: true }
  ); // Added passive for better performance
}

// Typing Effect for Header
function initTypingEffect() {
  const headerTitle = document.querySelector("header h1");
  const originalText = headerTitle.textContent;
  headerTitle.textContent = "";

  let i = 0;
  const typeWriter = () => {
    if (i < originalText.length) {
      headerTitle.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, 150);
    }
  };

  // Start typing effect after a short delay
  setTimeout(typeWriter, 1000);
}

// Heart Burst Effect - OPTIMIZED
function createHeartBurst(element) {
  const rect = element.getBoundingClientRect();
  const burstContainer = document.createElement("div");
  burstContainer.style.position = "fixed";
  burstContainer.style.left = rect.left + rect.width / 2 + "px";
  burstContainer.style.top = rect.top + rect.height / 2 + "px";
  burstContainer.style.pointerEvents = "none";
  burstContainer.style.zIndex = "1000";

  document.body.appendChild(burstContainer);

  // REDUCED: Fewer hearts for better performance
  for (let i = 0; i < 6; i++) {
    // Reduced from 8 to 6
    const heart = document.createElement("div");
    heart.textContent = "💖";
    heart.style.position = "absolute";
    heart.style.fontSize = "20px";
    heart.style.transform = "translate(-50%, -50%)";
    heart.style.animation = `heartBurst 1s ease-out forwards`;
    heart.style.animationDelay = `${i * 0.1}s`;

    const angle = i * 60 * (Math.PI / 180); // Changed from 45 to 60 degrees
    const distance = 100;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    heart.style.setProperty("--x", x + "px");
    heart.style.setProperty("--y", y + "px");

    burstContainer.appendChild(heart);
  }

  // Add CSS animation for heart burst
  if (!document.querySelector("#heart-burst-styles")) {
    const style = document.createElement("style");
    style.id = "heart-burst-styles";
    style.textContent = `
            @keyframes heartBurst {
                0% {
                    transform: translate(-50%, -50%) scale(0);
                    opacity: 1;
                }
                50% {
                    transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(1.5);
                    opacity: 1;
                }
                100% {
                    transform: translate(calc(-50% + var(--x) * 1.5), calc(-50% + var(--y) * 1.5)) scale(0);
                    opacity: 0;
                }
            }
        `;
    document.head.appendChild(style);
  }

  setTimeout(() => {
    if (burstContainer.parentNode) {
      document.body.removeChild(burstContainer);
    }
  }, 2000);
}

// Smooth Scrolling for Navigation
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Add some romantic text effects
function addTextEffects() {
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((p) => {
    p.addEventListener("mouseenter", function () {
      this.style.textShadow = "0 0 10px rgba(255, 255, 255, 0.5)";
    });

    p.addEventListener("mouseleave", function () {
      this.style.textShadow = "none";
    });
  });
}

// Initialize additional features
document.addEventListener("DOMContentLoaded", function () {
  initSmoothScrolling();
  addTextEffects();

  // Add a romantic message that appears after scrolling
  setTimeout(() => {
    showRomanticMessage();
  }, 3000);
});

// Show romantic message
function showRomanticMessage() {
  const romanticMessages = [
    "💕 Every moment with you is magical, Thandazani 💕",
    "💖 Trevor Loves you more each day 💖",
    "💕 You make my world complete, Thandazani 💕",
    "💖 Forever yours, Trevor 💖",
    "💕 Our Love story is just beginning 💕",
  ];

  const randomMessage =
    romanticMessages[Math.floor(Math.random() * romanticMessages.length)];
  const message = document.createElement("div");
  message.innerHTML = randomMessage;
  message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        padding: 15px 25px;
        border-radius: 25px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        font-family: 'Dancing Script', cursive;
        font-size: 1.2rem;
        color: white;
        z-index: 1000;
        animation: slideInRight 0.5s ease-out;
        cursor: pointer;
    `;

  // Add animation CSS
  if (!document.querySelector("#slide-in-styles")) {
    const style = document.createElement("style");
    style.id = "slide-in-styles";
    style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
    document.head.appendChild(style);
  }

  document.body.appendChild(message);

  // Remove message after 5 seconds
  setTimeout(() => {
    message.style.animation = "slideInRight 0.5s ease-out reverse";
    setTimeout(() => {
      if (message.parentNode) {
        document.body.removeChild(message);
      }
    }, 500);
  }, 5000);

  // Click to remove
  message.addEventListener("click", () => {
    message.style.animation = "slideInRight 0.5s ease-out reverse";
    setTimeout(() => {
      if (message.parentNode) {
        document.body.removeChild(message);
      }
    }, 500);
  });
}
