class SpeakerListController {
  constructor () {}

  $onInit () {
    this.loadData()
  }

  loadData () {
    this.speakers = [
      { name: 'Todd Motto', country: 'UK', talk: 'From .component() to @Component', photo: '//angularcamp.org/img/people/ToddMotto.jpg' },
      { name: 'Maxim Salnikov', country: 'Norway', talk: 'Angular Material 2: Reward your app with high-quality UI in minutes', photo: '//angularcamp.org/img/people/MaximSalnikov.jpg' },
      { name: 'Wassim Chegham', country: 'France', talk: 'Angular 2 Server Side Rendering', photo: '//angularcamp.org/img/people/WassimChegham.jpg' },
      { name: 'Sebastian Witalec', country: 'UK', talk: 'Sharing Code Between Web and Native Apps', photo: '//angularcamp.org/img/people/SebastianWitalec.jpg' },
      { name: 'Evan Schultz', country: 'Canada', talk: 'Building Angular 2 Application with Redux', photo: '//angularcamp.org/img/people/EvanSchultz.jpg' },
      { name: 'Uri Goldshtein', country: 'Everywhere', talk: 'Angular 2.0 with realtime GraphQL', photo: '//angularcamp.org/img/people/UriGoldshtein.png' },
      { name: 'Christopher Noring', country: 'Sweden', talk: 'TypeScript fundamentals', photo: '//angularcamp.org/img/people/ChristopherNoring.jpg' },
      { name: 'Uri Shaked', country: 'Israel', talk: 'From the World-Wide Web to the World of IoT', photo: '//angularcamp.org/img/people/UriShaked.jpg' },
      { name: 'Manfred Steyer', country: 'Austria', talk: 'Progressive Web Apps with Angular 2', photo: '//angularcamp.org/img/people/ManfredSteyer.jpg' },
      { name: 'Thorsten Hans', country: 'Germany', talk: 'Angular 2 super-charged: Native desktop power with Electron', photo: '//angularcamp.org/img/people/Thorsten_Hans.jpg' },
      { name: 'Vanessa Yuen', country: 'Canada', talk: 'Augury', photo: '//angularcamp.org/img/people/VanessaYuen.jpg' },
      { name: 'David Pich', country: 'Spain', talk: 'Open Keynote', photo: '//angularcamp.org/img/people/DavidPich.jpg' },
      { name: 'Johannes Weber', country: 'Germany', talk: 'Closing Machine', photo: '//angularcamp.org/img/people/Jowe.jpg' }
    ]
  }
}

export { SpeakerListController }