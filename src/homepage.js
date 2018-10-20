class Homepage{
  constructor(){
    this.api = new Api()
  }

  fetchContent(){
    const homepageContent = this.api.fetchHomepage()
    this.initializeHeader(homepageContent.header)
    this.initializeEvents(homepageContent.events)
  }

  initializeHeader(header){
    const {subtitle, title, date, image, imageAlt} = header

    const headerTextContainer = document.getElementById('header-text-container')
    headerTextContainer.innerHTML = `
    <h2>${subtitle}</h2>
    <h1>${title}</h1>
    <date>${date}</date>
    `

    const headerImageContainer = document.getElementById('header-image-container')
    headerImageContainer.innerHTML = `
    <img src="${image}" alt=${imageAlt} class="header-image">
    `
  }

  initializeEvents(events){
    const eventsList = document.getElementById('events-list')

    for(let event of events){
      const {subtitle, title, footnote, date} = event
      const eventCard = document.createElement("SECTION")
      eventCard.className = "event-card"
      eventCard.innerHTML = `
        <h2>${subtitle}</h2>
        <h1>${title}</h1>
        <h2>${footnote}</h2>
        <date>${date}</date>
      `
      eventsList.appendChild(eventCard)
    }
  }
}
