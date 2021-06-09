function lat1(){
   var V=document.getElementById('V').value;
   var R=document.getElementById('R').value;
   var t=document.getElementById('t').value;
   var sekon =document.getElementById('sekon').value;
   var W=document.getElementById('W').value;
   var W2=document.getElementById('W2').value;
   var Wresult=(((V*V)/R)*sekon);
   console.log(Wresult);
   if (V!=220) {
      document.getElementById('V').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('V').style="border:3px solid green; font-size:15px; text-align:center; "
   }
   
   if (R!=1000) {
      document.getElementById('R').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('R').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (t!=2) {
      document.getElementById('t').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('t').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (sekon!=120) {
      document.getElementById('sekon').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('sekon').style="border:3px solid green; font-size:15px; text-align:center; "
   }

   if (W!=Wresult&&W2!=Wresult) {
      document.getElementById('W').style="border:3px solid red; font-size:15px; text-align:center; "
      document.getElementById('W2').style="border:3px solid red; font-size:15px; text-align:center; "
   }
   else{
      document.getElementById('W').style="border:3px solid green; font-size:15px; text-align:center; "
      document.getElementById('W2').style="border:3px solid green; font-size:15px; text-align:center; "
   }
}