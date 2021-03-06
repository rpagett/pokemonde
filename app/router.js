import EmberRouter from '@ember/routing/router'
import config from 'pokemonde/config/environment'

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map( function () {
  this.route( 'pokemans', function () {
    this.route( 'detail', { path: '/:pokemon_id' } )
  } )
} )