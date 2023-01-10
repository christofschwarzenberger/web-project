function getDaysRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var days = Math.floor( t/(1000*60*60*24) );
    return days;
}

function getTimeSince(starttime){
    var t = Date.parse(new Date()) - Date.parse(starttime);
    var days = Math.floor( t/(1000*60*60*24) );
    var weeks = Math.floor( days/7 );
    var daysOfWeek = days % 7;
    return {
      'weeks': weeks,
      'days': daysOfWeek
    };
}

function getPercentage(starttime, endtime) {
    //get and set current date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '.' + mm + '.' + yyyy;

    document.getElementById('current-date').textContent = today + ' Today';

    //get percentage
    startDate = Date.parse(starttime);
    endDate = Date.parse(endtime);

    diff = endDate - startDate;
    totalDays = Math.floor( diff/(1000*60*60*24) );

    var progressDiff = Date.parse(new Date()) - Date.parse(starttime);
    var progressDays = Math.floor( progressDiff/(1000*60*60*24) );

    decimal = progressDays/totalDays;

    percentage = Math.floor(decimal * 100);
    return percentage;
}

var startDate = '2022-09-29';
var endDate = '2023-03-28';

var timeGone = getTimeSince(startDate);
var daysLeft = getDaysRemaining(endDate);
var percentComplete = getPercentage(startDate, endDate);

document.getElementById('pbd').style.height = percentComplete.toString() + '%';
document.getElementById('pbm').style.height = percentComplete.toString() + '%';
document.getElementById('current-date').style.bottom = percentComplete.toString() - 2 + '%';


/*var countdown = document.getElementById('countdown');
countdown.innerHTML = sinceText + ', ' + daysLeft.toString() + ' days left';*/