Template.appErrors.helpers({
	errors() {
		return Errors.collection.find();
	}
});

Template.appError.onRendered(function() {
	const error = this.data;
	Meteor.setTimeout(() => {
		Errors.collection.remove(error._id);
	}, 3000);
});