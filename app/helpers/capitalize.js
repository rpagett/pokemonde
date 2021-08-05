import Helper from '@ember/component/helper'
import String from '@ember/string'

export default class CapitalizeHelper extends Helper {
    compute( [ inString ] ) {
        return String.capitalize( inString )
    }
}