var songs = [];

var Song = function(title, artist, genre) {
  this.title = title;
  this.artist = artist;
  this.genre = genre;
}

var wonderwall = new Song("wonderwall", 'Oasis', 'popishthing');
var stairway = new Song("Stairway to Heaven", "Led Zepp.", "Rock");
var toxic = new Song("Toxic", "Britney Spears", "pop");
songs.push(wonderwall, stairway, toxic);

//write all of the songs to the html page
function displaySongs() {
  var elemString = "";
  for(var i = 0; i < songs.length; i++) {
    //pass in the song itself, and the index of the song to get the elemString
    elemString += getElemString(songs[i], i);
    // '<div class="well container">'
    // + '<h3>' + songs[i].title + '</h3>'
    // + '<p><i>' + songs[i].artist + '</i></p><br/>'
    // + '<p><i>' + songs[i].genre + '</i></p><br/>'
    // + '</div>'
  }
  document.getElementById('songs').innerHTML = elemString;
}
displaySongs();

//when someone click the submit button, or hits enter on one of the inputs... run this function
document.getElementById('newSongForm').addEventListener('submit', function(event) {
  //do not refresh the page
  event.preventDefault();

  //get the values from the inputs and store them in variables
  var title = document.getElementById('songTitle').value;
  var artist = document.getElementById('songArtist').value;
  var genre = document.getElementById('songGenre').value;

  //create the mySong object by calling the Song constructor
  var mySong = new Song(title, artist, genre);

  //Add the created song into the song array
  songs.push(mySong);

  //append the new song to the end of the list already on the index page
  document.getElementById('songs').innerHTML += getElemString(mySong, songs.length - 1);

  //clear out the inputs
  document.getElementById('songTitle').value = "";
  document.getElementById('songArtist').value = "";
  document.getElementById('songGenre').value = "";
});

//returns the elem string for us to display
function getElemString(song, z) {
  return '<div class="well container">'
    + '<h3>' + song.title + '</h3>'
    + '<p>artist: <i>' + song.artist + '</i></p>'
    + '<p>genre: <i>' + song.genre + '</i></p>'
    + '<div>'
      + '<button class="btn btn-danger" onclick="deleteSong('+z+')">Delete</button>'
      + '<button class="btn btn-danger" onclick="editSong('+z+')">Edit</button>'

    + '</div>'
  + '</div>';
}

function editSong(index) {
  $('#editTitle').val(songs[index].title);
  $('#editArtist').val(songs[index].artist);
  $('#editGenre').val(songs[index].genre);
  $('#saveEditButton').html('<button onclick="saveChanges('+index+')" class="btn btn-primary">Save changes</button>')
  $('#myModal').modal('toggle');

}

function saveChanges(index) {
  //var title = document.getELementByID('editTitle').value;
  var title = $('#editTitle').val();
  var artist = $('#editArtist').val();
  var genre = $('#editGenre').val();

  songs[index] = new Song(title, artist, genre);
  //clear out the inputs
  $('#editTitle').val('');
  $('#editArtist').val('');
  $('#editGenre').val('');

  $('#myModal').modal('toggle')
  displaySongs();
}
//a is the song index we want to delete (references z in getElemString())
function deleteSong(a) {
  songs.splice(a, 1);
  displaySongs();
}


// var songs = [];
//
// var Song = function(title, artist, genre) {
//   this.title = title;
//   this.artist = artist;
//   this.genre = genre;
// }
//
// var wonderwall = new Song("Wonderwall", "Oasis", "pop");
// var stairway = new Song("Stairway", "Led Zep", "Rock");
// var toxic = new Song("Toxic", "Brit", "poppy");
// songs.push(wonderwall, stairway, toxic);
//
// //write all the songs to the html page
// function displaySongs() {
//   var elemString = "";
//   for(var i = 0; i < songs.length; i++) {
//     //pass in the song itself, and the index of the song to get the elemString
//     elemString += getElemString(songs[i], i);
//   }
//   document.getElementById("songs").innerHTML = elemString;
// }
//
// //when someone clicks submit or hits enter on one of the inputs...
// document.getElementById("newSongForm").addEventListener("submit", function(event) {
//   event.preventDefault();
//   var title = document.getElementById("songTitle").value;
//   var artist = document.getElementById("songArtist").value;
//   var genre = document.getElementById("songGenre").value;
//
// //creates new song from entered values
//   var mySong = new Song(title, artist, genre);
// //adds new song to original array
//   songs.push(mySong);
// //displays new song to html
//   document.getElementById("songs").innerHTML += getElemString(mySong, songs.length - 1);
//
//   var title = document.getElementById("songTitle").value = "";
//   var artist = document.getElementById("songArtist").value = "";
//   var genre = document.getElementById("songGenre").value = "";
//
// });
//
// //returns the elem string for us to display
// function getElemString(song, index) {
//   return '<div id="songTable">'
//   + '<table class="table table-striped">'
//   + '<th> Song Name: ' + song.title + '</th>'
//   + '<tr><td> Artist: ' + song.artist + '</td></tr>'
//   + '<tr><td> Genre: ' + song.genre + '</td></tr>'
//   +  '</table>'
//   + '<div>'
//   + '<button class="btn btn-danger" onclick="deleteSong('+ index +')">Delete</button>'
//   + '<button class="btn btn-danger" onclick="editSong('+ index +')">Edit</button>'
//   + '</div>'
//   + '</div>';
//
// }
//
// function editSong() {
//   $('#myModal').modal('toggle')
// }
//
// function deleteSong(songIndex) {
//   songs.splice(songIndex, 1);
//   displaySongs();
// }
// //displays to the page
// displaySongs();
