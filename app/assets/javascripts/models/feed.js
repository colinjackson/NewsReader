NewsReader.Models.Feed = Backbone.Model.extend({
  urlRoot: "api/feeds",

  parse: function (jsonResp) {
    if (jsonResp.latest_entries){
      this.entries().set(jsonResp.latest_entries, {
        parse: true
      });
      delete jsonResp.latest_entries;
    }

    return jsonResp;
  },

  entries: function () {
    if (!this._entries) {
      this._entries = new NewsReader.Collections.Entries([], {
        feed: this
      });
    }

    return this._entries;
  }
});