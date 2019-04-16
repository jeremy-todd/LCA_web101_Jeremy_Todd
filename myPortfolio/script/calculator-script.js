$(function() {
    let num1 = "";
    let num2 = "";
    let total = "";
    let oper1 = "";
    let oper2 = "";
    let point = 0;
    let active = 1;

    $('.calcbtn').click(function() {
        btn = $(this).attr('id');
        //console.log(btn + " was clicked");
        //console.log("num1 " + num1 + " oper1 " + oper1 + " num2 " + num2 + " total " + total);
        if(btn == "ac") {
            num1 = "";
            num2 = "";
            total = "";
            oper1 = "";
            oper2 = "";
            point= 0;
            active = 1;
        }
        if(num1 == "") {//If num1 is not empty
            if(btn == 'one') {
                num1 = 1;
            } else if(btn == 'two') {
                num1 = 2;
            } else if(btn == 'three') {
                num1 = 3;
            } else if(btn == 'four') {
                num1 = 4;
            } else if(btn == 'five') {
                num1 = 5;
            } else if(btn == 'six') {
                num1 = 6;
            } else if(btn == 'seven') {
                num1 = 7;
            } else if(btn == 'eight') {
                num1 = 8;
            } else if(btn == 'nine') {
                num1 = 9;
            } else if(btn == 'zero') {
                num1 = 0;
            } else if(btn == 'point') {
                num1 = ".";
                point = 1;
            }
            $('.display').html(num1);
        } else if(num1 != "" && oper1 == "") { //Check if num is not empty and an operator has not been selected.
            if(btn == 'one') {
                num1 = num1 + "1";
            } else if(btn == 'two') {
                num1 = num1 + "2";
            } else if(btn == 'three') {
                num1 = num1 + "3";
            } else if(btn == 'four') {
                num1 = num1 + "4";
            } else if(btn == 'five') {
                num1 = num1 + "5";
            } else if(btn == 'six') {
                num1 = num1 + "6";
            } else if(btn == 'seven') {
                num1 = num1 + "7";
            } else if(btn == 'eight') {
                num1 = num1 + "8";
            } else if(btn == 'nine') {
                num1 = num1 + "9";
            } else if(btn == 'zero') {
                num1 = num1 + "0";
            } else if(btn == 'point') {
                if(point == 0) {
                    num1 = num1 + ".";
                    point = 1;
                } else {
                    num1 = num1;
                }
            }
            $('.display').html(num1);
        } else if(num1!= "" && oper1 != "") { //Check if num1 is not empty and an operator has been selected.
            active = 2;
            if(num2 == "") {
                if(btn == 'one') {
                    num2 = 1;
                } else if(btn == 'two') {
                    num2 = 2;
                } else if(btn == 'three') {
                    num2 = 3;
                } else if(btn == 'four') {
                    num2 = 4;
                } else if(btn == 'five') {
                    num2 = 5;
                } else if(btn == 'six') {
                    num2 = 6;
                } else if(btn == 'seven') {
                    num2 = 7;
                } else if(btn == 'eight') {
                    num2 = 8;
                } else if(btn == 'nine') {
                    num2 = 9;
                } else if(btn == 'zero') {
                    num2 = 0;
                } else if(btn == 'point') {
                    num2 = ".";
                    point = 1;
                }
                $('.display').html(num2);
            } else if(num2 != "" && oper1 != "") { //Check if num2 is not empty and an operator has been selected.
                if(btn == 'one') {
                    num2 = num2 + "1";
                } else if(btn == 'two') {
                    num2 = num2 + "2";
                } else if(btn == 'three') {
                    num2 = num2 + "3";
                } else if(btn == 'four') {
                    num2 = num2 + "4";
                } else if(btn == 'five') {
                    num2 = num2 + "5";
                } else if(btn == 'six') {
                    num2 = num2 + "6";
                } else if(btn == 'seven') {
                    num2 = num2 + "7";
                } else if(btn == 'eight') {
                    num2 = num2 + "8";
                } else if(btn == 'nine') {
                    num2 = num2 + "9";
                } else if(btn == 'zero') {
                    num2 = num2 + "0";
                } else if(btn == 'point') {
                    if(point == 0) {
                        num2 = num2 + ".";
                        point = 1;
                    } else {
                        num2 = num2;
                    }
                }
                $('.display').html(num2);
            }
        }
        if(btn == "divide" || btn == "multiply" || btn == "minus" || btn == "plus") {
            if(num1 != "" && num2 == "") {
                if(btn == "divide") {
                    oper1 = btn;
                    $('.display').html(num1)
                } else if(btn == "multiply") {
                    oper1 = btn;
                    $('.display').html(num1)
                } else if(btn == "minus") {
                    oper1 = btn;
                    $('.display').html(num1)
                } else if(btn == "plus") {
                    oper1 = btn;
                    $('.display').html(num1)
                }
            } else if(num1 != "" && num2 != "") {
                if(oper1 == "divide") {
                    total = parseInt(num1) / parseInt(num2);
                    num1 = total;
                    oper2 = btn;
                    $('.display').html(num1)
                } else if(oper1 == "multiply") {
                    total = parseInt(num1) * parseInt(num2);
                    num1 = total;
                    oper2 = btn;
                    $('.display').html(num1)
                } else if(oper1 == "minus") {
                    total = parseInt(num1) - parseInt(num2);
                    num1 = total;
                    oper2 = btn;
                    $('.display').html(num1)
                } else if(oper1 == "plus") {
                    total = parseInt(num1) + parseInt(num2);
                    num1 = total;
                    oper2 = btn;
                    $('.display').html(num1)
                }
                num2 = "";
                oper1 = oper2;
                oper2 = "";
            }
            //console.log("oper1 = " + oper1);
        }
        if(btn == "equals") {
            if(oper1 == "divide") {
                total = parseInt(num1) / parseInt(num2);
                $('.display').html(total)
                //console.log("total = " + total);
                num1 = "";
                num2 = "";
                oper1 = "";
                oper2 = "";
                point = 0;
                active = 1;
            } else if(oper1 == "multiply") {
                total = parseInt(num1) * parseInt(num2);
                $('.display').html(total)
                //console.log("total = " + total);
                num1 = "";
                num2 = "";
                oper1 = "";
                oper2 = "";
                point = 0;
                active = 1;
            } else if(oper1 == "minus") {
                total = parseInt(num1) - parseInt(num2);
                $('.display').html(total)
                //console.log("total = " + total);
                num1 = "";
                num2 = "";
                oper1 = "";
                oper2 = "";
                point = 0;
                active = 1;
            } else if(oper1 == "plus") {
                total = parseInt(num1) + parseInt(num2);
                $('.display').html(total)
                //console.log("total = " + total);
                num1 = "";
                num2 = "";
                oper1 = "";
                oper2 = "";
                point = 0;
                active = 1;
            }
        }
        if(btn == "positive") {
            if(active == 1) {
                num1 = parseInt(num1) * -1;
                $('.display').html(num1);
            } else if (active == 2) {
                num2 = parseInt(num2) * -1;
                $('.display').html(num2);
            }
        }
        if(btn == "percent") {
            if(active == 1) {
                num1 = parseInt(num1) / 100;
                $('.display').html(num1);
            } else if (active == 2) {
                num2 = parseInt(num2) / 100;
                $('.display').html(num2);
            }
        }
    });
});