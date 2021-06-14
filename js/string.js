const string = "Hhello worlds aba 43 2, 3"

function getcount(string){
const letter_count= {};
for (let i=0; i<string.length;i++){
    const ch=string[i];
    console.log(letter_count[ch])
    if(!letter_count[ch]){//if not define letter_count
        letter_count[ch]=0;
    }
    letter_count[ch]++;
}
return letter_count;
}
console.log(getcount(string))