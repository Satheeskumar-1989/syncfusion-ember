import Ember from 'ember';
import layout from '../templates/components/ej-listview';

export default Ember.Component.extend({
  layout,
  tags: Ember.inject.service("tags"),
  tagName: window.Syncfusion.widget.registeredWidgets["ejListView"]["proto"]["validTags"][0],
  didInsertElement: function(){
    this._super(...arguments);
    this.$()["ejListView"](this.get("tags").processTags(this.attrs, this));
  },
  willDestroyElement: function () {
    this._super(...arguments);
    this.$()["ejListView"]("destroy");
  }
});
