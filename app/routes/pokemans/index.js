import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default class PokemansIndexRoute extends Route {
    @service store

    queryParams = {
        start: {
            refreshModel: true
        }
    };

    model( params ) {
        const offset = params.start ?? 0
        console.log( 'offset is ', offset, 'start is ', params.start )

        return this.store.queryRecord( 'pokedex', {
            offset
        } )
    }
}