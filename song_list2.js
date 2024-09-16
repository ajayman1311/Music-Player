//song list
let All_song = [
   {
     name: "ALONE",
     path: "eng music/1.mp3",
     img: "eng images/1.jpg",
     singer: "Alen Walker"
   },
   {
     name: "WE DON'T TALK ANYMORE",
     path: "eng music/2.mp3",
     img: "eng images/2.jpg",
     singer: "Charlie Puth"
   },
   {
     name: "LEVITATING",
     path: "eng music/3.mp3",
     img: "eng images/3.jpg",
     singer: "Dua Lipa"
   },
   {
     name: "SHAPE OF YOU",
     path: "eng music/4.mp3",
     img: "eng images/4.jpg",
     singer: "Ed Sheeran"
   },
   {
     name: "LET ME DOWN SLOWLY",
     path: "eng music/5.mp3",
     img: "eng images/5.jpg",
     singer: "Alec Benjamin"
   },
   {
    name: "ON MY WAY",
    path: "eng music/6.mp3",
    img: "eng images/6.jpg",
    singer: "Alen Walker"
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