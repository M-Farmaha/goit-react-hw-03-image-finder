export const fetchRequest = query => {
  const params = {
    BASE_URL: 'https://pixabay.com/api/',
    KEY: '34891957-fbaa485884f22f3e8d25bd4d4',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: '1',
    per_page: '12',
  };

  return fetch(
    `${params.BASE_URL}?key=${params.KEY}&q=${query}&image_type=${params.image_type}&orientation=${params.orientation}&safesearch=${params.safesearch}&page=${params.page}&per_page=${params.per_page}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(response));
  });
};
