document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('nav a');
  const loadingOverlay = document.getElementById('loading');
  const introContainer = document.getElementById('intro-container');
  const paragraphs = document.querySelectorAll('.intro-paragraphs .paragraph');
  const nextBtn = document.getElementById('nextBtn');

  let currentParagraphIndex = 0;

  function showParagraph(index) {
    paragraphs.forEach((paragraph, i) => {
      const isVisible = i === index;
      paragraph.style.opacity = isVisible ? 1 : 0;
      paragraph.style.pointerEvents = isVisible ? 'auto' : 'none';
    });
  }

  nextBtn.addEventListener('click', function () {
    currentParagraphIndex = (currentParagraphIndex + 1) % paragraphs.length;
    showParagraph(currentParagraphIndex);
  });

  tabs.forEach(tab => {
    tab.addEventListener('click', async function (event) {
      event.preventDefault();

      // Show loading spinner
      if (loadingOverlay) {
        loadingOverlay.style.display = 'flex';
      }

      const targetId = this.getAttribute('href').substring(1);
      const targetTab = document.getElementById(targetId);

      // Hide all tabs
      document.querySelectorAll('.tab-content').forEach(tabContent => {
        tabContent.style.display = 'none';
      });

      // Simulate a delay (you can replace this with actual data loading)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Hide loading spinner
      if (loadingOverlay) {
        loadingOverlay.style.display = 'none';
      }

      // Show the selected tab
      if (targetTab) {
        targetTab.style.display = 'block';
      }

      // Reset paragraph index when switching to the home section
      if (targetId === 'home') {
        currentParagraphIndex = 0;
        showParagraph(currentParagraphIndex);
      }
    });
  });
});


