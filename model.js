/**
 * model.js
 * Aduno project (http://aduno.meteor.com)
 * @author Braden Simpson (@bradensimpson)
 * 
 * Define the Collections used, and common client/server
 * code here.
 */
this.WorkItems = new Meteor.Collection("workitems");
this.Links = new Meteor.Collection("links");
this.Repos = new Meteor.Collection("repos");
this.ActiveUsers = new Meteor.Collection("activeusers");
this.Issues = new Meteor.Collection("issues");

// Publishing our collections
if (Meteor.is_server)
{
    Meteor.publish('workitems', function() {
      return WorkItems.find({});
    });
    Meteor.publish('users', function() {
      return Meteor.users.find({});
    });
    Meteor.publish('links', function() {
      return Links.find({});
    });
    Meteor.publish('issues', function () {
      return Issues.find({});
    });
    Meteor.publish('repos', function () {
      return Repos.find({
        privateTo: {
          $in: [null, this.userId()]
        }
      });
    });
}