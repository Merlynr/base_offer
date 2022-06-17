let leak =  function leakName(){
    name = "leak";
    console.log('llleak');
}
// console.log(name);

// 计时器
// let name0 = 'jake';
// setInterval(()=>{
//     console.log(name0);
// },100);

// 闭包
let outer = function(){
    let name1 = 'jaker';
    console.log('ooouter');
    
    return function(){
        return name1;
    };
};

exports.leak = leak;
exports.outer = outer;