
$(document).ready(function() {
    var jobhero = document.getElementById("jobhero");
    var stuck = false;
    var stickPoint = getDistance();

    function getDistance() {
    var topDist = jobhero.offsetTop;
    return topDist;
    }

    window.onscroll = function(e) {
    var distance = getDistance() - window.pageYOffset;
    var offset = window.pageYOffset;
    if ( (distance <= 0) && !stuck) {
        jobhero.style.position = 'fixed';
        jobhero.style.top = '48px';
        $('.jobheader').addClass('minimized');
        $('.jobdescription-box').addClass('margintopmaxed2');
        $('.jointnf').addClass('margintopmaxed1');
        stuck = true;
    } else if (stuck && (offset <= stickPoint)){
        jobhero.style.position = 'static';
        stuck = false;
        $('.jobheader').removeClass('minimized');
        $('.jobdescription-box').removeClass('margintopmaxed2');
        $('.jointnf').removeClass('margintopmaxed1');
    }
    }

});
