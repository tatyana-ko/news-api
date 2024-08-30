import NewsApiService from "./js/news-service.js";
import Article from "./js/article.js";
import LoadMoreButton from "./js/load-more-button.js";

const articlesContainer = document.querySelector(".articles-container");
const searchForm = document.querySelector(".search-form");

const newsApiService = new NewsApiService();
const loadMoreButton = new LoadMoreButton({
  selector: '.load-button',
  hidden: true,
});

searchForm.addEventListener("submit", onSerchArticles);
loadMoreButton.refs.button.addEventListener('click', fetchNewArticles)

function onSerchArticles(evt) {
  evt.preventDefault();

  const currentRequest = evt.currentTarget.elements.query.value;

  newsApiService.changeRequest(currentRequest);

  if (currentRequest === "") {
    return alert("no no");
  }

  newsApiService.resetPage();
  clearArticlesContainer();
  fetchNewArticles();
}

function fetchNewArticles() {
  loadMoreButton.disable();
  newsApiService.fetchArticles().then((allArticles) => {
    renderingArticles(allArticles);
    loadMoreButton.show();
    loadMoreButton.enable();
  });
}

function creatNewArticles(data) {
  const articles = new Article(data, '.template').generateArticle();

  return articles;
}

function renderingArticles(articles) {
  articles.forEach((a) => articlesContainer.append(creatNewArticles(a)));
}

function clearArticlesContainer() {
  articlesContainer.innerHTML = '';
}
