module.exports = function check(str, bracketsConfig) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        for (let k = 0; k < bracketsConfig.length; k++) {
            if (stack.length < 1) {
                if (str[i] === bracketsConfig[k][0]) {
                    stack.push(str[i]);
                }
                else {
                    if (str[i] === bracketsConfig[k][1]) {
                        return false;
                    }
                }
            }
            else {
                if (str[i] === bracketsConfig[k][1]) {
                    if (stack[stack.length - 1] === bracketsConfig[k][0]) {
                        stack.pop();
                    }
                    else {
                        if (bracketsConfig[k][0] === bracketsConfig[k][1]) {
                            stack.push(str[i]);
                        }
                        else { return false; }
                    }
                }
                else {
                    if (str[i] === bracketsConfig[k][0]) {
                        stack.push(str[i]);
                        //console.log("i =", i , "k =", k)
                        //console.log(stack);
                    }
                }
            }

        }
    }
    if (stack.length != 0) { return false; }
    return true;
}
