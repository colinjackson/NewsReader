NewsReader.Views.FeedsForm = Backbone.View.extend({
  tagName: "form",
  template: JST["feeds/form"],
  events: {
    "click button": "submitForm"
  },
  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    return this;
  },
  submitForm: function (event) {
    event.preventDefault();

    var formData = this.$el.serializeJSON();
    NewsReader.Collections.feeds.create(formData);

    this.render();
  }
})