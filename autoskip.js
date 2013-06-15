overPlayed = [
  "1:kqjKOL0N8ks",
	"1:lr5KnEYtwR0",
	"1:TZAf_tuu-6M",
        "1:qcvCws2U5EE", 
        "1:CZDqzXDMtJE",
        "1:nEt1bKGlCpM", 
        "1:5f-Nqf9M1_U", 
        "1:-qbmhv7INZo", 
        "1:VAYQTA0BDx4", 
        "1:-qbmhv7INZo",
        "1:0RiQDCWsk-U",
        "1:D2tCwgb0Wmw",
        "1:e-IWRmpefzE", 
        "1:3r7-g5fOF2c", 
        "1:FjAZHgHhPMI", 
        "1:ouyC28ffPjQ", 
        "1:LQtZ0ZsTW8c", 
        "1:8cOt9UcYGOU", 
        "1:LXO-jKksQkM", 
        "1:4wTLjEqj5Xk", 
        "1:sf6LD2B_kDQ", 
        "1:F2FMDV8yW9M", 
        "1:4q-jv4OBCa0", 
        "1:-0oZNWif_jk", 
        "1:vZyenjZseXA", 
        "1:ZT4yoZNy90s", 
        "1:Bparw9Jo3dk", 
        "1:KrVC5dm5fFc",
        "1:Ys9sIqv42lo", 
        "1:1y6smkh6c-0", 
        "1:jZL-RUZUoGY", 
        "1:CrdoD9T1Heg", 
        "1:6R_Rn1iP82I", 
        "1:ea9tluQ_QtE", 
        "1:f9EM8T5K6d8", 
        "1:aHjpOzsQ9YI", 
        "1:3vC5TsSyNjU", 
        "1:yXLL46xkdlY", 
        "1:_t2TzJOyops", 
        "1:BGpzGu9Yp6Y", 
        "1:YJVmu6yttiw", 
        "1:WSeNSzJ2-Jw", 
        "1:2cXDgFwE13g", 
        "1:PR_u9rvFKzE",
        "1:OVMuwa-HRCQ",
        "1:i1BDGqIfm8U",
        "1:f7RKOP87tt4",
        "1:eOofWzI3flA",
        "1:ktvTqknDobU"
];

function autoSkip() {
	if (overPlayed.indexOf(Models.room.data.media.id) > -1) {
		API.sendChat("/me auto skip activated! song overplayed");
		setTimeout("new RoomPropsService(document.location.href.split('/')[3],true,true,1,5);", 250);
		setTimeout("new ModerationForceSkipService;", 500);
		setTimeout("new RoomPropsService(document.location.href.split('/')[3],false,true,1,5);", 750);
	}
	if (Models.room.data.media.duration > 481) {
		API.sendChat("/me auto skip activated! song exceeds 8 minutes long");
		setTimeout("new RoomPropsService(document.location.href.split('/')[3],true,true,1,5);", 250);
		setTimeout("new ModerationForceSkipService;", 500);
		setTimeout("new RoomPropsService(document.location.href.split('/')[3],false,true,1,5);", 750);
	}
}

function roomSkip() {
	var tv = Models.room.roomScore.negative + Models.room.roomScore.positive;
	var tvp = Models.room.roomScore.negative / tv;
	if(tvp >= 20 && tv >= 45) {
		new ModerationForceSkipService;
		API.sendChat("room voted to skip!");
	}
}
