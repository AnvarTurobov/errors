Errors = {
  // client-side collection
  collection: new Mongo.Collection(null),

  throw(message) {
  	Errors.collection.insert({message, seen: false});
  }
};