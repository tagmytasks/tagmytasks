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

  tags() {
      return Tags.find({});
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
   'click #add-task': function(event) {
    console.log("pressed");
    // Prevent default browser form submit
    event.preventDefault();
 
    // Insert a task into the collection
    Tasks.insert({
      task: Session.get('search'),
      url : null
    });
  },

  /* Submission of a tag in the text field */
   'submit .new-tag': function(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from text aera element
    const target = event.target;
    const text = target.text.value;
 
    // Insert a task into the collection
    Tags.insert({
      badge:text
    });
 
    // Clear form
    target.text.value = '';
  },


  /* Associate tag and tasks */
   'click .testButton': function(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
	// Get value from tasks-dropdown, {{task}}
    const tag = document.getElementById('tag-dropdown').value;
    console.log(tag);
    const task = document.getElementById('task-dropdown').value;
    console.log(task);

    const entry = Tasks.find({"task" : task }).fetch();
    const id = entry[0]._id;

    const c = Tasks.find({ task : task , badges: { $all : [ tag ] } } ).fetch();

    if(c.length === 0) {
    	Tasks.update(id, {
    		$push: { badges : tag },
    	});
	}

	else {
		alert(tag + " is already a tag for this task");
	}
  },

  /* Set a URL */
   'submit #url-and-task': function(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
	// Get value from tasks-dropdown, {{task}}
    const task = document.getElementById('task-dropdown-for-url').value;
    console.log(task);

    const target = document.getElementById('theUrlText').value;
    console.log(target);

    const entry = Tasks.find({task : task }).fetch();
    const id = entry[0]._id;

	/*Tasks.update(id, {
        task: task,
		url : target,
	}); */

	// Clear form
     //target.text.value = '';
    }

});


