import Component from '@glimmer/component'
import { inject as service } from '@ember/service'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class LocaleBoxComponent extends Component {
    @service intl
    @tracked locale = localStorage.getItem( 'locale' ) ?? 'en-us'

    localeToLanguage( locale ) {
        switch ( locale ) {
            case "en-us":
            case locale.substr( 0, 3 ) === "en-":
                return "English"

            case "fr-fr":
            case locale.substr( 0, 3 ) === "fr-":
                return 'Français'

            case 'es-mx':
            case locale.substr( 0, 3 ) === "es-":
                return 'Espańol'

            case 'pl':
            case 'pl-pl':
                return 'Polska'

            default:
                return 'English'
        }
    }

    languageToLocale( language ) {
        switch ( language ) {
            case 'English':
                return 'en-us'

            case 'Français':
                return 'fr-fr'

            case 'Español':
                return 'es-mx'

            case 'Polska':
                return 'pl-pl'

            default:
                return 'en-us'
        }
    }

    get languages() {
        return [ 'English', 'Français', 'Español', 'Polska' ]
    }

    get selectedLanguage() {
        return this.localeToLanguage( this.locale )
    }

    @action setLocale( language ) {
        const locale = this.languageToLocale( language )
        this.locale = locale
        localStorage.setItem( 'locale', locale )
        this.intl.setLocale( locale )
    }
}
