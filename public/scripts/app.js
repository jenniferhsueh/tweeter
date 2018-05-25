/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  function renderTweets(tweets) {
    $("#tweet-list").empty();
    for (var i = 0; i < tweets.length; i++) {
      var tweet = tweets[i];
      var $tweet = createTweetElement(tweet);
      $("#tweet-list").prepend($tweet);
    }
  }

  function createTweetElement(tweet) {
    var $article = $("<article>").addClass("tweet");
    var $header = $("<header>");
    var $avatar = $("<img>").addClass("avatar").attr("src", tweet.user.avatars.small); 
    var $username = $("<h2>").text(tweet.user.name);
    var $handle = $("<span>").addClass("handle").text(tweet.user.handle);
    var $br = $("<br>");
    var $content = $("<div>").addClass("tweet-content").text(tweet.content.text);
    var $footer = $("<footer>");
    var $createdAt = $("<span>").text(tweet.created_at);
    var $heart = $("<img>").addClass("icon").attr("src", "/images/heart.png");
    var $retweet = $("<img>").addClass("icon").attr("src", "/images/retweet.png");
    var $flag = $("<img>").addClass("icon").attr("src", "/images/flag.png");

    $article.append($header, $content, $br, $footer);
    $header.append($avatar, $username);
    $username.append($handle);
    $footer.append($createdAt, $heart, $retweet, $flag);

    return $article;
  }

  $("form").on("submit", function(event) {
    event.preventDefault();
    var content = $(".new-tweet .tweetTextArea").val();
    var textCounter = content.length;
    if (textCounter === 0) {    
      alert("Cannot post an empty tweet");
    } if (textCounter > 140) {
      alert("Tweets cannot be more than 140 characters");
    } else {
      var tweet = {
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
      },
      error: function(err) {
        console.log(err);
      }
    });
  };

  function postTweets(tweet) {
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: tweet,
      success: function() {
        loadTweets();
      },
      error: function(err) {
        console.log(err);
      }
    });
  };

  loadTweets();

  $(".compose").click(function(){
    $(".new-tweet").slideToggle();
    $(".tweetTextArea").focus();
  });

});
