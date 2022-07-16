class Media {
  constructor (title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title () {
    return this._title;
  }
  get isCheckedOut () {
    return this._isCheckedOut;
  }
  set isCheckedOut (newIsCheckedOut) {
    this._isCheckedOut = newIsCheckedOut;  
  }
  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;

  }
  getAverageRating() {
    let ratingsSum = this._ratings.reduce((currentSum, currentRating) => currentSum + currentRating);
    let ratingsAverage = ratingsSum / this._ratings.length;
    return ratingsAverage;
  }
  

  addRating(rating) {
    this._ratings.push(rating);
  }
}


class Book extends Media {
  constructor (title, author, pages) {
    super (title);
    this._author = author;
    this._pages = pages;
  }
  get author () {
    return this._author;
  }
  get pages () {
    return this._pages;
  }
}


class Movie extends Media {
  constructor (title, runTime, director) {
    super (title);
    this._runTime = runTime;
    this._director = director;
  }
  get runTime () {
    return this._runTime = runTime;
  }
  get director () {
    return this._director = director;
  }
}


class CD extends Media {
  constructor (artist, title, songs) {
    super (title);
    this._artist = artist;
    this._songs = [];
  }
  get artist () {
    return this._artist = artist;
  }
  
  addSong (song) {
    this._songs.push(song);
  }
  shuffle (songs) {
    const songListLength = this._songs.length;
    for (let i = 0; i < songListLength; i++) {
  this._songs.push(this._songs.splice(Math.floor(Math.random()*songListLength),1));
    }
    return this._songs;
  }
}

const historyOfEverything = new Book ('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(6);
console.log(historyOfEverything.getAverageRating());


const speed = new Movie ('Speed', 116, 'Jan de Bont');
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());


const faveDisc = new CD ("Michael Jackson", "Man in the Mirror");
faveDisc.addSong('Smooth Criminal');
faveDisc.addSong('Bad');
faveDisc.addSong('Man in the Mirror');
faveDisc.addSong('The Way You Make Me Feel')
console.log(faveDisc)

console.log(faveDisc.shuffle())

