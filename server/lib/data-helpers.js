"use strict";

module.exports = function makeDataHelpers(db) {
  return {

    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet, (err, data) => {
        if(err) {
          callback(err);
        } else {
          callback(null);
        }
      })
    },

    getTweets: function(callback) {
      db.collection("tweets").find().toArray((err, tweets) => {
        if(err) {
          callback(err);
        } else {
          callback(null, tweets);
        }
      })
    }   
  };
}
