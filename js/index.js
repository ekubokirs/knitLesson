$(document).ready(function(){
  console.log("document ready");
  
  var sections = ["Casting On", "Basics", "Casting Off", "Fancy Stitches", "General Reference"];
  
  for (i=0; i<sections.length; i++){
    console.log(sections[i]);
    $("ul").append("<li role=presentation><a href='#'>"+sections[i]+"</a></li>");
    $(".container").append("<div class='section'><h2 class = 'video' id='"+sections[i]+"'>"+ sections[i]+"</h2></div>");
  }

  // $(".select").click(function(){
    
  //   console.log(id);
  // });

  // $()
});