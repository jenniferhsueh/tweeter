/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

$(document).ready(() => {
  function createTweetElement(tweet) {
    let $article = $("<article>");
    let $header = $("<header>");
    let $avatar = $("<img class='bunny'>").attr("src", tweet.user.avatars.small); 
    let $username = $("<h2>").text(tweet.user.name);
    let $handle = $("<span>").addClass("handle").text(tweet.user.handle);
    let $br = $("<br>");
    let $content = $("<div>").addClass("tweet-content").text(tweet.content.text);
    let $footer = $("<footer>");
    let $createdAt = $("<div>").text(tweet.created_at);
    // let $icons = $("<div>").addClass("icon").attr("src");
    
    $article.append($header);
    $header.append($avatar);
    $header.append($username);
    $username.append($handle);
    $article.append($br);
    $article.append($content);
    $article.append($br);
    $article.append($footer);
    $footer.append($createdAt);
    // $footer.append($icons);

    return $article;
  }


var $tweet = createTweetElement(tweetData);

console.log($tweet); // to see what it looks like

$('.tweet').append($tweet);
// var $tweet = $("<article>").addClass("tweet");
});
