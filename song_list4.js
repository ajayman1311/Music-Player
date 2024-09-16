//song list
let All_song = [
   {
     name: "HANUMN CHALISA",
     path: "bhakti music/1.mp3",
     img: "bhakti images/1.jpg",
     singer: "Hariharan"
   },
   {
     name: "SHRI KRISHNA GOVIND",
     path: "bhakti music/2.mp3",
     img: "bhakti images/2.jpg",
     singer: "Ravindra Jain"
   },
   {
     name: "SHRI HARI STOTRAM",
     path: "bhakti music/3.mp3",
     img: "bhakti images/3.jpg",
     singer: "G Gayathri Devi"
   },
   {
     name: "NAMO NAMO JI SHANKARA",
     path: "bhakti music/4.mp3",
     img: "bhakti images/4.jpg",
     singer: "Amit Trivedi"
   },
   {
     name: "MANGAL BHAWAN AMANGAL HAARI",
     path: "bhakti music/5.mp3",
     img: "bhakti images/5.jpg",
     singer: "Ravindra Jain"
   },
  
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