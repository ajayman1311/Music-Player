//song list
let All_song = [
   {
     name: "OO DESH MERA",
     path: "desh music/1.mp3",
     img: "desh images/1.jpg",
     singer: "Arijit Singh"
   },
   {
     name: "VANDA MATARAM",
     path: "desh music/2.mp3",
     img: "desh images/2.jpg",
     singer: "Sonu Nigam"
   },
   {
     name: "SHUBH DIN",
     path: "desh music/3.mp3",
     img: "desh images/3.jpg",
     singer: " Jyotica Tangri, Keerthi Sagathia"
   },
   {
     name: "KASUMBI",
     path: "desh music/4.mp3",
     img: "desh images/4.jpg",
     singer: "Divya Kumar"
   },
   {
     name: "THAARA VAASTE",
     path: "desh music/5.mp3",
     img: "desh images/4.jpg",
     singer: "Divya Kumar"
   },
   {
    name: "MAA",
    path: "desh music/6.mp3",
    img: "desh images/6.jpg",
    singer: "Ankit Tiwari"
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