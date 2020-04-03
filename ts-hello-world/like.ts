export class Like {
    private _liked: boolean = false;
    private _numberOfLikes: number = 0;
    constructor(numberOfLikes?: number){
        if (numberOfLikes)
            this._numberOfLikes = numberOfLikes;
    }
    getNumberOfLikes() {
        return this._numberOfLikes;
    }
    like() {
        if (this._liked) {
            this._liked = false;
            this._numberOfLikes = this._numberOfLikes - 1;
        }
        else {
            this._liked = true;
            this._numberOfLikes = this._numberOfLikes + 1;
        }
    }
    getLiked() {
        return this._liked;
    }
}