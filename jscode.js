function mlines(x) {
    var proxy = 'dash' + x;
    var str = document.getElementById(proxy).value;
    var lines = str.split(/(?<=:[0-9]{2})\n(?![a-zA-Z|"])/);
    var t = document.getElementById(proxy);
    t.scrollTop = 0;
    //alert(lines);
    if (lines.length < 1)
        return false;
    if (lines.length > 16)
        alert("More than 15 records detected.");
    var p, n = 0;
    while (x < lines.length + 1) {

        p = 'dash' + x;
        document.getElementById(p).value = lines[n];
        langchange(x);
        x++;
        n++;

    }


}
function copyall() {
    var x = 1;
    var d = "disp" + x;
    var data = "";
    while (x < 16) {
        d = "disp" + x;
        if (document.getElementById(d).value !== "")
            data += document.getElementById(d).value + "\n";
        x++;
    }

    var th = document.getElementById("hiddentxt");
    th.value = data;
    th.select();
    document.execCommand("copy");

}


function checkdframe() {

    var ast;
    var valu = document.getElementById("framerate1").value;
    for (var k = 2; k < 16; k++) {

        ast = "framerate" + k;

        document.getElementById(ast).value = valu;
        //document.getElementById(ast).innerHTML=valu;
    }



}

function checkdtask() {

    var ast;
    var valu = document.getElementById("ptype1").value;
    for (var k = 2; k < 16; k++) {

        ast = "ptype" + k;

        document.getElementById(ast).value = valu;
        //document.getElementById(ast).innerHTML=valu;
    }
}


function checkdlang() {

    var ast;
    var valu = document.getElementById("LanguageCode1").value;
    for (var k = 2; k < 16; k++) {

        ast = "LanguageCode" + k;

        document.getElementById(ast).value = valu;
        //document.getElementById(ast).innerHTML=valu;
    }

}

function checkdep() {

    var ast;
    var valu = document.getElementById("ep1").value;
    for (var k = 2; k < 16; k++) {

        ast = "ep" + k;

        document.getElementById(ast).value = valu;
        //document.getElementById(ast).innerHTML=valu;
    }
}


function checkdmisc() {
    var ast;
    var valu = document.getElementById("misc1").value;
    for (var k = 2; k < 16; k++) {
        ast = "misc" + k;
        document.getElementById(ast).value = valu;
    }
}

function checkdtyp() {

    var ast;
    var valu = document.getElementById("typ1").value;
    for (var k = 2; k < 16; k++) {

        ast = "typ" + k;

        document.getElementById(ast).value = valu;
        //document.getElementById(ast).innerHTML=valu;
    }
}


var view = 1;
var dec = 0;
function dashNM() {
    var d, m, t, e, s;
    for (var i = 1; i < 16; i++) {
        d = 'dash' + i;
        m = 'mo' + i;
        t = 'mt' + i;
        e = 'en' + i;
        s = 'sea' + i;
        document.getElementById(d).required = true;
        document.getElementById(d).hidden = false;
        document.getElementById(m).hidden = true;
        document.getElementById(t).hidden = true;

        document.getElementById(m).required = false;
        document.getElementById(t).required = false;

        document.getElementById(e).hidden = true;
        document.getElementById(s).hidden = true;
        document.getElementById("manualbutton").hidden = false;
        document.getElementById("dashbutton").hidden = true;
    }
    dec = 0;
}

function manual() {
    var d, m, t, e, s;
    for (var i = 1; i < 16; i++) {
        d = 'dash' + i;
        m = 'mo' + i;
        t = 'mt' + i;
        e = 'en' + i;
        s = 'sea' + i;

        document.getElementById(d).required = false;
        document.getElementById(d).hidden = true;
        document.getElementById(m).hidden = false;
        document.getElementById(t).hidden = false

        //document.getElementById(m).required = true;
        document.getElementById(t).required = true;

        document.getElementById(e).hidden = false;
        document.getElementById(s).hidden = false;
        document.getElementById("dashbutton").hidden = false;
        document.getElementById("manualbutton").hidden = true;
    }
    dec = 1;
}

function langchange(x) {
    var d = "dash" + x;
    var e = "ep" + x;
    var f = "framerate" + x;
    var ds = document.getElementById(d).value;
    var p = "ptype" + x;
    var e = "ep" + x;
    var l = "LanguageCode" + x;
    var ep1;
    var dash = ds.split("\t");
    var lang = "";





    var mo = dash[1];
    eptitle = dash[16];



    if (mo == "")
        eptitle = dash[11];

    if (eptitle !== null)
        var z = eptitle.match(/\[[0-9A-Z]*[0-9]+\/*[0-9]*\]/);

    document.getElementById(e).value = "";
    document.getElementById(f).value = ""
    document.getElementById(p).value = ""

    if (z !== null) {

        var shownamefull = eptitle.split(z);

        epname = shownamefull[1];
        var epwn = epname.match(/Episode *[0-9]+|EPISODE *[0-9]+/g);

        if (epwn == null)
            epwn = shownamefull[0].match(/Episode *[0-9]+|EPISODE *[0-9]+/g);


        if (epwn !== null) {
            var temp = epwn.toString();
            epname = "";
            ep1 = temp.match(/[0-9]+/);
            ep1 = ep1.toString();
            document.getElementById(e).value = ep1;
        }


        var sn = z.toString();
        if (sn.length == 5) {
            ep1 = sn.substring(2, 4);
            document.getElementById(e).value = ep1;
        }

        if (sn.length == 3) {
            ep1 = sn.charAt(1);
            document.getElementById(e).value = ep1;
        }
        if (sn.length == 4) {
            ep1 = sn.match(/[0-9]{2}/);
            document.getElementById(e).value = ep1;
        }
    }

    if (ds.match(/Arabic/)) document.getElementById(l).selectedIndex = 1;
    else if (ds.match(/Bulgarian/)) document.getElementById(l).selectedIndex = 2;
    else if (ds.match(/Burmese/)) document.getElementById(l).selectedIndex = 3;
    else if (ds.match(/Chinese Simplified/)) document.getElementById(l).selectedIndex = 4;
    else if (ds.match(/Chinese Traditional/)) document.getElementById(l).selectedIndex = 5;
    else if (ds.match(/Croatian/)) document.getElementById(l).selectedIndex = 6;
    else if (ds.match(/Czech/)) document.getElementById(l).selectedIndex = 7;
    else if (ds.match(/Danish/)) document.getElementById(l).selectedIndex = 8;
    else if (ds.match(/Dutch/)) document.getElementById(l).selectedIndex = 9;
    else if (ds.match(/Finnish/)) document.getElementById(l).selectedIndex = 12;
    else if (ds.match(/French [Parisian\/Euro]/)) document.getElementById(l).selectedIndex = 13;
    else if (ds.match(/French [Canadian\/Quebecois]/)) document.getElementById(l).selectedIndex = 14;
    else if (ds.match(/German/)) document.getElementById(l).selectedIndex = 15;
    else if (ds.match(/Greek/)) document.getElementById(l).selectedIndex = 16;
    else if (ds.match(/Hebrew/)) document.getElementById(l).selectedIndex = 17;
    else if (ds.match(/Hindi/)) document.getElementById(l).selectedIndex = 18;
    else if (ds.match(/Hungarian/)) document.getElementById(l).selectedIndex = 19;
    else if (ds.match(/Indonesian/)) document.getElementById(l).selectedIndex = 20;
    else if (ds.match(/Italian/)) document.getElementById(l).selectedIndex = 21;
    else if (ds.match(/Korean/)) document.getElementById(l).selectedIndex = 23;
    else if (ds.match(/Latvian/)) document.getElementById(l).selectedIndex = 24;
    else if (ds.match(/Malay/)) document.getElementById(l).selectedIndex = 25;
    else if (ds.match(/Norwegian/)) document.getElementById(l).selectedIndex = 26;
    else if (ds.match(/Norwegian Nynorsk/)) document.getElementById(l).selectedIndex = 27;
    else if (ds.match(/Norwegian Bokmal/)) document.getElementById(l).selectedIndex = 28;
    else if (ds.match(/Polish/)) document.getElementById(l).selectedIndex = 29;
    else if (ds.match(/Portuguese Brazilian|Portuguese \(BRZ\)/)) document.getElementById(l).selectedIndex = 30;
    else if (ds.match(/Portuguese European/)) document.getElementById(l).selectedIndex = 31;
    else if (ds.match(/Romanian/)) document.getElementById(l).selectedIndex = 32;
    else if (ds.match(/Russian/)) document.getElementById(l).selectedIndex = 33;
    else if (ds.match(/Serbian/)) document.getElementById(l).selectedIndex = 34;
    else if (ds.match(/Slovak/)) document.getElementById(l).selectedIndex = 35;
    else if (ds.match(/Spanish CST|Spanish Castilian|\(CST\)/)) document.getElementById(l).selectedIndex = 36;
    else if (ds.match(/Latin Spanish|Spanish \(LAS\)|LAS/)) document.getElementById(l).selectedIndex = 37;
    else if (ds.match(/Swedish/)) document.getElementById(l).selectedIndex = 38;
    else if (ds.match(/Tagalog/)) document.getElementById(l).selectedIndex = 39;
    else if (ds.match(/Thai/)) document.getElementById(l).selectedIndex = 40;
    else if (ds.match(/Turkish/)) document.getElementById(l).selectedIndex = 41;
    else if (ds.match(/Ukrainian/)) document.getElementById(l).selectedIndex = 42;
    else if (ds.match(/Vietnamese/)) document.getElementById(l).selectedIndex = 43;
    else if (ds.match(/English/)) document.getElementById(l).selectedIndex = 10;
    else if (ds.match(/English (UK)/)) document.getElementById(l).selectedIndex = 11;
    else if (ds.match(/Japanese/)) document.getElementById(l).selectedIndex = 22;






}

/*removed and merged into existing code by checking for mo instead of clicking button.
function opview(){

view = 2;
document.getElementById("opbut").hidden = true;
document.getElementById("lsvbut").hidden = false;
}
	
function lsvview(){
view = 1;
document.getElementById("opbut").hidden = false;
document.getElementById("lsvbut").hidden = true;
}
*/


var globvar = 16;

function submitforms() {

    for (var i = 1; i < globvar; i++) {
        var mt = "mt" + i;
        var dash = "dash" + i;
        var but = "but" + i;
        if (document.getElementById(dash).value !== "") {
            document.getElementById(but).click();
        }
        if (document.getElementById(mt).value !== "") {
            document.getElementById(but).click();
        }
    }

    return false;


}


function funcopy(x) {
    var d = 'disp' + x;

    var tocop = document.getElementById(d);

    tocop.select();
    document.execCommand("copy");
    return false;

}

function myFunction(x) {
    //to change names with forms
    var lc = 'LanguageCode' + x;

    var ft = 'framerate' + x;
    var e = 'ep' + x;
    var d = 'disp' + x;

    var pt = 'ptype' + x;
    var ds = 'dash' + x;
    var mis = 'misc' + x;
    var ty = 'typ' + x;
    var pq = 'pquer' + x;

    //var str = document.getElementById(proxy).value ;
    var lang = document.getElementById(lc).value;

    var frt = document.getElementById(ft).value;
    var ep1 = document.getElementById(e).value;

    var ptype = document.getElementById(pt).value;
    var dsh = document.getElementById(ds).value;
    var misc = document.getElementById(mis).value;
    var type = document.getElementById(ty).value;

    if (document.getElementById(pq).checked)
        var pq = '_PenQueries';
    else
        pq = '';


    if (misc.length < 1) {
        misc = "";
    }
    else
        misc = misc + "_";

    type = type + "_";

    if (lang == '' || frt == '' || ptype == '' || type == '') {
        alert("Enter all values.");
        return false;


    }



    if (dec == 0) {
        //var dsh = document.getElementById(ds).value;
        var ep;
        var dashspl = dsh.split("\t");
        var mo, eptitle, untoep;
        //language services view
        mo = dashspl[1];
        eptitle = dashspl[16];
        untoep = dashspl[16];


        if (mo == "") {
            //operations schedule
            mo = dashspl[9];
            eptitle = dashspl[11];
            untoep = dashspl[11];
        }

        if (mo == "") {
            alert("Something's not right!")
        }




        var z = eptitle.match(/\[[0-9A-Z]*[0-9]+\/*[0-9]*\]/);

        //if [] present in dash name
        if (z !== null) {

            var shownamefull = eptitle.split(z);
            var showname = shownamefull[0];
            var epname = "";
            epname = shownamefull[1];
            var testep = epname.match(/Episode|EPISODE/g);
            if (testep == "Episode" || testep == "EPISODE") {
                epname = "";

            }
            ///copied to langchange()
            /*var epwn = epname.match(/Episode *[0-9]+|EPISODE *[0-9]+/g);
            if(epwn!==null)
                var temp = epwn.toString();
        
            if(epwn!==""){
        	
                epname="";
            	
                ep1=temp.match(/[0-9]+/);
                ep1=ep1.toString();
            }*/


            if (epname !== '')
                epname = epname.replace(/ /g, '');



            var showseaswn = shownamefull[0].match(/(Season [0-9]+)/);
            var showS = shownamefull[0].match(/S[0-9]+/);
            var ssplit;

            var seasonnumber = "";

            z = z.toString();
            //if of the format with Season # or S#
            if (showseaswn !== null || showS !== null) {


                if (showseaswn !== null) {

                    var showseas = showseaswn[0].split(" ");
                    seasonnumber = showseas[1];

                    ssplit = "Season " + seasonnumber;
                }

                if (showS !== null) {
                    var showseas = showS[0].split("S");
                    var seasonnumber = showseas[1];
                    ssplit = "S" + seasonnumber;

                }

                var sname = shownamefull[0].split(ssplit);
                var shownamews = sname[0];
                showname = shownamews.replace(/( |:|-)/g, '');

            }

            else {

                showname = showname.replace(/( |:|-)/g, '');
                showname = showname.replace(/\[/g, '_[');


            }

            if (seasonnumber !== "") {


                if (seasonnumber.length < 2)
                    seasonnumber = "0" + seasonnumber;
                if (ep1.length < 2 && ep1 !== 0)
                    ep1 = "0" + ep1;

                if (epname != "" || shownamefull[1].length < 1) {


                    if (ep1 == 0 && z.match(/F[0-9]/) == "")
                        alert("Episode number not entered.");

                    showname = showname.replace(/_/g, '');
                    if (seasonnumber == 0 || seasonnumber == null)
                        alert("Season number not detected.");
                    if (z.match(/F[0-9]/)) {
                        ep1 = z.replace(/\[|\]/g, '');


                        var fnam = mo + "_" + lang + "_" + showname + "_" + "S" + seasonnumber + "_" + ep1 + "_" + epname + "_" + frt + "_" + type + misc + ptype + pq;
                    }

                    else
                        var fnam = mo + "_" + lang + "_" + showname + "_" + "S" + seasonnumber + "_" + "E" + ep1 + "_" + epname + "_" + frt + "_" + type + misc + ptype + pq;


                    fnam = fnam.replace(/( |"|“|”|\?|!|,|')/g, '');
                    fnam = fnam.replace(/\[/g, '_[');
                    fnam = fnam.replace(/\]/g, ']_');

                    //temp fix for season and episode				
                    if (/_Season[0-9]{2}/.test(fnam))
                        fnam = fnam.replace(/Season/, 'S');
                    else if (/_Season[0-9]{1}/.test(fnam))
                        fnam = fnam.replace(/Season/, 'S0');


                    if (/_Episode[0-9]{2}/.test(fnam))
                        fnam = fnam.replace(/Episode/, 'E');
                    else if (/_Episode[0-9]{1}/.test(fnam))
                        fnam = fnam.replace(/Episode/, 'E0');
                    fnam = fnam.replace(/_+/g, '_');

                    document.getElementById(d).value = fnam;
                    return false;
                }
                else {

                    if (ep1 == 0)
                        alert("Episode number not entered.");


                    showname = showname.replace(/_/g, '');
                    if (seasonnumber == 0 || seasonnumber == null)
                        alert("Season number not detected.");

                    var fnam = mo + "_" + lang + "_" + showname + "_" + "S" + seasonnumber + "_" + "E" + ep1 + "_" + frt + "_" + type + misc + ptype + pq;
                    fnam = fnam.replace(/( |"|“|”|\?|!|,|')/g, '');
                    fnam = fnam.replace(/\[/g, '_[');
                    fnam = fnam.replace(/\]/g, ']_');
                    //temp fix for season and episode				
                    if (/_Season[0-9]{2}/.test(fnam))
                        fnam = fnam.replace(/Season/, 'S');
                    else if (/_Season[0-9]{1}/.test(fnam))
                        fnam = fnam.replace(/Season/, 'S0');


                    if (/_Episode[0-9]{2}/.test(fnam))
                        fnam = fnam.replace(/Episode/, 'E');
                    else if (/_Episode[0-9]{1}/.test(fnam))
                        fnam = fnam.replace(/Episode/, 'E0');
                    fnam = fnam.replace(/_+/g, '_');

                    document.getElementById(d).value = fnam;
                    return false;
                }
            }
            else {

                var sn = z.toString();

                if (sn.length == 5) {
                    seasonnumber = sn.charAt(1);

                    ep1 = sn.substring(2, 4);

                }

                if (sn.length > 5)
                    seasonnumber = 5789635; //random number

                if (ep1.length < 2)
                    ep1 = "0" + ep1;

                showname = showname.replace(/_/g, '');

                epname = epname.toString();
                //for cases like legion where episode format is of [yss201]





                if (seasonnumber == 0 || seasonnumber == null) {
                    alert("Season number not detected. Default set to Season 1.");
                    seasonnumber = '1';
                }
                if (seasonnumber !== 5789635 & (epname !== "" | epname.length !== 0)) {
                    var fnam = mo + "_" + lang + "_" + showname + "_S0" + seasonnumber + "_" + "E" + ep1 + "_" + epname + "_" + frt + "_" + type + misc + ptype + pq;
                }
                else if (seasonnumber == 5789635) {
                    var fnam = mo + "_" + lang + "_" + eptitle + "_" + frt + "_" + type + misc + ptype + pq;
                }
                else {
                    var fnam = mo + "_" + lang + "_" + showname + "_" + "S0" + seasonnumber + "_" + "E" + ep1 + "_" + frt + "_" + type + misc + ptype + pq;
                }
                fnam = fnam.replace(/( |"|“|”|\?|!|,|')/g, '');
                fnam = fnam.replace(/\[/g, '_[');
                fnam = fnam.replace(/\]/g, ']_');

                //temp fix for season and episode				
                if (/_Season[0-9]{2}/.test(fnam))
                    fnam = fnam.replace(/Season/, 'S');
                else if (/_Season[0-9]{1}/.test(fnam))
                    fnam = fnam.replace(/Season/, 'S0');


                if (/_Episode[0-9]{2}/.test(fnam))
                    fnam = fnam.replace(/Episode/, 'E');
                else if (/_Episode[0-9]{1}/.test(fnam))
                    fnam = fnam.replace(/Episode/, 'E0');
                fnam = fnam.replace(/_+/g, '_');

                document.getElementById(d).value = fnam;

            }


        }
        //if [] NOT present in dash name
        else {

            var epnam = eptitle.split(/\]/);
            epnam = epnam.toString();
            eptitle = eptitle.toString();

            if (epnam != eptitle) {
                if (epnam[1] !== "" || epnam[1] !== null) {

                    if (epnam[1].length > 0) {

                        if (epnam[1] !== "Episode" || epnam[1] !== "EPISODE")
                            var fnam = mo + "_" + lang + "_" + epnam[0] + "]_" + epnam[1] + "_" + frt + "_" + type + misc + ptype + pq;
                    }
                    else {
                        eptitle = eptitle.replace(/_/g, '');
                        var fnam = mo + "_" + lang + "_" + eptitle + "_" + frt + "_" + type + misc + ptype + pq;
                    }
                    fnam = fnam.replace(/( |"|“|”|\?|!|,|')/g, '');
                    fnam = fnam.replace(/\[/g, '_[');
                    fnam = fnam.replace(/\]/g, ']_');
                    //temp fix for season and episode				
                    if (/_Season[0-9]{2}/.test(fnam))
                        fnam = fnam.replace(/Season/, 'S');
                    else if (/_Season[0-9]{1}/.test(fnam))
                        fnam = fnam.replace(/Season/, 'S0');


                    if (/_Episode[0-9]{2}/.test(fnam))
                        fnam = fnam.replace(/Episode/, 'E');
                    else if (/_Episode[0-9]{1}/.test(fnam))
                        fnam = fnam.replace(/Episode/, 'E0');
                    fnam = fnam.replace(/_+/g, '_');

                    document.getElementById(d).value = fnam;
                }
            }
            else {
                var epname = eptitle;
                epname = epname.replace(/ /g, '');
                epname = epname.replace(/"/g, '');
                epname = epname.replace(/:/g, '_');


                var fnam = mo + "_" + lang + "_" + epname + "_" + frt + "_" + type + misc + ptype + pq;
                fnam = fnam.replace(/( |"|“|”|\?|!|,|')/g, '');
                fnam = fnam.replace(/\[/g, '_[');
                fnam = fnam.replace(/\]/g, ']_');
                //temp fix for season and episode				
                if (/_Season[0-9]{2}/.test(fnam))
                    fnam = fnam.replace(/Season/, 'S');
                else if (/_Season[0-9]{1}/.test(fnam))
                    fnam = fnam.replace(/Season/, 'S0');


                if (/_Episode[0-9]{2}/.test(fnam))
                    fnam = fnam.replace(/Episode/, 'E');
                else if (/_Episode[0-9]{1}/.test(fnam))
                    fnam = fnam.replace(/Episode/, 'E0');
                fnam = fnam.replace(/_+/g, '_');
                document.getElementById(d).value = fnam;

            }

        }

    }
    if (dec == 1) {


        m = 'mo' + x;
        t = 'mt' + x;
        e = 'en' + x;
        s = 'sea' + x;
        var ename = "", season = "";
        var mo = document.getElementById(m).value;
        document.getElementById(m).required = false;
        var mt = document.getElementById(t).value;
        ename = document.getElementById(e).value;
        season = document.getElementById(s).value;
        var us = "_";
        var snu = "S", enu = "E";
        if (season.length < 2)
            snu = "S0";
        if (ep1.length < 2)
            enu = "E0";
        if (ename !== "")
            ename = ename + us;
        if (season !== "")
            season = snu + season + us;
        if (ep1 !== "")
            ep1 = enu + ep1 + us;


        if (mt == "" || frt == "" || ptype == "" || lang == "")
            alert("Enter all values");
        if (mo !== "")
            var final = mo + us + lang + us + mt + us + ename + season + ep1 + frt + us + type + misc + ptype + pq;

        if (mo == "")
            var final = lang + us + mt + us + ename + season + ep1 + frt + us + type + misc + ptype + pq;

        final = final.replace(/ /g, '');

        document.getElementById(d).value = final;
        if (mo == "")
            alert("Note: MO# not entered.");

    }

    return false;
}

