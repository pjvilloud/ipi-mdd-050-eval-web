import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  attrs: {
    artist: {embedded: 'always'}
  }
});
