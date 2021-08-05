import Controller from '@ember/controller'
import { tracked } from '@glimmer/tracking'

export default class PokemansController extends Controller {
    queryParams = [ 'start' ]
    @tracked start = 0

    get previousOffset() {
        return Math.max( this.start - 20, 0 )
    }

    get showPreviousButton() {
        return ( this.start > 0 )
    }

    get nextOffset() {
        return Math.min( this.model.get( 'count' ) - 20, this.start + 20 )
    }

    get showNextButton() {
        return ( ( this.start + 20 ) < this.model.get( 'count' ) )
    }
}