Tinytest.add("Errors - collection", test => {
  test.equal(Errors.collection.find({}).count(), 0);

  Errors.throw('A new error!');
  test.equal(Errors.collection.find({}).count(), 1);

  Errors.collection.remove({});
});

Tinytest.addAsync("Errors - template", (test, done) => {  
  Errors.throw('A new error!');
  test.equal(Errors.collection.find({}).count(), 1);

  // render the template
  Blaze.insert(Blaze.render(Template.appErrors), document.body);

  Meteor.setTimeout(() => {
    test.equal(Errors.collection.find({}).count(), 0);
    done();
  }, 3500);
});