NewsReader.Views.FeedShow = Backbone.View.extend({
  template: JST["feeds/show"],
  initialize: function(){
    this.listenTo(this.model, 'sync', this.render)
    this.listenTo(this.model.entries(), "sync", this.render);
    this.subviews = [];
  },

  events: {
    'click button': 'refresh'
  },

  refresh: function(){
    this.model.fetch();
    this.model.entries().fetch();
  },

  render: function(){
    var renderedContent = this.template({
      feed: this.model
    });
    this.$el.html(renderedContent);

    this.model.entries().each(function (entry) {
      var view = new NewsReader.Views.EntryListItem({
        model: entry
      });
      this.subviews.push(view);
      this.$el.find("ul").append(view.render().$el);
    }.bind(this));

    return this;
  }
});