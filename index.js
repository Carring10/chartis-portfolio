const effects = [
  { element: document.getElementById('circle'), style: 'circle', color: 'rgba(169, 222, 249, 0.5)' },
  { element: document.getElementById('highlight-red'), style: 'highlight', color: 'rgba(247, 181, 186, 0.5)' },
  { element: document.getElementById('highlight-violet'), style: 'highlight', color: 'rgba(219, 205, 240, 0.5)' },
  { element: document.getElementById('highlight-green'), style: 'highlight', color: 'rgba(206, 241, 186, 0.5)' },
  { element: document.getElementById('highlight-pink'), style: 'highlight', color: 'rgba(250, 210, 225, 0.5)' },
  { element: document.getElementById('highlight-yellow'), style: 'highlight', color: 'rgba(250, 237, 203, 0.5)' }
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function showAnnotationsSequentially() {
  if (!window.RoughNotation) {
    console.error('RoughNotation not loaded');
    return;
  }

  for (const { element, style, color } of effects) {
    if (element) {
      const annotation = RoughNotation.annotate(element, {
        type: style,
        color: color,
        animationDuration: 800
      });
      annotation.show();
      await sleep(1500);
    }
  }
}

showAnnotationsSequentially();