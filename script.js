
    // Example queryURL for Giphy API
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=xlOEhlA4MKejem1J5UfNV0eCqBjPjVUH&q=good job&limit=25&offset=0&rating=g&lang=en";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      //CREATE VAR FOR IMAGE
      var goodjob= response.object.data[0]
      
      //SHOW IMAGE BY APPEND TO TEXT
      $("#button").append(goodjob);
    });



    function check() {
        var a=0;
        var q1=document.quiz.question1.value;
        var q2=document.quiz.question2.value;
        var q3=document.quiz.question3.value;
        var q4=document.quiz.question4.value;
        var result=document.getElementById('result');
        var quiz=document.getElementById("quiz");
        if (q1=="4") {a++}
        if (q2=="5") {a++}
        if (q3=="8") {a++}
        if (q4=="6") {a++}
        quiz.style.display="none";
        if (a<=3) {
          result.textContent=`Your result is ${a}. Sorry you only got 2 correct try again` 
      } else {
          result.textContent=`Your result is ${a}. You got 4 correct. Awesome! Great Job!` 
      }
      }
 