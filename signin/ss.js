document.addEventListener('DOMContentLoaded', () => {
  const src = [
    [
      "Arijit Singh,Pritam", "Khairiyat-Chhichhore", "music/khairiyat.mp3", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASWngQEbtI4oimLgHCJXYKLKwStFk1-fl14_yV11uzlOXaABheSKg48Z7fnpRmf7ae1I&usqp=CAU"
    ],
    [
      "Palak Muchhal,Arijit Singh", "Meri Aashiqui-Aashiqui 2", "music/05 Meri Aashiqui (Arijit Singh) 320Kbps.mp3"
      ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPpzBFGWbxq8zrpJWwhMwUsmVMLGoq_Ke_Q&usqp=CAU"
      
    ],
    [
      "Tulsi Kumar,Amaal Malik,Arijit Singh", "Salamat-Sarabjit", "music/Salamat 64 Kbps.mp3","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7GvUT9oS0uyUzb18ae7n_xw090M9agEenvw&usqp=CAU"
    ],
    [
      "Asees Kaur,Arijit Singh", "Ve Maahi-Kesari"," "," "
    ],
    [
      "Arijit Singh,B Praak", "Pachtaoge-Jaani Ve", " "," "
    ],
    [
      "Arijit Singh,Pritam","Ae Dil Hae Mushkil"," "," "
    ],
    [
      "Arijit Singh,Mithoon","Sanam Re-Title", "music/01 Sanam Re (Title Song) Arijit Singh 190Kbps.mp3"," "
    ],
    [
      "Arijit Singh,Pritam","Naina-Dangal","",""
    ],
    [
      "Arijit Singh,A.R.Rahman","Enna Sona","music/ Enna Sona - Ok Jaanu (Arijit Singh) 190Kbps.mp3",""
    ],
    [
      "Arijit Singh,Pritam","Channa Mereya","music/07 Channa Mereya - Arijit Singh 320Kbps.mp3"
      ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYbyVouvkjeK9ZjaKpbZRJy9Gj701EMS4aA&usqp=CAU"
    ]
    
  ];
  
  for (x = 0; x < src.length; x++) {
    var s = src[x];
    var number = parseInt(x) + 1;
    var artist = document.createTextNode(number + ": " + s[0]);
    var track_name = document.createTextNode(s[1]);
    
    var listItem = document.createElement('div');
    var artist_text = document.createElement('h3');
    var track_text = document.createElement('p');
    
    artist_text.appendChild(artist);
    track_text.appendChild(track_name);
    
    listItem.appendChild(artist_text);
    listItem.appendChild(track_text);
    
    listItem.classList.add('item');
    listItem.dataset.index = x;
    
    document.getElementById('list').appendChild(listItem);
  }
  displayTrack(0);
  
  var listItems = document.querySelectorAll('.item');
  listItems.forEach(el => {
    el.onclick = () => {
      displayTrack(el.dataset.index);
    };
  });
  
  function displayTrack(x) {
    var active = document.querySelector('.is-active');
    if (active) {
      active.classList.remove('is-active'); 
    }
    var el = document.getElementById('list').children[x];
    el.classList.add('is-active');
    var s = src[x],
        artist = s[0],
        track = s[1],
        audio = s[2],
        img = s[3],
        number = parseInt(x) + 1;
    document.getElementById('title').innerText = number + ": " + track;
    document.getElementById('song_title').innerText = artist;
    var albumArt = document.getElementById('art');
    albumArt.src = img;
    albumArt.alt = artist + " " + track;
    document.getElementById('audio').src = audio;
  }
})