// Fetch papers from the provided URL
fetch('https://upadhayay.github.io/db.json')
  .then(response => response.json())
  .then(data => {
    const papers = data.papers;

    // Get the container element for the papers
    const papersContainer = document.getElementById('papers-container');

    // Loop through each paper and create a block element for it
    papers.forEach(paper => {
      // Create a link element for the paper
      const link = document.createElement('a');
      link.href = paper.url;
      link.target = 'https://archive.org/details/in.ernet.dli.2015.547677/page/n3/mode/2up';

      // Create a div element for the paper block
      const paperBlock = document.createElement('div');
      paperBlock.classList.add('paper-block');

      // Create an image element for the paper icon
      const paperIcon = document.createElement('img');
      paperIcon.src = 'paper-icon.png';
      paperIcon.alt = 'paper icon';

      // Create a span element for the paper title
      const paperTitle = document.createElement('span');
      paperTitle.classList.add('paper-title');
      paperTitle.textContent = paper.title;

      // Append the paper icon and title to the paper block
      paperBlock.appendChild(paperIcon);
      paperBlock.appendChild(paperTitle);

      // Append the paper block to the link element
      link.appendChild(paperBlock);

      // Append the link element to the papers container
      papersContainer.appendChild(link);
    });
  })
  .catch(error => {
    console.error('Error fetching papers:', error);
  });
