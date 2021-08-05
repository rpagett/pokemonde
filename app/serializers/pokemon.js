import JSONSerializer from '@ember-data/serializer/json'

export default class PokemonSerializer extends JSONSerializer {
    normalizeFindRecordResponse(
        store,
        primaryModelClass,
        payload,
        id,
        requestType
    ) {
        const newPayload = {
            ...payload,
            spriteUrl: payload.sprites.front_default,
            game_index: payload.game_indices[ payload.game_indices.length - 1 ].game_index ?? '-1',
            primary_type: payload.types[ 0 ].type.name ?? 'Unknown'
        }

        console.log( newPayload )

        return super.normalizeFindRecordResponse(
            store,
            primaryModelClass,
            newPayload,
            id,
            requestType
        )
    }
}
