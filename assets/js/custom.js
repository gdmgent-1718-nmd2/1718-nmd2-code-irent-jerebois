$(document).ready(function(){
    $(".button a").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });      
});
$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);   
    $(".button a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;  
});

$(document).ready(function(){
	//return a DOM object
	var myVideo = document.getElementById("my_video_1"); 
	var video = document.getElementById('videoID'); //or
	var video = $('#videoID').get(0); //or
	var video = $('#videoID')[0];
	 
	//return a jQuery object
	var video = $('#videoID');
	//Play/Pause control clicked
	$('.btnPlay').on('click', function() {
		if(video[0].paused) {
			video[0].play();
		}
		else {
			video[0].pause();
		}
		return false;
	});
	
	//get HTML5 video time duration
	video.on('loadedmetadata', function() {
		$('.duration').text(video[0].duration);
	});
	 
	//update HTML5 video current play time
	video.on('timeupdate', function() {
		$('.current').text(video[0].currentTime);
	});
	
	//get HTML5 video time duration
	video.on('loadedmetadata', function() {
		$('.duration').text(video[0].duration);
	});
 
	//update HTML5 video current play time
	video.on('timeupdate', function() {
		var currentPos = video[0].currentTime; //Get currenttime
		var maxduration = video[0].duration; //Get video duration
		var percentage = 100 * currentPos / maxduration; //in %
		$('.timeBar').css('width', percentage+'%');
	});
	
	var timeDrag = false;   /* Drag status */
	$('.progressBar').mousedown(function(e) {
		timeDrag = true;
		updatebar(e.pageX);
	});
	
	$(document).mouseup(function(e) {
		if(timeDrag) {
			timeDrag = false;
			updatebar(e.pageX);
		}
	});
	
	$(document).mousemove(function(e) {
		if(timeDrag) {
			updatebar(e.pageX);
		}
	});
	 
	//update Progress Bar control
	var updatebar = function(x) {
		var progress = $('.progressBar');
		var maxduration = video[0].duration; //Video duraiton
		var position = x - progress.offset().left; //Click pos
		var percentage = 100 * position / progress.width();
	 
		//Check within range
		if(percentage > 100) {
			percentage = 100;
		}
		if(percentage < 0) {
			percentage = 0;
		}
	 
		//Update progress bar and video currenttime
		$('.timeBar').css('width', percentage+'%');
		video[0].currentTime = maxduration * percentage / 100;
	};
	//loop to get HTML5 video buffered data
	var startBuffer = function() {
		var maxduration = video[0].duration;
		var currentBuffer = video[0].buffered.end(0);
		var percentage = 100 * currentBuffer / maxduration;
		$('.bufferBar').css('width', percentage+'%');
	 
		if(currentBuffer < maxduration) {
			setTimeout(startBuffer, 500);
		}
	};
	setTimeout(startBuffer, 500);
	//Mute/Unmute control clicked
	$('.muted').click(function() {
		video[0].muted = !video[0].muted;
		return false;
	});
	 
	//Volume control clicked
	$('.volumeBar').on('mousedown', function(e) {
		var position = e.pageX - volume.offset().left;
		var percentage = 100 * position / volume.width();
		$('.volumeBar').css('width', percentage+'%');
		video[0].volume = percentage / 100;
	});	 	
});

var vid = document.getElementById("videoID");

function getPlaySpeed() { 
	alert(vid.playbackRate);
} 

function setPlaySpeed(value) { 
	vid.playbackRate = value;
} 
  function skip(value) {
		var video = document.getElementById("videoID");
		video.currentTime += value;
}

$(document).ready(function() {
  var play = $('.btn-play');
  var mute = $('.btn-mute');

  mute.click(function() {
     mute.toggleClass('mute-active');
     return false;
  });

  play.click(function() {
     play.toggleClass('play-active');
     return false;
  });
});