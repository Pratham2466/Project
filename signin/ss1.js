document.addEventListener('DOMContentLoaded', () => {
    const src = [
      [
        "Shreya Ghoshal","Tujh Mein Rab Dikhta Hai","music/01. Tujh Mein Rab Dikhta Hai.mp3","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMgrLFB6NWJLXafVduDHF2aPlUP_3zh3JDw&usqp=CAU"
      ],
      [ 
        "Atif Aslam,Shreya Ghoshal","Jeene Laga Hoon","",""
      ],
      [
      "Amit Mishra,Shreya Ghoshal","Hasi-Hamari Adhuri Kahani","music/06 Hasi (Shreya Ghoshal) 190Kbps.mp3","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbVY_eZWb7ay4kUiah0wa3pMra-sVd2i4MA&usqp=CAU"
    ],
    [
      "Shreya Ghoshal,Arijit Singh","Raat Bhar","",""
    ],
    [
      "Shreya Ghoshal,Pritam","Ye Ishq Hai-Jab We Met","",""
    ],
    [
      "Shreya Ghoshal,A.R.Rahman","Param Sundari","music/Param Sundari - Mimi.mp3","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN-BXZsAcYy_milYlEkfnxZNinFwsoUu9fSQ&usqp=CAU"
    ],
    [
      "Shreya Ghoshal,Ajay-Atul","Chikni Chameli-Agneepath","",""
    ],
    [
      "A.R.Rahman,Shreya Ghoshal","Chaka Chak-Atrangi Re","",""
    ],
    [
      "Shreya Ghoshal,Osman Mir","Nagada Sang Dhol","",""
    ],
    [
      "Shreya Ghoshal","Sun Raha Hai(Female)","",""
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