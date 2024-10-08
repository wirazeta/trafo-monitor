import {ChartV2Props} from "@/types";
import {Box, Container, Grid, Typography} from "@mui/material";
import {Line} from "react-chartjs-2";
import 'chart.js/auto';

export default function ChartV2(props: ChartV2Props) {
    const dataTemperature = {
        labels: props.temperatures.map((metric) => new Date(metric.created_at).toLocaleDateString()),
        datasets: [
            {
                label: 'Temperature',
                data: props.temperatures.map((metric) => metric.value),
                fill: false,
                backgroundColor: 'rgb(94, 22, 117)',
                borderColor: 'rgba(94, 22, 117, 0.2)',
            }
        ]
    }

    const dataPressure = {
        labels: props.pressures.map((metric) => new Date(metric.created_at).toLocaleDateString()),
        datasets: [
            {
                label: 'Temperature',
                data: props.pressures.map((metric) => metric.value),
                fill: false,
                backgroundColor: 'rgb(51, 115, 87)',
                borderColor: 'rgba(51, 115, 87, 0.2)',
            }
        ]
    }

    const dataVoltage = {
        labels: props.voltages.map((metric) => new Date(metric.created_at).toLocaleDateString()),
        datasets: [
            {
                label: 'Temperature',
                data: props.voltages.map((metric) => metric.value),
                fill: false,
                backgroundColor: 'rgb(238, 66, 102)',
                borderColor: 'rgba(238, 66, 102, 0.2)',
            }
        ]
    }

    const dataCurrent = {
        labels: props.currents.map((metric) => new Date(metric.created_at).toLocaleDateString()),
        datasets: [
            {
                label: 'Temperature',
                data: props.currents.map((metric) => metric.value),
                fill: false,
                backgroundColor: 'rgb(53, 114, 239)',
                borderColor: 'rgba(53, 114, 239, 0.2)',
            }
        ]
    }

    return (
        <Container maxWidth="xl">
            <Box sx={{ my: 4 }}>
                <Typography variant="h3" textAlign="center" sx={{ mb: 0.5 }}>
                    <b>{props.trafo.name}</b>
                </Typography>
            </Box>
            <Box
                sx={{ my: 2 }}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Grid container spacing={4}>
                    <Grid item xs={12} lg={6}>
                        <Typography variant="h6" textAlign="center" sx={{ mb: 0.5 }}>
                            <b>Temperature</b>
                        </Typography>
                        <Box
                            sx={{ px: 2 }}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Line data={dataTemperature} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Typography variant="h6" textAlign="center" sx={{ mb: 0.5 }}>
                            <b>Pressure</b>
                        </Typography>
                        <Box
                            sx={{ px: 2 }}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Line data={dataPressure} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Typography variant="h6" textAlign="center" sx={{ mb: 0.5 }}>
                            <b>Voltage</b>
                        </Typography>
                        <Box
                            sx={{ px: 2 }}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Line data={dataVoltage} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Typography variant="h6" textAlign="center" sx={{ mb: 0.5 }}>
                            <b>Current</b>
                        </Typography>
                        <Box
                            sx={{ px: 2 }}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Line data={dataCurrent} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
