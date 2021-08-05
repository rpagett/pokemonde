import JSONSerializer from '@ember-data/serializer/json';

export default class PokedexSerializer extends JSONSerializer {
  normalizeQueryRecordResponse(
    store,
    primaryModelClass,
    payload,
    id,
    requestType
  ) {
    const newPayload = {
      ...payload,
      id: Date.now(),
    };

    console.log(newPayload);

    return super.normalizeQueryRecordResponse(
      store,
      primaryModelClass,
      newPayload,
      id,
      requestType
    );
  }
}
