/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  function renderTweets(tweets) {
    $("#tweet-list").empty();
    for (var i = 0; i < tweets.length; i++) {
      let tweet = tweets[i];
      const $tweet = createTweetElement(tweet);
      $("#tweet-list").prepend($tweet);
    }
  }

  function createTweetElement(tweet) {
     // let $article = $("<article class='tweet'>")
    let $article = $("<article>").addClass("tweet");
    let $header = $("<header>");
    // let $avatar = $(`<img src="${tweet.whatever.src}" class="avatar">`)
    let $avatar = $("<img>").addClass("avatar").attr("src", tweet.user.avatars.small); 
    let $username = $("<h2>").text(tweet.user.name);
    let $handle = $("<span>").addClass("handle").text(tweet.user.handle);
    let $br = $("<br>");
    let $content = $("<div>").addClass("tweet-content").text(tweet.content.text);
    let $footer = $("<footer>");
    let $createdAt = $("<span>").text(tweet.created_at);
    let $heart = $("<img>").addClass("icon").attr("src", "/images/heart.png");
    let $retweet = $("<img>").addClass("icon").attr("src", "/images/retweet.png");
    let $flag = $("<img>").addClass("icon").attr("src", "/images/flag.png");

    $article.append(($header), ($br), ($content), ($br), ($footer));
    $header.append(($avatar), ($username));
    $username.append($handle);
    $footer.append(($createdAt), ($heart), ($retweet), ($flag));

    return $article;
    // Prep the whole thing at once
    // var $article = $(`<div class="tweet">
    //   <h2></h2>
    // </div>`);

    // use .find to look for specific template parts and set them
    // $article.find('h2').setText(username);

    // !!!OR!!! just use something like handlebars or lit-html
  }

  $("form").on("submit", function(event) {
    event.preventDefault();
    const content = $(".new-tweet .tweetTextArea").val();
    const textCounter = content.length;
    if (textCounter === 0) {    
      alert("Cannot post an empty tweet");
    } if (textCounter > 140) {
      alert("Tweets cannot be more than 140 characters");
    } else {
      const tweet = {
        text: content
      }
      postTweets(tweet);
    } 
  }) 
  
  function loadTweets() {
    $.ajax({
      url: "/tweets",
      method: "GET",
      success: function (data) {
        renderTweets(data);
      }
    });
  };
  
  function postTweets(tweet) {
    $.post("/tweets", tweet, function(data) {
      loadTweets();
    });
  }

  loadTweets();


  $(".compose").click(function(){
    $(".new-tweet").toggle();
    $(".tweetTextArea").focus();
  });

});
