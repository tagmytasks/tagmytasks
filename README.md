# tagmytasks

## Description
This web application helps to sort, search, and filter through tasks using a system of tags that are associated with those tasks.

## Inspiration
My idea stems from a problem that I’m currently facing. I have a lot of learning resources to keep track of. For example: Udemy, Coursera, Udacity, Codecademy, Khan Academy, Digital and Physical books, the list goes on. So I want to build something to have these learning objectives all in one place.

## Use Cases
I want to learn about a specific course titled “Advanced Data Structures in Java”. So I would assign this task the tags “Data Structures” and “Java” to this task. Say that the course is hosted on Udemy. So then I would assign the tag “Udemy”.
And I can go on and on, forming these tags organically as I need them. Then I'll be able to look through my tasks and tags, easily sorting, filtering, and searching through them as desired. This doesn’t only apply to developers, it really can apply to anyone trying to learn something new and having a difficult time managing all of their resources for learning.

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
- Blaze
- MongoDB
- HTML5
- CSS
- Bootstrap

## Packages
- session
- reactive-dict

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
`db.collectionname.insert({'fieldname':'value'})`
`db.tasks.insert({'name':'taskname'})`
`db.tags.insert({'name':'tagname'})`

## Workflow
We are using waffle.io to manage this project using simple KANBAN styled boards. If you would like to join the board, simply go to the link [here](https://waffle.io/tagmytasks/tagmytasks).
