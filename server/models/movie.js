const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  actors: [{
    type: Schema.Types.ObjectId,
    ref: 'actor'
  }]
});

MovieSchema.statics.addActor = function(id, name) {
  const Actor = mongoose.model('actor');

  return this.findById(id)
    .then(movie => {
      const actor = new Actor({ name, movie })
      movie.actors.push(actor)
      return Promise.all([actor.save(), movie.save()])
        .then(([actor, movie]) => movie);
    });
}

MovieSchema.statics.findActors = function(id) {
  return this.findById(id)
    .populate('actors')
    .then(movie => movie.actors);
}

mongoose.model('movie', MovieSchema);
