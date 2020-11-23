const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const API_KEY = '19196130-53b5eb5481c178bbcfa09d2c1';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.imagePerPage = 12;
  }

  async fetchImage() {
    const response = await fetch(
      `${BASE_URL}&q=${this.searchQuery}&page=${this.page}&per_page=${this.imagePerPage}&key=${API_KEY}`,
    );

    const { hits: images } = await response.json();
    this.increment();
    return images;
  }

  increment() {
    this.page += 1;
  }

  reset() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}