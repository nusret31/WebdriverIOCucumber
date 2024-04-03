const { $ } = require('@wdio/globals')

class DynamicLoading {
    getFirstLoadPage(){
        return $('a[href*="/dynamic_loading/1"]');
    }    

    getSecondLoadPage(){
        return $('a[href*="/dynamic_loading/2"]');
    }

    getStartButton(){
        return $("#start > button");
    }
    getLoadingSlider(){
        return $("//div[@id='loading']/img[1]");
    }
    getFinishText(){
        return $("//div[@id='finish']/h4[1]");
    }
}

module.exports = new DynamicLoading();