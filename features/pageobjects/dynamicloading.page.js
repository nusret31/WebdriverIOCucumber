const { $ } = require('@wdio/globals')

class DynamicLoading {
    get FirstLoadPage(){
        return $('a[href*="/dynamic_loading/1"]');
    }    

    get SecondLoadPage(){
        return $('a[href*="/dynamic_loading/2"]');
    }

    get StartButton(){
        return $("div[id='start'] button");
    }
    get LoadingSlider(){
        return $("//div[@id='loading']/img[1]");
    }
    get FinishText(){
        return $("//div[@id='finish']/h4[1]");
    }
}

module.exports = new DynamicLoading();