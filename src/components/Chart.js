import React, { Component } from "react";
import Chart from "react-apexcharts";

class Cartpicture extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [
            "Jan 2023",
            "Februari 2023",
            "Maret 2023",
            "April 2023",
            "Mei 2023",
            "Juni 2023",
            "Juli 2023",
            "Agustus 2023",
            "September 2023",
            "Oktober 2023",
            "November 2023",
            "Desember 2023",
          ],
        },
      },
      series: [
        {
          name: "series-1",
          data: [
            2000000, 3000000, 2000000, 3000000, 2000000, 3000000, 1000000,
            2000000, 3000000, 2000000, 3000000, 1000000,
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="600"
              color="yellow"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cartpicture;
