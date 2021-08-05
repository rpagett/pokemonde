import RestAdapter from '@ember-data/adapter/rest'

export default class PokemonAdapter extends RestAdapter {
    host = 'https://pokeapi.co/api/v2';

    pathForType() {
        return 'pokemon'
    }

    shouldReloadAll() {
        return false
    }
}
