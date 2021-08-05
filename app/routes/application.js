import { inject as service } from '@ember/service'
import Route from '@ember/routing/route'

export default class ApplicationRoute extends Route {
  @service intl
  @service store

  beforeModel() {
    this.intl.setLocale( localStorage.getItem( 'locale' ) ?? [ 'en-us' ] )
  }
}
