NewsReader.Views.UsersForm = Backbone.View.extend({
  tagName: "form",
  template: JST["users/form"],

  events: {
    "click button": "submitUser"
  },

  render: {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    return this;
  },

  submitUser: function (event) {
    event.preventDefault();

    var formData = this.$el.serializeJSON();
    var model = new NewsReader.Models.User(formData);
    model.save();
  }
})