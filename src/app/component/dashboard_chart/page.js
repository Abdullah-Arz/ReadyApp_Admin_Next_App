
import React, { Component } from "react";
import Chart from "react-apexcharts";

class page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["","District of Colombia", "Kentucky", "Idaho", "Arizona", "California", "Delaware", "Alabama", "Louisiana","Indiana"]
        }
      },
      series: [
        {
          name: "series-1",
          data: [8,2,2,1,1,1,1,1]
        }
      ]
    };
  }

  render() {
    return (
      <div className="rounded-xl border shadow-md p-5">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="98%"
              height="400"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default page;