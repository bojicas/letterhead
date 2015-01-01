/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

/*
 *  Example:
 *  Router.route('/', {name: 'home'});
*/

Router.route('/', {
  name: 'marketing',
  fastRender: true
});

Router.route('/pages', {
  name: 'pages.index'
});

Router.route('/pages/new', {
  name: 'pages.new'
});

Router.route('/pages/:_id', {
  name: 'pages.show',
  fastRender: true
});

Router.route('/settings', {
  name: 'settings.index'
});

Router.onBeforeAction('dataNotFound');
