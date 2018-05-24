/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

$(document).ready(() => {
  function renderTweets(tweets) {
    for (var i = 0; i < tweets.length; i++) {
      let tweet = tweets[i];
      const $tweet = createTweetElement(tweet); //readability
      $(".tweet").append($tweet);
    }
  }

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
    let $heart = $("<img>").addClass("icon").attr("src", "/images/heart.png");
    let $retweet = $("<img>").addClass("icon").attr("src", "/images/retweet.png");
    let $flag = $("<img>").addClass("icon").attr("src", "/images/flag.png");

    $article.append($header).append($br).append($content).append($br).append($footer);
    $header.append($avatar).append($username);
    $username.append($handle);
    $footer.append($createdAt).append($heart).append($retweet).append($flag);

    return $article;
  }
  renderTweets(data);
});



// var $tweet = createTweetElement(tweetData);
// console.log($tweet); // to see what it looks like
// $('.tweet').append($tweet);
// // var $tweet = $("<article>").addClass("tweet");
// });
