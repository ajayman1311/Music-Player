  //song list
let All_song = [
    {
      name: "HUMEN TUMSE PYAR KITNA",
      path: "OLD music/1.mp3",
      img: "OLD images/1.jpg",
      singer: "Kishor Kumar"
    },
    {
      name: "CHURA LIYA HAI TUMNE JO DIL KO",
      path: "OLD music/2.mp3",
      img: "OLD images/2.jpg",
      singer: "Asah Bhosle"
    },
    {
      name: "YEE VAADA RAHA",
      path: "OLD music/3.mp3",
      img: "OLD images/3.jpg",
      singer: "Asha Bhosle, Kishor Kumar"
    },
    {
      name: "AATE JAYE KHOOBSURAT",
      path: "OLD music/4.mp3",
      img: "OLD images/4.jpg",
      singer: "Kishor Kumar"
    },
    {
      name: "EK AJNABEE HASEENA",
      path: "OLD music/5.mp3",
      img: "OLD images/5.jpg",
      singer: "Kishor kumar"
    },
    {
     name: "HUM DONO DO PREMI",
     path: "OLD music/6.mp3",
     img: "OLD images/6.jpg",
     singer: " Kishore Kumar, Lata Mangeshkar"
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