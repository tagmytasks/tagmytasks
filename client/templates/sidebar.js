import { Template } from 'meteor/templating';
import { Tags } from '../../imports/db/collections.js';
import './sidebar.html';

Template.sidebar.helpers({
  tags() {
    var search = Session.get('tag-search');

    // if there is something in the search bar, search for it!
    if (search !== null)
      return Tags.find({label:new RegExp(search)});
    // else return everything in the collection
    else
      return Tags.find({});
  },
});

Template.sidebar.events({
  /*
    Search functionality. Searches as you type.
  */
  'keyup #sidebar_container': function(e) {
    e.preventDefault();
    var search = e.target.value;
    
    // if the search box is not empty, set the session variable
    if (search !== "")
      Session.set('tag-search', search);
    // else set the session variable to null so we can see all the tags
    else
      Session.set('tag-search', null);
  }
});
