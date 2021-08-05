import Helper from '@ember/component/helper'

export default class AddHelper extends Helper {
    compute( nums ) {
        return nums.reduce( ( sum, num ) => ( sum + num ), 0 )
    }
}