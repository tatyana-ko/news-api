export default class Article {
  constructor({urlToImage, url, title, author, description}, templateSelector) {
    this._templateSelector = templateSelector;
    
    this._link = url;
    this._imgUrl = urlToImage;
    this._header = title;
    this._author = author;
    this._description = description;
  }

  _getTemplate() {
    const articleElement = document
    .querySelector(this._templateSelector)
    .content.querySelector('.element')
    .cloneNode(true);

    return articleElement;
  }

  generateArticle() {
    this._element = this._getTemplate();

    this._element.querySelector('.article-link').src = this._link;
    this._element.querySelector('.article-img').src = this._imgUrl;
    this._element.querySelector('.article-header').textContent = this._header;
    this._element.querySelector('.article-author').textContent = this._author;
    this._element.querySelector('.article-desc').textContent = this._description;

    return this._element;
  }
}