class GKeyboard {
    constructor(actions) {
        this.pressedKeys = [];
        this.actions = actions;

        this.handleTapInputs = this.mountFunctionOfFunctions(actions);

        addEventListener('keydown', function (key) {
            kb.registerKey(key.keyCode);
        });

        addEventListener('keyup', function (key) {
            kb.unregisterKey(key.keyCode);
        });

    }

    mountFunctionOfFunctions(actions) {
        let functionText = "switch(keyCode){";
        for (var prop in actions) {
            functionText += "case " + prop + ": ";
            functionText += actions[prop][0].name + "(); break;";
        }

        functionText += "}"
        log(functionText);
        return new Function("keyCode", functionText);
    }

    registerKey(keyCode) {
        if (!this.pressedKeys.includes(keyCode)) {
            this.pressedKeys.push(keyCode);
            this.handleTapInputs(keyCode);
        }
    }

    unregisterKey(keyCode) {
        for (let i = 0; i < this.pressedKeys.length; i++) {
            if (this.pressedKeys[i] == keyCode) {
                this.pressedKeys.splice(i, 1);
            }
        }
    }

    firstpress() {

    }
}

