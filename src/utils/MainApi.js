export const BASE_URL = 'https://api.movies-explorer.nomoredomains.club';
// export const BASE_URL = 'http://localhost:3000';

const INVALID_TOKEN_MESSAGE = 'please specify valid token';

export const register = (password, email, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email, name})
  })
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err));
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((response => response.json()))
  .then((data) => {
    if (data.token){
      localStorage.setItem('jwt', data.token);
      return data;
    }
  })
  .catch(err => console.log(err))
};

export const getUserData = (token) => {
  if (!token) {
    return new Promise((_, reject) => { reject(INVALID_TOKEN_MESSAGE)});
  }
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .catch(err => console.log(err))
}

export const saveUserInfo = ({ name, email }, token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export const getInitialUsers = (token) => {
  if (!token) {
    return new Promise((_, reject) => { reject(INVALID_TOKEN_MESSAGE)});
  }
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export const savedMovie = (movie, token) => {
  const { country,
    director,
    duration,
    year,
    description,
    nameRU,
    nameEN,
    id } = movie;
    const image = `https://api.nomoreparties.co${movie.image.url}`;
    const thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
    const trailer = movie.trailerLink;
    const movieId = id;
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailer,
      nameRU,
      nameEN,
      thumbnail,
      movieId
    })
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

export const delMovie = (id, token) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export const getSavedMovies = (token) => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
}
