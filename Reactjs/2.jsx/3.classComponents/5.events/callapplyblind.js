person = {
    name: "james",
    dataFun: function(thing) {
        console.log(this.name + "hello dear" + thing);//normal function using named
    },
};

person.dataFun("world");//james hello world

person.dataFun.call({name: "raj"},"world"); //james hello dear world//by call method
person.dataFun("world");

var func = person.dataFun.bind({name: "james"});//james hello dear world//by bind method
func("world");