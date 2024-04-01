const { $ } = require('@wdio/globals')

class NewWindowPage{
    get clickHereButton(){
        return $('a[href*="windows/new"]');
    }
}

module.exports = new NewWindowPage();