let rect = require('./rectangle');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = "+
                l + " | b = " + b);
     rect(l,b, (err, rectangle) => {
        if (err) {
            console.log("ERROR: ", err.message);
        }
        else {
            console.log("Rectangle dimensions is l="+l+" and b="+b);
            console.log("Rectangle area = "+rectangle.area());
            console.log("Rectangle perimeter = "+rectangle.perimeter());
        }
     });
    console.log("This statement is after the call to rect()");
    
}

solveRect(2,4);
solveRect(-5,5);
solveRect(0,6);
/*
if ( l <= 0 || b <= 0) {
    console.log("Rectangle dimensions should be greater than zero");
    console.log("l = "+l);
    console.log("b = "+b);
} else {
    console.log("Rectangle area = "+rect.area(l,b));
    console.log("Rectangle perimete = "+rect.perimeter(l,b));
}
*/