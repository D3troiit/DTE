blacklist = [
        "51ba486d3e083e3da107b770", //<M><a><R><o><Z> 15/06/2013 - 15/07/2013
        "51a454743b79033963ae8123", //Scotty Baboon 09/06/2013 - 09/07/2013
        "50aeb0b4c3b97a2cb4c2ae98", //[BE] ?gs??e ?[FR] 09/06/2013 - 09/07/2013
        "51866a83877b924554910cb1", //Renatoo 07/06/2013 - 07/07/2013
        "513f041c96fba55099acdc44", //Sadsleeper 05/06/2013 - 05/07/2013
        "519fcc8f96fba554a69256a0", //YowZa permanent
        "51adcd1e3b79033963b95d42", //HannyYokmubakalee permanent
        "51b5e2003b79030bbac982a4", //What'sup yo permanent
        "51a7e9963b79033963b2203a", //My name is SKRILLEX permanent
        "51baebf296fba562bc55acdb" //Lekshu.. Permanent
];

API.addEventListener(API.USER_JOIN, checkBlacklist);

function checkBlacklist(user) {
        if (blacklist.indexOf(user.id) > -1 ) {
                API.sendChat("/me blacklisted user detected!");
                API.moderateBanUser(user.id, "Blacklisted User. banned for 30 days");
        }
}


//I sowwy Midi!!
 
API.addEventListener(API.CHAT, getID);
function getID(data)
{
  var idCmdCheck=data.message.substr(0,4)
  if(idCmdCheck=="/id ")
  {
    var idCommand = data.message.trim();
    for (var i=0;i<API.getStaff().length;i++) 
    {
      if (API.getStaff()[i].id==data.fromID)
      {
        var idUser = data.message.replace("/id ","");
        for(var j=0;j<API.getUsers().length;j++)
        {
          if(API.getUsers()[j].username==idUser)
          {
            log("User Name = "+API.getUsers()[j].username);
            log("User ID = "+API.getUsers()[j].id);  
            break;
          }
        }
      }
    }
  }
}
*
