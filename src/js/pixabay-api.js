export function fetchImages(query) {
	const BASE_URL = 'https://pixabay.com/api';
	const params = new URLSearchParams({
	'key': '43049359-de94a67b88373614faa3cefb0',
	'image_type': 'photo',
	'orientation': 'horizontal',
	'safesearch': 'true',
});
  const url = `${BASE_URL}/?${params}&q=${encodeURIComponent(query)}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error('No images found');
      }
      return data;
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
}
