
/////////haleema///////////////


let  customerName=prompt('Customer Name:');
let currentMonth=prompt('Current Month:', );
let numberOfUnits=parseInt(prompt('Number of Units:',)); 
let chargesPerUnit=parseInt(prompt('Charges per Unit:', )) ;
let latePaymentSurcharge=parseInt( prompt('Late Payment Surcharge:', ));




let NetAmountPayable  = (numberOfUnits *  chargesPerUnit)
let GrossAmountPayable= (  NetAmountPayable + latePaymentSurcharge)
let DueDate = (new Date(currentMonth + " 1, " + birthyear)).toDateString();
document.write("<b>Customer Name:</b> ", customerName ,"<br>")
document.write("<b>Current Month:</b> ", currentMonth ,"<br>")
document.write("<b>Number of Units:</b> ", numberOfUnits ,"<br>")
document.write("<b>Charges per Unit:</b> ", chargesPerUnit ,"<br>")
document.write("<b>Net Amount Payable (within Due Date):</b> ", NetAmountPayable ,"<br>")
document.write("<b>Gross Amount Payable (after Due Date):</b> ", GrossAmountPayable ,"<br>")
document.write("<b>Due Date:</b> ", DueDate ,"<br>")


/////////////////////////////////aiman khan/////////////////////
document.write("<h1> ANSWER NO:14</h1>") 
document.write("<h1>K ELECTRIC BILL</h1>") 
let name=prompt(" enter your  name",'');
document.write("customer name :"+name);
document.write("<br>")
let month=prompt(" enter your month name",'');
document.write("current month:"+month);
document.write("<br>")
let num=prompt(" enter your number of units",'');
document.write("number of units:"+num);
document.write("<br>")
let unit=prompt(" enter your charges per unit",'');
document.write("charges per unit:"+unit);
document.write("<br>")
let netamount=prompt(" Net Amount Payable (within Due Date)",'');
document.write("net amount pay abel with in due date:"+netamount);
document.write("<br>")
let late=prompt(" enter the Late Payment Surcharge",'')
document.write("Enter the late payment charges:"+late);
document.write("<br>")
let gross=prompt(" enter the Gross Amount Payable (after Due Date)",'');
document.write("gross amount:"+gross)
let solve=netamount=num*unit
document.write(solve);
document.write("<br>")
let grass=gross=netamount+late;
document.write(grass);






