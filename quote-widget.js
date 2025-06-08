(function () {
  const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don't let yesterday take up too much of today.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently."
  ];

  // Create style element
  const style = document.createElement("style");
  style.textContent = `
    #quote-widget {
      position: fixed;
      top: 100px;
      right: -320px;
      width: 300px;
      padding: 10px;
      background-color: #fff;
      border: 2px solid #ccc;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      font-family: sans-serif;
      transition: right 0.3s ease;
      z-index: 1000;
    }

    #quote-toggle {
      position: fixed;
      top: 100px;
      right: 0;
      background-color: #4CAF50;
      color: white;
      padding: 10px;
      font-size: 14px;
      cursor: pointer;
      border-radius: 5px 0 0 5px;
      z-index: 1001;
    }

    #quote-widget.open {
      right: 0;
    }
  `;
  document.head.appendChild(style);

  // Create toggle button
  const toggle = document.createElement("div");
  toggle.id = "quote-toggle";
  toggle.innerText = "Quote";

  // Create widget container
  const widget = document.createElement("div");
  widget.id = "quote-widget";

  const heading = document.createElement("h3");
  heading.innerText = "Quote of the Day";

  const quoteText = document.createElement("p");
  quoteText.innerText = quotes[Math.floor(Math.random() * quotes.length)];

  widget.appendChild(heading);
  widget.appendChild(quoteText);

  // Add elements to the page
  document.body.appendChild(toggle);
  document.body.appendChild(widget);

  // Toggle widget open/close
  toggle.addEventListener("click", () => {
    widget.classList.toggle("open");
  });
})();
