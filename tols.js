// ==UserScript==
// @name         Surf
// @namespace    Munem2x
// @icon		http://bitssurfer.com/android-icon-192x192.png
// @version      2
// @description  Auto surf
// @author       Munem2x
// @match        http://bitssurfer.com/surf/browse
// @grant        none
// @require https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// ==/UserScript==

$(document).ready(function(){
    var res = $("span#tmr").text().replace(" seconds", "");
    var a = parseInt($("span#tmr").text());
    if(a > 15){
      location.reload();
    }

	setInterval(function(){
  	if($(".green-text:not(:empty)")){
      (function () {
        var ids = {};
        var found = false;
        $('[id]').each(function() {
          if (this.id && ids[this.id]) {
            found = true;
            console.warn('Duplicate ID #'+this.id);
      	  dupid=this.id;
      	  $('#'+dupid).mousedown();
              $('#'+dupid).click();
              $('#'+dupid).mouseup();
          }
          ids[this.id] = 1;
        });
        if (!found) console.log('No duplicate IDs found');
        if($("span#tmr").text() == "Wrong Captcha Refresh"){
          // location.reload();
          $('.refresh').click();
          console.log($("span#tmr").text() == "Wrong Captcha");
        }
      })();
    }
  },5000);
});