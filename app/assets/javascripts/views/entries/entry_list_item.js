NewsReader.Views.EntryListItem = Backbone.View.extend({
  tagName: "li",
  template: JST["entries/index_li"],

  render: function () {
    var renderedContent = this.template({
      entry: this.model
    });
    this.$el.html(renderedContent);

    return this;
  }
})