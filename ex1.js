console.log("Hello World");
const c = 1;
let l = "LET";
var v = "VAR";
console.log(c +" "+ l + " "+ v);

var unbap = new Array();
unbap.push("임정현");
unbap.push("유정섭");
unbap.push("전소명");
unbap.push("정주영");
unbap.push("최혜림");
unbap.push("홍석찬");

for(var i = 0; i< unbap.length;i++){
   console.log(`${unbap[i]}\n`);
}

var Unbap = {
   name : [],
   num : 0,
   Location : ["케나다","케냐","부산","대구","부산 위","성심당"],
}

for(var i = 0; i< unbap.length;i++){
   Unbap.name.push(unbap[i]);
}

for(var i = 0; i< Unbap.name.length;i++){
   console.log(`${Unbap.name[i]}\n`);
}

Unbap.num = i;

console.log(`${Unbap.num}명의 언밥이`);

function findLocation(){
   let input = 0;
   while(Unbap.name.indexOf(input = prompt("사는 곳을 알아볼 언밥이의 이름을 입력하세요"))==-1){
      alert("이름을 똑바로 입력해주세용");
   }
   console.log(input.slice(1)+"이는 "+Unbap.Location[Unbap.name.indexOf(input)]+"에 살아요 :)\n");
}
findLocation();

whereIsSomyeong=()=> {
   let input = 0;
   while((input = prompt("소명이가 사는 곳을 입력하쎼용"))!=Unbap.Location[Unbap.name.indexOf("전소명")]){
      alert("아 이걸 모르누 ;;;;;");
   }
   console.log("끄덕끄덕 'v'\n");
}
whereIsSomyeong();

function dummyPromise(){
   return new Promise(function(resolve, reject) {
      time = Number(prompt("몇 초 미래로 가고싶으신가요?"));
      setTimeout(function() {
         var data = `${time}초 더 늙으셨습니다...!!`;
         resolve(data);
       }, time*1000);
   });
}
dummyPromise().then(function(resolvedData) {
   alert(resolvedData);
   console.log("ㅋㅋㄹㅃㅃ");
});
