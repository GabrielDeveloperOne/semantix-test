import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import '../../App.css';

export class PieChart extends Component {
    constructor(props) {
        super(props);
        this.state = { Data: {} };
    }
//Função para montar o Grafico Pie
    async componentDidMount() {

        //Callback de retorno da api
        await axios.get(`https://private-afe609-testefront.apiary-mock.com/anual-percentage`)
            .then(res => {
                const chart = res.data;

                let label = [];
                let value = [];

                // eslint-disable-next-line array-callback-return
                chart.map(indexChart => {
                    label.push(indexChart.label);
                    value.push(indexChart.value);

                });

                this.setState({
                    Data: {
                        labels: label,
                        datasets: [
                            {
                                label: 'PIE CHART',
                                data: value,
                                backgroundColor: [
                                    "#ABE1FA",
                                    "#035A27",
                                    "#118aca"

                                ],
                                borderWidth: 1,
                            }
                        ]
                    }
                });
            })

    }
    //Renderizando Grafico Pie
    render() {
        return (
            <div className="pie-container">
                <h2 className="title-charts">PIE CHART</h2>
                <Pie data={this.state.Data}
                    options={{
                        maintainAspectRatio: true,
                        legend: {
                            display: true,
                            position: 'top',
                            labels: {
                                usePointStyle: true,
                            }
                        }
                    }} />
            </div>
        )
    }
}

export default PieChart;