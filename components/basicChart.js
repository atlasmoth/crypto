import React, { memo, useEffect } from "react";

const InnerChart = ({ data }) => {
  useEffect(() => {
    Plotly.newPlot(
      data.id,
      [
        {
          name: "Price ($)",
          x: Array.from(data.sparkline_in_7d.price).map((i, index) => index),
          y: data.sparkline_in_7d.price,
          xaxis: "x",
          yaxis: "y",
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "#000", size: 2 },
        },
      ],
      {
        autosize: true,
        height: "50",
        paper_bgcolor: "transparent",
        plot_bgcolor: "transparent",
        xaxis: {
          autorange: true,
          showgrid: false,
          zeroline: false,
          showline: false,
          autotick: true,
          ticks: "",
          showticklabels: false,
        },
        yaxis: {
          autorange: true,
          showgrid: false,
          zeroline: false,
          showline: false,
          autotick: true,
          ticks: "",
          showticklabels: false,
        },
      },
      { responsive: true, displayModeBar: false, aspectRatio: { x: 1, y: 10 } }
    );
  }, []);

  return <div id={data.id} className="grow-crypto"></div>;
};

export default memo(InnerChart);
