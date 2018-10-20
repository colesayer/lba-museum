class Homepage{
  constructor(){
    this.api = new Api()
  }

  fetchContent(){
    const homepageContent = this.api.fetchHomepage()
    const {header, events, collection} = homepageContent
    this.initializeHeader(header)
    this.initializeEvents(events)
    this.initializeCollection(collection)
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

  initializeCollection(collection){
    const collectionList = document.getElementById('collection-list')

    for(let item of collection){
      const {artist, title, date, footnote, image, imageAlt} = item
      const collectionCard = document.createElement("SECTION")
      collectionCard.className = "collection-card"
      collectionCard.innerHTML = `
        <div class="collection-card-image">
          <img src="${image}" alt=${imageAlt}>
          <span class="image-overlay"></span>
        </div>
        <h1>${artist}</h1>
        <h2>${title}, ${date}</h2>
      `
      if(footnote){
        const footnoteContainer = document.createElement("DIV")
        footnoteContainer.className = "collection-card-footnote"
        footnoteContainer.innerHTML = `
          <div class="collection-bullet"></div>
          <h3>${footnote}</h3>
        `
        collectionCard.appendChild(footnoteContainer)
      }

      collectionList.appendChild(collectionCard)

    }
  }
}
