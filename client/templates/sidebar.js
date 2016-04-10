import { Template } from 'meteor/templating';

import { Tags } from '../../imports/db/collections.js';

import './sidebar.html';

Template.sidebar.helpers({

    tags() {
        return Tags.find({});
    },
});
