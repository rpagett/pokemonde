import Model, { attr } from '@ember-data/model'

export default class PokemonModel extends Model {
  @attr( 'string' ) name
  @attr height
  @attr weight
  @attr( 'number' ) game_index
  @attr( 'string' ) spriteUrl
  @attr( 'string' ) primary_type

  @attr( 'boolean' ) isFavorite
}
