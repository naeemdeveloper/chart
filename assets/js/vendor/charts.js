window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        data: [{        
            type: "bar",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            dataPoints: [      
                { y: 300878, label: "Marka C" },
                { y: 266455,  label: "Marka B" },
                { y: 169709,  label: "Marka A" },
                { y: 158400,  label: "Elmex" },
                { y: 142503,  label: "Colgate" },
                { y: 101500, label: "Kategoria past" },
            ]
        }]
    });
    chart.render();
    
}