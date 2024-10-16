function evenChecker(number){
    if (number % 2 ===0){
        return 'even'
    } else {
        return'odd'
    }
}

function checkMultipleNumbers (start, end){
    for(let i=start;i<=end;i++){
        let result = evenChecker(i)
    }
}