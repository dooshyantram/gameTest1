
var dbs;

//creating database
function OnDeviceReady(){
   dbs = window.openDatabase("myRegDB","1.0","Simple Demo",2*1024*1024);
   dbs.transaction(createDB, errorCB, successCB);

}

//creating database table if not exist
function createDB(tx){

tx.executeSql('CREATE TABLE IF NOT EXISTS mytable(id INT, myname TEXT, surname TEXT, national TEXT, address TEXT, eml TEXT, pw TEXT)');
}

//check for error
 function errorCB(err){
    alert("SQL Error: "+err.code);

    }

//if no error display success
 function successCB(){
    alert("Database & Table Created");

    }

//function to submit form and go to homepage
function submitForm(){
    OnDeviceReady();
    dbs.transaction(insertDB, errorCB);
    $.mobile.changePage("#home", {reverse:false, transition:"slide"});
    return false;

   }

//function to insert values into the database
function insertDB(tx){
    var myname = $("[name='myname']").val();
    var surname = $("[name='surname']").val();
    var national = $("[name='national']").val();
    var address = $("[name='address']").val();
    var district = $("[name='district']").val();
    var eml = $("[name='eml']").val();
    var pw = $("[name='pw']").val();
   
    var sql = 'INSERT INTO mytable (myname, surname, national, address, eml, pw) VALUES (?,?,?,?,?,?)';
    tx.executeSql(sql,[myname,surname,national,address,eml,pw],successQueryDB, errorCB);

  }

  function successQueryDB(tx){
    alert("Insert Successful");
  

  }



 