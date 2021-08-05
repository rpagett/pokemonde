import Model, { attr } from '@ember-data/model'

export default class PokedexModel extends Model {
  @attr( 'number' ) count
  @attr results
}
