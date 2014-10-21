window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new NewsReader.Views.SessionView({
      el = $("#session-status")
    });
    new NewsReader.Routers.SiteRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
