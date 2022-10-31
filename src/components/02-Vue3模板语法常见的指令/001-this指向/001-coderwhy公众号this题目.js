
    // 1.函数在调用时,JavaScript会默认给this绑定一个值
    // 2.this的绑定和调用方式以调用的位置有关系
    // 3.this是在运行时被绑定的

    // 箭头函数不试用所有的规则

    // const obj = {
    //   name: 'obj',
    //   say() {
    //     console.log(this);
    //   }
    // }
    // obj.say()
    // // 常规模式下  如果不传或者传值表示空的值 返回window
    // obj.say.call()   // 严格模式下  undefined
    // obj.say.call(null)  // 严格模式下  null
    // obj.say.call(undefined) // 严格模式下 undefined