import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default class PokemansIndexRoute extends Route {
    @service store

    model( params ) {
        const { pokemon_id } = params

        return this.store.findRecord( 'pokemon', pokemon_id )
    }
}