
function replaceImage() {
        document.getElementById("mainillustration").src="/tnfcodepublic/img/typewriter_animated.gif";
    }

$(document).ready(function() {


    var arr = new Array();
    $("select[multiple]").change(function() {
        $(this).find("option:selected")
        if ($(this).find("option:selected").length > 3) {
            $(this).find("option").removeAttr("selected");
            $(this).val(arr);
        }
        else {
            arr = new Array();
            $(this).find("option:selected").each(function(index, item) {
                arr.push($(item).val());
            });
        }
    });

});
