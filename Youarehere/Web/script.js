let delay = 0;
d3.select("#g1485")
    .selectAll("path")
    .attr("transform", function (d, i) {
        return d3.select(this).attr("transform") ? d3.select(this).attr("transform") : "" + "scale(0)";
    })
    .transition()
    .duration(700)
    .delay(function (d, i) {
        return i * 300 + delay;
    })
    .attr("transform", function (d, i) {
        return (d3.select(this).attr("transform") ? d3.select(this).attr("transform").replace("scale(0)", "") : "" + "scale(1)");
    })

d3.select("#g1421")
    .selectAll("path")
    .attr("transform", function (d, i) {
        return d3.select(this).attr("transform") ? d3.select(this).attr("transform") : "" + "scale(0)";
    })
    .transition()
    .duration(700)
    .delay(function (d, i) {
        return i * 300 + delay;
    })
    .attr("transform", function (d, i) {
        return (d3.select(this).attr("transform") ? d3.select(this).attr("transform").replace("scale(0)", "") : "" + "scale(1)");
    })

d3.select("#g1453")
    .selectAll("path")
    .attr("transform", function (d, i) {
        return d3.select(this).attr("transform") ? d3.select(this).attr("transform") : "" + "scale(0)";
    })
    .transition()
    .duration(700)
    .delay(function (d, i) {
        return i * 300 + delay;
    })
    .attr("transform", function (d, i) {
        return (d3.select(this).attr("transform") ? d3.select(this).attr("transform").replace("scale(0)", "") : "" + "scale(1)");
    })

// 'easeInQuad'	'easeOutQuad'	'easeInOutQuad'
// 'easeInCubic'	'easeOutCubic'	'easeInOutCubic'
// 'easeInQuart'	'easeOutQuart'	'easeInOutQuart'
// 'easeInQuint'	'easeOutQuint'	'easeInOutQuint'
// 'easeInSine'	'easeOutSine'	'easeInOutSine'
// 'easeInExpo'	'easeOutExpo'	'easeInOutExpo'
// 'easeInCirc'	'easeOutCirc'	'easeInOutCirc'
// 'easeInBack'	'easeOutBack'	'easeInOutBack'
// 'easeInBounce'	'easeOutBounce'	'easeInOutBounce'



// Create a timeline with default parameters
var tl = anime.timeline({
    easing: 'easeInOutSine',
    // duration: 500
});


let element = ["CA", "COO", "RC", "FC"];

element.forEach(function (s, i) {

    var translate = d3.select('[inkscape-label="' + s + '"]').attr("transform")
    var parts = /translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(translate);
    var fromTransform = ""
    var toTransform = "";
    if (parts) {
        var firstX = parseFloat(parts[1]),
            firstY = parseFloat(parts[2]);
        console.log(firstX, firstY)
        fromTransform = "translate(" + firstX + "," + (-1000) + ")";
        toTransform = "translate(" + firstX + "," + firstY + ")";
        // console.log(text)
    } else {
        fromTransform = "translate(0,-200)";
        toTransform = "translate(0,0)";
        // console.log(text)
    }

    tl.add({
        targets: '[inkscape-label="' + s + '"]',
        transform: [fromTransform, toTransform],
        loop: false,
        duration: 300,
        delay: i == 0 ? 1500 : 0
    })
})


var translate = d3.select('[inkscape-label="' + "YH" + '"]').attr("transform")
var parts = /translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(translate);
var fromTransform = ""
var toTransform = "";
if (parts) {
    var firstX = parseFloat(parts[1]),
        firstY = parseFloat(parts[2]);
    console.log(firstX, firstY)
    fromTransform = "translate(" + firstX + "," + (500) + ") scale(1)";
    toTransform = "translate(" + firstX + "," + firstY + ") scale(1)";
    console.log(fromTransform, toTransform)
} else {
    fromTransform = "translate(0,500) scale(1)";
    toTransform = "translate(0,0)  scale(1)";
    console.log(fromTransform, toTransform)
}

anime({
    targets: '[inkscape-label="' + "YH" + '"]',
    transform: [fromTransform, toTransform],
    loop: false,
    opacity: [0, 1],
    easing: 'linear',
    duration: 1000,
    delay: 3000
})


