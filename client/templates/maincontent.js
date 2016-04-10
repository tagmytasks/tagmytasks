import { Template } from 'meteor/templating';

import { Tasks } from '../../imports/db/collections.js';
import { Tags } from '../../imports/db/collections.js';

import './maincontent.html';
import './maincontentModal.html';

Template.maincontent.helpers({

    tasks() {
        return Tasks.find({});
    },
});

Template.maincontent.events({
  'click #add': function(e) {
    e.preventDefault();

    jQuery.noConflict();

    Modal.show('maincontentModal');
  }
});