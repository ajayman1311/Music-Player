//song list
let All_song = [
   {
     name: "KITNI HASEEN HOGI",
     path: "NEW music/1.mp3",
     img: "image/1.jpg",
     singer: "Arijit Singh"
   },
   {
     name: "RAATAN LAMBIYAN",
     path: "NEW music/2.mp3",
     img: "image/2.jpg",
     singer: "Jubin Nautiyal"
   },
   {
     name: "TUMHE KITNA PYAAR KARTE",
     path: "NEW music/3.mp3",
     img: "image/3.jpg",
     singer: "Arijit Singh"
   },
   {
     name: "RABBA JANDA",
     path: "NEW music/4.mp3",
     img: "image/4.jpg",
     singer: "Jubin Nautiyal"
   },
   {
     name: "TERE HAWAALE",
     path: "NEW music/5.mp3",
     img: "image/5.jpg",
     singer: "Arijit Singh"
   },
   {
    name: "BULLEYA",
    path: "NEW music/6.mp3",
    img: "image/6.jpg",
    singer: "Rabbi Shergill"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/