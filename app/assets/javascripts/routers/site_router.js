NewsReader.Routers.SiteRouter = Backbone.Router.extend({
  routes: {
    "": "feedsIndex",
    "feeds/:id": "feedShow"
  },

  feedsIndex: function(){
    var view = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.Collections.feeds
    });

    NewsReader.Collections.feeds.fetch();
    $("#content").html(view.render().$el);
  },

  feedShow: function (id) {
    var feed = NewsReader.Collections.feeds.getOrFetch(id);
    var view = new NewsReader.Views.FeedShow({
      model: feed
    });

    feed.entries().fetch();
    $('#content').html(view.render().$el);
  }
});