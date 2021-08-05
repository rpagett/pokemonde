import Helper from '@ember/component/helper'

export default class ExtractIdHelper extends Helper {
    compute( url ) {
        url = String( url )
        if ( !url ) return -1

        if ( url.charAt( url.length - 1 ) === '/' ) {
            url = url.slice( 0, -1 )
        }
        const index = url.lastIndexOf( '/' )
        return url.substr( index + 1 )
    }
}