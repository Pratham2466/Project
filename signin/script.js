let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let present = document.querySelector('#present');
let total = document.querySelector('#total');

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

//create a audio element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
    name: "Logic ON_ Stop Letting Your Past Define Your Future & How to Prioritize Your Mental Health",
    img: "https://i.iheart.com/v3/url/aHR0cHM6Ly9pbWFnZS5zaW1wbGVjYXN0Y2RuLmNvbS9pbWFnZXMvZjQ2NGZmNzUtZWUxNS00NTI5LTg5ZDktZDU0MTA3Mzk3YWZkLzJiMWM5MjJlLTNmNzItNDVlNS1hMjU3LWM4ZWRiZTNjYzkwMy8zMDAweDMwMDAvaW1hZ2UuanBnP2FpZD1yc3NfZmVlZA",
    path: "music/Logic ON_ Stop Letting Your Past Define Your Future & How to Prioritize Your Mental Health_160k.mp3"
  },
  {
    name: "Why Our Definition Of Failure Is All Wrong Street Philosophy",
    img:  "https://i.iheart.com/v3/url/aHR0cHM6Ly9pbWFnZS5zaW1wbGVjYXN0Y2RuLmNvbS9pbWFnZXMvZjQ2NGZmNzUtZWUxNS00NTI5LTg5ZDktZDU0MTA3Mzk3YWZkLzJiMWM5MjJlLTNmNzItNDVlNS1hMjU3LWM4ZWRiZTNjYzkwMy8zMDAweDMwMDAvaW1hZ2UuanBnP2FpZD1yc3NfZmVlZA",
    path:"music/Why Our Definition Of Failure Is All Wrong Street Philosophy With Jay Shetty_160k.mp3"
  },
  {
    name: "Maya Shankar ON_ How to Embrace Change Gracefully & Find Purpose in Difficult Times_",
    img:  "https://i.iheart.com/v3/url/aHR0cHM6Ly9pbWFnZS5zaW1wbGVjYXN0Y2RuLmNvbS9pbWFnZXMvZjQ2NGZmNzUtZWUxNS00NTI5LTg5ZDktZDU0MTA3Mzk3YWZkLzJiMWM5MjJlLTNmNzItNDVlNS1hMjU3LWM4ZWRiZTNjYzkwMy8zMDAweDMwMDAvaW1hZ2UuanBnP2FpZD1yc3NfZmVlZA",
    path:"music/Maya Shankar ON_ How to Embrace Change Gracefully & Find Purpose in Difficult Times_160k.mp3"
  },
  {
    name: "DilKoKaraarAaya",
    img:  "https://i.iheart.com/v3/url/aHR0cHM6Ly9pbWFnZS5zaW1wbGVjYXN0Y2RuLmNvbS9pbWFnZXMvZjQ2NGZmNzUtZWUxNS00NTI5LTg5ZDktZDU0MTA3Mzk3YWZkLzJiMWM5MjJlLTNmNzItNDVlNS1hMjU3LWM4ZWRiZTNjYzkwMy8zMDAweDMwMDAvaW1hZ2UuanBnP2FpZD1yc3NfZmVlZA",
    path: "music/DilKoKaraarAaya.mp3"
  },
  {
    name: "Before You Waste Time, Watch This _ Jay Shetty",
    img:  "https://i.iheart.com/v3/url/aHR0cHM6Ly9pbWFnZS5zaW1wbGVjYXN0Y2RuLmNvbS9pbWFnZXMvZjQ2NGZmNzUtZWUxNS00NTI5LTg5ZDktZDU0MTA3Mzk3YWZkLzJiMWM5MjJlLTNmNzItNDVlNS1hMjU3LWM4ZWRiZTNjYzkwMy8zMDAweDMwMDAvaW1hZ2UuanBnP2FpZD1yc3NfZmVlZA",
    path:"music/Before You Waste Time, Watch This _ Jay Shetty (320 kbps).mp3"
  },
];
// All function

//function load the track
function load_track(index_no){

  reset_slider();
  track.src=All_song[index_no].path;
  title.innerHTML = All_song[index_no].name;
  track_image.src = All_song[index_no].img;
  artist.innerHTML = All_song[index_no].artist;
  track.load();

  total.innerHTML = All_song.length;
  present.innerHTML = index_no + 1;
  timer = setInterval(range_slider , 1000);
}
load_track(index_no);



//mute sound
//function mute_sound(){
  //track.volume = 0;
  //volume.value = 0;
  //volume_show.innerHTML = 0;
//}
//reset song slider
function reset_slider(){
  slider.value=0;
}

//checking song is playing or not
function justplay(){
  if(playing_song==false){
    playsong();

  }else{
    pausesong();
  }
}
//play song
function playsong(){
  track.play();
  playing_song = true;
  play.innerHTML = '<i class="fa fa-pause"></i>';

}//pause song
function pausesong(){
  track.pause();
  playing_song = false;
  play.innerHTML = '<i class="fa fa-play"></i>';
}
//next song
function next_song(){
  if (index_no < All_song.length - 1){
    index_no +=1;
    load_track(index_no);
    playsong();
  }else{
    index_no = 0;
    load_track(index_no);
    playsong();
  }
}
//previous song
function previous_song(){
  if (index_no > 0){
    index_no -=1;
    load_track(index_no);
    playsong();
  }else{
    index_no = All_song.length;
    load_track(index_no);
    playsong();
  }
}


//change volume
function volume_change(){
  volume_show.innerHTML = recent_volume.value;
  track.volume = recent_volume.value / 100;
}

//change slider position
function change_duration(){
  slider_position = track.duration * (slider.value / 100);
  track.currentTime = slider_position;
}



function range_slider(){
  let position = 0;

  //update slider position
  if(!isNaN(track.duration)){
    position = track.currentTime * (100/ track.duration);
    slider.value = position;
  }

}