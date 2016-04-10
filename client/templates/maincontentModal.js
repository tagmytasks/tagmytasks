import { Template } from 'meteor/templating';

import { Tasks } from '../../imports/db/collections.js';
import { Tags } from '../../imports/db/collections.js';

import './maincontent.html';
import './maincontentModal.html';

Template.maincontentModal.events({
  'click #save': function(e) {
    e.preventDefault();
    
    var theTask = {
      task: $('#taskName').val()
    }

    Meteor.call('addTask', theTask, function(error, result) {  /* addAnimal --> addTask */
      if (error) {
        alert(error);
      }
    });

    Modal.hide('maincontentModal');
  }
});