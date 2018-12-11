class GKeyboard{
    constructor(){
            this.pressedKeys = [];

            addEventListener('keydown', function(key){
                log(key)
            })
    }
}