var translate = d3.select('[inkscape-label="' + "CHARACTER" + '"]').attr("transform")
var parts = /translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(translate);
var fromTransform = ""
var toTransform = "";
if (parts) {
    var firstX = parseFloat(parts[1]),
        firstY = parseFloat(parts[2]);
    console.log(firstX, firstY)
    fromTransform = "translate(" + firstX + "," + (-500) + ") scale(1)";
    toTransform = "translate(" + firstX + "," + firstY + ") scale(1)";
    console.log(fromTransform, toTransform)
} else {
    fromTransform = "translate(0,-500) scale(1)";
    toTransform = "translate(0,0)  scale(1)";
    console.log(fromTransform, toTransform)
}

anime({
    targets: '[inkscape-label="' + "CHARACTER" + '"]',
    transform: [fromTransform, toTransform],
    loop: false,
    opacity: [0, 1],
    easing: 'linear',
    duration: 1000,
    delay: 4000
})

// tl.add({
//     targets: '#g1623',
//     transform: ["translate(998.861 -200) scale(1)", "translate(998.861 305.639) scale(1)"],
//     loop: false,
//     duration: 300,
//     delay: 1500
// }).add({
//     targets: '#g1539',
//     transform: ["translate(823.699 -200) scale(1)", "translate(823.699 191.625) scale(1)"],
//     loop: false,
//     duration: 300
// })
//     .add({
//         targets: '#g1389',
//         transform: ["translate(1183.948 -488.414)", "translate(1183.948 488.414)"],
//         loop: false,
//         duration: 300
//     })
//     .add({
//         targets: '#g1367',
//         transform: ["translate(817.921 -483.055)", "translate(817.921 483.055)"],
//         loop: false,
//         duration: 300
//     });


// d3.select(".right")
// .transition()
// .duration(700)
// .style("transform", function (d, i) {
//     return (d3.select(this).attr("transform").replace("scale(0)", "") + "scale(1)");
// })


setTimeout(function () {

    // $('.container-main').removeClass("grid-cols-2")
    d3.select(".left")
        .transition()
        .duration(700)
        .style("width", "0%")

    d3.select(".right")
        .transition()
        .duration(700)
        .style("width", "100%");




    var tl2 = anime.timeline({
        easing: 'easeInOutSine',
        duration: 750
    });


    tl2.add({
        targets: 'svg',
        translateX: "50%",
        scale: [1, 1.2],
        loop: false,
        duration: 300,
        delay: 450,
        complete: function () {
            var tl3 = anime.timeline({
                easing: 'linear',
                duration: 750
            });

            tl3.add({
                targets: '#text25793',
                transform: ["translate(0 100) scale(1)", "translate(0 0) scale(1)"],
                opacity: [0, 1],
                loop: false,
                duration: 500,
                delay: 0
            })
                .add({
                    targets: '#text25781',
                    transform: ["translate(138.348 100) scale(1)", "translate(138.348 0) scale(1)"],
                    opacity: [0, 1],
                    loop: false,
                    duration: 500,
                    delay: 0
                })
                .add({
                    targets: '#text25601',
                    transform: ["translate(0 131.784) scale(1)", "translate(0 31.784) scale(1)"],
                    opacity: [0, 1],
                    loop: false,
                    duration: 500,
                    delay: 0
                })
                .add({
                    targets: '#text25807',
                    transform: ["translate(148.233 100) scale(1)", "translate(148.233 0) scale(1)"],
                    opacity: [0, 1],
                    loop: false,
                    duration: 500,
                    delay: 0
                })
        }
    })




}, 6000)

element.forEach(function (d) {
    // d3.select('[inkscape-label="CA"]')
    //     .on("mouseover", function () {

    //         var translate = d3.select(this).attr("transform")
    //         var parts = /translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(translate);
    //         var text = "";
    //         if (parts) {
    //             var firstX = parts[1]-40,
    //                 firstY = parts[2]-20;
    //             console.log(firstX, firstY)
    //             text ="translate("+firstX+","+firstY+") scale(1.2)";
    //             console.log(text)
    //         }else{
    //             text ="translate(-40,-20) scale(1.2)";
    //             console.log(text)
    //         }
    //         d3.select(this)
    //             .transition()
    //             .duration(300)
    //             .attr("transform", text)
    //     })
    //     .on("mouseleave", function () {

    //         var translate = d3.select(this).attr("transform")
    //         var parts = /translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(translate);
    //         var text = "";
    //         if (parts) {
    //             var firstX = parts[1]+40,
    //                 firstY = parts[2]+20;
    //             console.log(firstX, firstY)
    //             text ="translate(-40,-20) scale(1)";
    //             console.log(text)
    //         }else{
    //             text ="translate(0,0) scale(1)";
    //             console.log(text)
    //         }
    //         d3.select(this)
    //             .transition()
    //             .duration(300)
    //             .attr("transform", text)
    //     })
})