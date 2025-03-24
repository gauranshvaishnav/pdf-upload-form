document.getElementById('uploadForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData();
  const files = document.getElementById('pdfs').files;
  for (let i = 0; i < files.length; i++) {
    formData.append('pdfs', files[i]);
  }

  const response = await fetch('https://your-n8n.com/webhook/pdf-upload', {
    method: 'POST',
    body: formData
  });

  const resultDiv = document.getElementById('result');
  if (response.ok) {
    const data = await response.json();
    resultDiv.innerText = JSON.stringify(data, null, 2);
  } else {
    resultDiv.innerText = 'Something went wrong. Please try again.';
  }
});
