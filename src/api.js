class Api{
  constructor(){
  }

  fetchHomepage(){
    return{
      header: {
        title: "Joseph Buckley: Traitor Muscle",
        subtitle: "Current Exhibition",
        date: "September 22 - November 03 2018",
        image: "assets/images/exhibition_buckley_traitor_muscle.jpg",
        imageAlt: "Joseph Buckley: Traitor Muscle"
      },
      events: [{
        title: "Open Studios",
        subtitle: "Public Program",
        footnote: "",
        date: "October 4, 6pm"
      },
      {
        title: "Young Girl Reading Group",
        subtitle: "Public Program",
        footnote: "",
        date: "October 12, 3pm"
      },
      {
        title: "Unlearning Learning",
        subtitle: "Public Program",
        footnote: "Part of Traitor Muscle",
        date: "October 20, 5pm"
      },
      {
        title: "Artist Talk: Joseph Buckley",
        subtitle: "Public Program",
        footnote: "Part of Traitor Muscle",
        date: "October 29, 8pm"
      }]
    }
  }
}
