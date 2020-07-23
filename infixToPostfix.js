function topp(arr){
    return arr[arr.length-1];
}

function preced(ch){                                        // sets the order of prededence
    if (ch == '+' || ch == '-') return 1;
    else if(ch == '*' || ch=='/') return 2;
    else if(ch == '^') return 3;
}

function val(expr){                                        // evaluates the postfix expression
    const infix = expr.split("")
    const op = [];
    const postfix = [];
    const len = infix.length;
    for( var i=0;i<len;i++){
        if(infix[i]>=0 || infix[i] <=9 || infix[i]=='.'){
            postfix.push(infix[i]);
        }
        else{
            postfix.push(" ");
            if(infix[i]=='('){
                op.push(infix[i]);
            }
            else if(infix[i]=='^'){
                op.push(infix[i]);
            }
            else if(infix[i]==')'){
                while(op.length!=0 && topp(op)!='('){
                    postfix.push(op.pop());
                    postfix.push(" ");
                }
                op.pop();
            }
            else{
                if(preced(infix[i]) > preced(topp(op))){
                    op.push(infix[i]);
                }
                else{
                    while(op.length!=0 && preced(infix[i]) <= preced(topp(op))){
                        postfix.push(op.pop());
                        postfix.push(" ");
                    }
                    op.push(infix[i]);
                }
            }
        }
        // console.log(i);
        // console.log(infix);
        // console.log(op);
        // console.log(postfix);
    }
    postfix.push(" ");
    while(op.length!=0){
        postfix.push(op.pop());
        postfix.push(" ");
    }
    const result = postfix.join("").replace(/  +/g, ' ').trim();
    console.log(result);
    return result;
}