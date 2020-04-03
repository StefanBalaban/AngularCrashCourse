"use strict";
exports.__esModule = true;
var Like = /** @class */ (function () {
    function Like(numberOfLikes) {
        this._liked = false;
        this._numberOfLikes = 0;
        if (numberOfLikes)
            this._numberOfLikes = numberOfLikes;
    }
    Like.prototype.getNumberOfLikes = function () {
        return this._numberOfLikes;
    };
    Like.prototype.like = function () {
        if (this._liked) {
            this._liked = false;
            this._numberOfLikes = this._numberOfLikes - 1;
        }
        else {
            this._liked = true;
            this._numberOfLikes = this._numberOfLikes + 1;
        }
    };
    Like.prototype.getLiked = function () {
        return this._liked;
    };
    return Like;
}());
exports.Like = Like;
