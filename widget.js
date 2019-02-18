const taboolaAPI = 'https://taboola.api/url/goes/here'
const articleContainerDiv = document.querySelector('container')

// Fetch all articles from API
const fetchAllArticles = () => {
  fetch(taboolaAPI)
    .then(response => response.json())
    .then(articles => renderAllArticles(articles))
}

// Render all Articles
const renderAllArticles = articles => {
  articles.forEach(article => {
    articleContainer.appendChild(renderSingleArticle(article))
  })
}

const renderSingleArticle = article => {
  const newArticle = document.createElement('article')
  newArticle.setAttribute('href', article.url)

  const imageDiv = document.createElement('div')
  imageDiv.className = 'image'

  const articleImage = document.createElement('img')
  articleImage.src = article.image
  articleImage.alt = article.title

  const brandingSpan = document.createElement('span')
  brandingSpan.className = 'branding'
  brandingSpan.innerHTML = article.branding

  const titleDiv = document.createElement('div')
  titleDiv.className = 'title'
  titleDiv.innerText = article.title

  imageDiv.appendChild(articleImage)
  imageDiv.appendChild(brandingSpan)

  newArticle.appendChild(imageDiv)
  newArticle.appendChild(titleDiv)

  articleContainerDiv.appendChild(newArticle)
}
