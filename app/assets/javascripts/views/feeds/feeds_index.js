NewsReader.Views.FeedsIndex = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, "sync remove add", this.render);
  },

  tagName: 'ul',

  render: function(){
    this.$el.empty();

    var that = this;
    this.collection.each(function (feed) {
      var view = new NewsReader.Views.FeedListItem({ model: feed });
      that.$el.append(view.render().$el);
    });
    var view = new NewsReader.Views.FeedsForm();
    this.$el.append(view.render().$el)

    return this;
  }

})