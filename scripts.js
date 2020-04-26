'use strict';

$(document).ready(() => {
    let childDim = 960 / 16;
    let elem = $("<div></div>");
    elem.width(childDim);
    elem.height(childDim);
    elem.addClass("pixel unhovered");

    for (let i = 0; i < 256; i++) {
        $("#root").append(elem.clone());
    }

    $("div.pixel").mousedown((e) => {
        if ($(e.target).hasClass("unhovered")) {
            $(e.target).removeClass("unhovered");
            $(e.target).addClass("hovered");
        } else {
            $(e.target).removeClass("hovered");
            $(e.target).addClass("unhovered");
        }
    })

    $("#reset").click(() => {
        $(root).empty();
        let newNum = parseInt(prompt("Please enter how many pixels per row you want.", "16"));
        if (isNaN(newNum)) {
            newNum = 16;
        }
        childDim = 960 / newNum;
        elem.width(childDim);
        elem.height(childDim);
        elem.addClass("pixel unhovered");

        for (let i = 0; i < (newNum * newNum); i++) {
            $("#root").append(elem.clone());
        }
        
        $("div.pixel").mousedown((e) => {
            if ($(e.target).hasClass("unhovered")) {
                $(e.target).removeClass("unhovered");
                $(e.target).addClass("hovered");
            } else {
                $(e.target).removeClass("hovered");
                $(e.target).addClass("unhovered");
            }
        })
    })

});