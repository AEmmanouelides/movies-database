const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActorSchema = new Schema({
  movie: {
    type: Schema.Types.ObjectId,
    ref: 'movie'
  },
  likes: { type: Number, default: 0 },
  name: { type: String }
});

ActorSchema.statics.like = function(id) {
  const Actor = mongoose.model('actor');

  return Actor.findById(id)
    .then(actor => {
      ++actor.likes;
      return actor.save();
    })
}

mongoose.model('actor', ActorSchema);
