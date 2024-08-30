const BASE_URL = "https://newsapi.org/v2/";
const KEY = "1ea4dd03b2b04b8ca95a7ec402bb9113";

export default class NewsApiService {
  constructor() {
    this.request = "";
    this.page = 1;
  }

  fetchArticles() {
    return fetch(
      `${BASE_URL}everything?q=${this.request}&page=${this.page}&pageSize=6&apiKey=${KEY}`
    )
      .then((res) => res.json())
      .then(({ articles }) => {
        this.increasePage();
        return articles;
      });
  }

  changeRequest(newRequest) {
    this.request = newRequest;
  }

  increasePage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
