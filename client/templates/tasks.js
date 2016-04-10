import { Template } from 'meteor/templating';

import { Tasks } from '../../imports/db/collections.js';
import { Tags } from '../../imports/db/collections.js';

import './maincontent.html';

Template.maincontent.helpers({

    tasks() {
        return Tasks.find({});
    },
});
