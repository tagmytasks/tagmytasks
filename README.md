# tagmytasks

## Description
This web application helps to sort, search, and filter through tasks using a system of tags that are associated with those tasks.

## Core Implementation in 24 Hours
- Create a task
- Create a tag
- Associate tasks with tags
- Sort through tags
- Sort through tasks
- Filter through tags
- Filter through tasks

### Additional task implementation if time persists
- Note taking ability or reference ability
- Drawing ability
- Code examples
- Medium (Phyiscal or digital)
- Priority (Low / Medium / High)
- Workflow (Not started / In Progress / Completed)
- Time Tracker (Start a timer to track how much time you spent on each task)

## Additional implementation if time persists
- Login page and authentication
- API's or page scraping to dynamically populate task & tag list
- Dashboard view for an overview of all your tasks and tags and time invested for each

## Technologies
- Meteorjs
- MongoDB
- HTML5
- Bootstrap

## Requirements
In order to work on the app at its current state you need:
- A modern web browser
- Meteor installed

## Getting Started
1. Ensure that meteor is installed. If not click [here](https://www.meteor.com/install).
2. Clone the repo `git clone https://github.com/tagmytasks/tagmytasks.git`
3. `cd` to the project directory
4. run the command `meteor`
5. The project will be hosted on `localhost:3000` by default

## Adding items to the database
`db.collectionname.insert({'fieldname':'value'})
`db.tasks.insert({'name':'taskname'})
`db.tags.insert({'name':'tagname'})

## Workflow
We are using waffle.io to manage this project using simple KANBAN styled boards. If you would like to join the board, simply go to the link [here](https://waffle.io/tagmytasks/tagmytasks).
