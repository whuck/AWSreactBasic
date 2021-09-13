let countries = [
      {id:0,name:'usa',gold:0,silver:0,bronze:0},
      {id:1,name:'china',gold:0,silver:0,bronze:0}
    ];
export function getCountries() {
    return countries;
}
export function addCountry(c) {
    if(c) {
        let t = [...countries];
        //dirty but it works as long as the array doesn't get sorted out of order
        c.id = t[t.length-1].id + 1;
        c.gold=0; c.silver=0; c.bronze=0;
        t.push(c);
        countries = t;
        return countries;
    }else return countries;
}
export function deleteCountry(i) {
        let t = [...countries];
        t = t.filter(c=> c.id !== i);
        countries = t;
        return countries;
}