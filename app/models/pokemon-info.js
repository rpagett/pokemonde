import Model, { attr } from '@ember-data/model';

export default class PokemonInfoModel extends Model {
  @attr('string') name;
  @attr sprites;
}
