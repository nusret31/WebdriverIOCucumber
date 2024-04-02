const { $ } = require('@wdio/globals')

class EntryAdModal{
    getModal(){
        return $('.modal');
    }
    getModalTitle(){
        return $('modal-title');
    }
    getModalBody(){
        return $('modal-body');
    }
    getModalFooter(){
        return $('modal-footer');
    }
    getModalCloseButton(){
        return $("//p[text()='Close']");
    }
}

module.exports = new EntryAdModal();