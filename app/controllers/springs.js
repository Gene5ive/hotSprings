import Ember from "ember";

var SpringsController = {
  actions: {
    add: function() {

      var newReview = this.store.createRecord('review', {
        reviewerName: this.get('author'),
        description: this.get('description')
      });
      newReview.save();

      var newSpring = this.store.createRecord('spring', {
        springName: this.get('springName'),
        author: this.get('author'),
        lat: this.get('lat'),
        long: this.get('long'),
        avgRating: this.get('rating'),
        image: this.get('image'),
        zoom: 6
      });
      newSpring.save();

      newSpring.get('reviews').pushObject(newReview);

      this.setProperties({
        springName: '',
        author: '',
        lat: '',
        long: '',
        review: '',
      });
      $(".form-container").hide();
      $(".btn-info").show();
    },
  showForm: function() {
    $(".form-container").show();
    $(".btn-info").hide();
  }
  }
};

export default Ember.Controller.extend(SpringsController);
