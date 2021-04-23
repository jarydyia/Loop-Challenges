//1

for(var i = 1; i<=20 ; i++){
    if( i % 2 !== 0){
        console.log(i);
    }
};

//2

for( var i = 4 ; i >= -3.5; i-=1.5){
    console.log(i)
}

//3
var sum = 0;
for (var i =1; i<=100; i++){
    sum = sum + i
};
console.log(sum)

//4
var num=1

for (var i = 1;i*num<=100000000; i++){
    num*=i
}
console.log(i)