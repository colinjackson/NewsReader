NewsReader.Views.FeedListItem = Backbone.View.extend({
  tagName: "li",
  template: JST["feeds/index_li"],

  events: {
    "click button": "deleteFeed"
  },

  render: function () {
    var renderedContent = this.template({
      feed: this.model
    });
    this.$el.html(renderedContent);

    return this;
  },

  deleteFeed: function () {
    this.model.destroy();
  }
});