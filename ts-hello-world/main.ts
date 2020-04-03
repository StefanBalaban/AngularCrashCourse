import {Like} from './like';
let like = new Like();
console.log(like.getNumberOfLikes());
console.log(' ' + like.getLiked());
like.like();
console.log(like.getNumberOfLikes());
console.log(' ' + like.getLiked());

let likeToo = new Like(1);
console.log(likeToo.getNumberOfLikes());
console.log(' ' + likeToo.getLiked());
likeToo.like();
console.log(likeToo.getNumberOfLikes());
console.log(' ' + likeToo.getLiked());
likeToo.like();
console.log(likeToo.getNumberOfLikes());
console.log(' ' + likeToo.getLiked());