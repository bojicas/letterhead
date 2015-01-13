/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'marketing'
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

Router.route('/users/:_id', {
  name: 'users.show'
});

Router.route('/users/:_id/edit', {
  name:'users.edit'
});

Router.onBeforeAction('dataNotFound');
