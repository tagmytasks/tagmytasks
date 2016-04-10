import { Template } from 'meteor/templating';

import { Tasks } from '../../imports/db/collections.js';
import { Tags } from '../../imports/db/collections.js';

import './maincontent.html';
import './maincontentModal.html';

/*
  Helpers for displaying content from DB.
*/
Template.maincontent.helpers({
  /*
    Displays all tasks based on search parameters, if any.
  */
  tasks() {
    var search = Session.get('search');

    // if there is something in the search bar, search for it!
    if (search !== null)
      return Tasks.find({task:new RegExp(search)});
    // else return everything in the collection
    else
      return Tasks.find({});
  },
});

/*
  Events for dynamic app control.
*/
Template.maincontent.events({
  /* This is the code I tried with Modals, still wont work. Keeping for now. 
  'click #add': function(e) {
    e.preventDefault();

    jQuery.noConflict();

    Modal.show('maincontentModal');
  }, */


  /*
    Search functionality. Searches as you type.
  */
  'keyup #maincontent_container': function(e) {
    e.preventDefault();
    var search = e.target.value;

    // if the search box is not empty, set the session variable
    if (search !== "")
      Session.set('search', search);
    // else set the session variable to null so we can see all the tasks
    else
      Session.set('search', null);
  },

  /* Submission of a task in the text field */
   'submit .new-task': function(event) {

    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
 
    // Insert a task into the collection
    Tasks.insert({
      task:text,
    });
 
    // Clear form
    target.text.value = '';
  },

  /* Submission of a task in the text field */
   'submit .new-tag': function(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
 
    // Insert a task into the collection
    Tags.insert({
      label:text
    });
 
    // Clear form
    target.text.value = '';
  },
});


