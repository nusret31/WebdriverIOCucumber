const { $ } = require('@wdio/globals')

class IframePage{

    get iframeContainer () {
        return $("//div[@class='tox tox-tinymce']");
    }

    get fileButton(){
        return $("//button[@class='tox-mbtn tox-mbtn--select']");
    }
    get editButton(){
        return $("(//button[@class='tox-mbtn tox-mbtn--select'])[2]");
    }
    get viewButton(){
        return $(".tox-mbtn tox-mbtn.nth(2)");
    }
    get formatButton(){
        return $(".tox-mbtn tox-mbtn.nth(3)");
    }

    get newDocumentButton(){
        return $("//div[contains(@class,'tox-menu-nav__js tox-collection__item')]");
    }

    get iframeDocumentArea(){
        return $("iframe");
    }

    get documentTextArea(){
        return $(".mce-content-body");
    }

}

module.exports = new IframePage();