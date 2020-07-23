function isNum(num){
    return !isNaN(num);
}

function postEval(postfix){
    const base = postfix.split(" ");
    console.log(base);
    // console.log(isNum(base[0]));
    // console.log(isNum(base[5]));

    const len = base.length;
    for (var i=0;i<len;i++){
        if(isNum(base[i])){
            base[i] = parseFloat(base[i]);
        }
    }
    console.log(base);

    // now base is ready for evaluation !!!!

    soln = [];
    for (var i=0;i<len;i++){
        if(isNum(base[i])){
            soln.push(base[i]);
        }
        else{
            const b = soln.pop();
            const a = soln.pop();
            switch(base[i]){
                case "+" :
                    soln.push(a+b);
                    break;
                case "-" :
                    soln.push(a-b);
                    break;
                case "*" :
                    soln.push(a*b);
                    break;
                case "/" :
                    soln.push(a/b);
                    break;
                case "^" :
                    soln.push(Math.pow(a,b));
                    break;
            }
        }
    }
    return soln.pop();
}