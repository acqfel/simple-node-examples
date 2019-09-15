let rect = {
    perimeter: (x, y) => (2*(x+y)),
    area: (x, y) => (x*y)
};

function solveRect(l,b) {
    console.log("Solving for rectangle with l = "+
                l + " | b = " + b);
    if ( l <= 0 || b <= 0) {
        console.log("Rectangle dimensions should be greater than zero");
        console.log("l = "+l);
        console.log("b = "+b);
    } else {
        console.log("Rectangle area = "+rect.area(l,b));
        console.log("Rectangle perimete = "+rect.perimeter(l,b));
    } 
    
}

solveRect(2,4);
solveRect(-5,5);
solveRect(0,6);