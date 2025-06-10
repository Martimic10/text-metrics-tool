const input = document.getElementById('text-input');
const wordCount = document.getElementById('word-count');
const charCount = document.getElementById('char-count');
const charNoSpace = document.getElementById('char-nospace-count');
const readTime = document.getElementById('read-time');
const clearBtn = document.getElementById('clear-btn');

function updateStats(text) {
  const words = (text.match(/\b\w+\b/g) || []).length;
  const chars = text.length;
  const noSpaces = text.replace(/\s/g, '').length;
  const minutes = (words / 200).toFixed(2);

  wordCount.textContent = words;
  charCount.textContent = chars;
  charNoSpace.textContent = noSpaces;
  readTime.textContent = minutes;
}

input.addEventListener('input', () => {
  const text = input.value.trim();
  updateStats(text);
  clearBtn.style.display = text ? 'block' : 'none';
});

clearBtn.addEventListener('click', () => {
  input.value = '';
  updateStats('');
  clearBtn.style.display = 'none';
});