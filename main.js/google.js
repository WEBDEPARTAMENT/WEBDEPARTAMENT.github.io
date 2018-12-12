function doPost(e)
{
  var sheet = SpreadsheetApp.openById("1Um1NVAnNvG3iakO61fGR_Ta1eScNXSM557GnrY1CvTE");
  
var n=sheet.getLastRow()+1;
    if(e.parameter.update=="1")
  {
  var r=findInColumn(e.parameter.mail,sheet);
    if(r!=-1){
      sheet.getRange("L"+r).setValue("Оплачен");
      sheet.getRange("A"+r+":"+"K"+r).setBackground("green");
    }
    else
    {
  sheet.getRange("L"+n).setValue("Оплачен");
  sheet.getRange("A"+n).setValue(e.parameter.date);
  sheet.getRange("B"+n).setValue(e.parameter.time);
  sheet.getRange("C"+n).setValue(e.parameter.name);
  sheet.getRange("D"+n).setValue(e.parameter.phone);
  sheet.getRange("E"+n).setValue(e.parameter.mail);
  //sheet.getRange("A"+n+":"+"K"+n).setBackground("green");
    }
  return 1;
  }
  sheet.getRange("A"+n).setValue(e.parameter.date);
  sheet.getRange("B"+n).setValue(e.parameter.time);
  sheet.getRange("C"+n).setValue(e.parameter.name);
  sheet.getRange("D"+n).setValue(e.parameter.phone);
  sheet.getRange("E"+n).setValue(e.parameter.mail);
  sheet.getRange("F"+n).setValue(e.parameter.campaign);
  sheet.getRange("G"+n).setValue(e.parameter.url);
  sheet.getRange("H"+n).setValue(e.parameter.utm_source);
  sheet.getRange("I"+n).setValue(e.parameter.utm_campaign);
  sheet.getRange("J"+n).setValue(e.parameter.utm_medium);
  sheet.getRange("K"+n).setValue(e.parameter.lead);
  


  
}

function findInColumn(data,sheet) {
 

  var column = sheet.getRange("E1:E5000");  // like A:A
  
  var values = column.getValues(); 
  var row = 0;

    for (var j = 0; j < values.length; j++) {
      if (values[j] == data) {

        row = j;
      }
    }    
 

  if (values[row] == data) 
  {return row+1; }
  else 
    return -1;
    
}
function test()
{
var sheet = SpreadsheetApp.openById("1Um1NVAnNvG3iakO61fGR_Ta1eScNXSM557GnrY1CvTE");
 sheet.getRange("A1").setValue("Оплачен");
}