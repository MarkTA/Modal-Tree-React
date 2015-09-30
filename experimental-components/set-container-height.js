var tiers = ['1234', '12', '12345', '1', 'uhfuhfuhfuhf'];

tierHeight(tiers );
function tierHeight(a) {
            var x="a";
        for (var i = 0; i < a.length; i++) {
            if (a[i].length>x.length){
            var x = a[i]
            }
        }

           console.log(x.length);
}
