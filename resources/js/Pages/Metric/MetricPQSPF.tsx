import {MetricPQSPFProps} from "@/types/metric";
import {Container, Grid, Stack, Typography} from "@mui/material";
import {DataGrid, GridColDef, GridColumnGroupingModel} from "@mui/x-data-grid";
import AppBarTriple from "@/Components/Shared/AppBarTriple";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ButtonEndHref from "@/Components/Shared/ButtonEndHref";
import {Gauge} from "@mui/x-charts";
import GaugeGroup from "@/Components/Metric/GaugeGroup";

export default function ({ trafo, date, powers, reactivePowers, apparentPowers, powerFactors }: MetricPQSPFProps) {
    const columnsPower: GridColDef[] = [
        { field: 'id', headerName: 'ID'},
        { field: 'createdAt', headerName: 'Date', width: 200},
        { field: 'power_r', headerName: 'R'},
        { field: 'power_s', headerName: 'S'},
        { field: 'power_t', headerName: 'T'},
    ]

    const columnsReactivePower: GridColDef[] = [
        { field: 'id', headerName: 'ID'},
        { field: 'createdAt', headerName: 'Date', width: 200},
        { field: 'reactive_power_r', headerName: 'R'},
        { field: 'reactive_power_s', headerName: 'S'},
        { field: 'reactive_power_t', headerName: 'T'},
    ]

    const columnsApparentPower: GridColDef[] = [
        { field: 'id', headerName: 'ID'},
        { field: 'createdAt', headerName: 'Date', width: 200},
        { field: 'apparent_power_r', headerName: 'R'},
        { field: 'apparent_power_s', headerName: 'S'},
        { field: 'apparent_power_t', headerName: 'T'},
    ]

    const columnsPowerFactor: GridColDef[] = [
        { field: 'id', headerName: 'ID'},
        { field: 'createdAt', headerName: 'Date', width: 200},
        { field: 'power_factor_r', headerName: 'R'},
        { field: 'power_factor_s', headerName: 'S'},
        { field: 'power_factor_t', headerName: 'T'},
    ]

    const columnGroupPower: GridColumnGroupingModel = [
        {
            groupId: 'Power (P)',
            children: [{ field: 'power_r' }, { field: 'power_s' }, { field: 'power_t' }]
        }
    ]

    const columnGroupReactivePower: GridColumnGroupingModel = [
        {
            groupId: 'Reactive Power (Q)',
            children: [{ field: 'reactive_power_r' }, { field: 'reactive_power_s' }, { field: 'reactive_power_t' }]
        }
    ]

    const columnGroupApparentPower: GridColumnGroupingModel = [
        {
            groupId: 'Apparent Power (VA)',
            children: [{ field: 'apparent_power_r' }, { field: 'apparent_power_s' }, { field: 'apparent_power_t' }]
        }
    ]

    const columnGroupPowerFactor: GridColumnGroupingModel = [
        {
            groupId: 'Power Factor (PF)',
            children: [{ field: 'power_factor_r' }, { field: 'power_factor_s' }, { field: 'power_factor_t' }]
        }
    ]

    const rowsPower = powers.map((power) => {
        return {
            id: power.id,
            createdAt: new Date(power.created_at).toLocaleString(),
            power_r: power.power_r,
            power_s: power.power_s,
            power_t: power.power_t,
        }
    });

    const rowsReactivePower = reactivePowers.map((reactivePower) => {
        return {
            id: reactivePower.id,
            createdAt: new Date(reactivePower.created_at).toLocaleString(),
            reactive_power_r: reactivePower.reactive_power_r,
            reactive_power_s: reactivePower.reactive_power_s,
            reactive_power_t: reactivePower.reactive_power_t,
        }
    });

    const rowsApparentPower = apparentPowers.map((apparentPower) => {
        return {
            id: apparentPower.id,
            createdAt: new Date(apparentPower.created_at).toLocaleString(),
            apparent_power_r: apparentPower.apparent_power_r,
            apparent_power_s: apparentPower.apparent_power_s,
            apparent_power_t: apparentPower.apparent_power_t,
        }
    });

    const rowsPowerFactor = powerFactors.map((powerFactor) => {
        return {
            id: powerFactor.id,
            createdAt: new Date(powerFactor.created_at).toLocaleString(),
            power_factor_r: powerFactor.power_factor_r,
            power_factor_s: powerFactor.power_factor_s,
            power_factor_t: powerFactor.power_factor_t,
        }
    });

    const powerR = [...powers.map(p => p.power_r)];
    const powerS = [...powers.map(p => p.power_s)];
    const powerT = [...powers.map(p => p.power_t)];

    const reactivePowerR = [...reactivePowers.map(rp => rp.reactive_power_r)];
    const reactivePowerS = [...reactivePowers.map(rp => rp.reactive_power_s)];
    const reactivePowerT = [...reactivePowers.map(rp => rp.reactive_power_t)];

    const apparentPowerR = [...apparentPowers.map(ap => ap.apparent_power_r)];
    const apparentPowerS = [...apparentPowers.map(ap => ap.apparent_power_s)];
    const apparentPowerT = [...apparentPowers.map(ap => ap.apparent_power_t)];

    const powerFactorR = [...powerFactors.map(pf => pf.power_factor_r)];
    const powerFactorS = [...powerFactors.map(pf => pf.power_factor_s)];
    const powerFactorT = [...powerFactors.map(pf => pf.power_factor_t)];

    return (
        <>
            <AppBarTriple
                startText={'Metric PQSPF'}
                middleText={trafo.name + ' - ' + trafo.address}
                endText={date}
            />
            <Container maxWidth="xl" sx={{ pt: 6 }}>
                <ButtonEndHref
                    href={route('chart.pqspf', [trafo.id, date])}
                    text={'Open Chart'}
                    icon={<ShowChartIcon />}
                    sx={{ mt: 4 }}
                />
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <GaugeGroup
                            gauges={[powerR, powerS, powerT]}
                            labels={['R', 'S', 'T']}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <GaugeGroup
                            gauges={[reactivePowerR, reactivePowerS, reactivePowerT]}
                            labels={['R', 'S', 'T']}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <DataGrid
                            columnGroupingModel={columnGroupPower}
                            rows={rowsPower}
                            columns={columnsPower}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <DataGrid
                            columnGroupingModel={columnGroupReactivePower}
                            rows={rowsReactivePower}
                            columns={columnsReactivePower}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <GaugeGroup
                            gauges={[apparentPowerR, apparentPowerS, apparentPowerT]}
                            labels={['R', 'S', 'T']}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <GaugeGroup
                            gauges={[powerFactorR, powerFactorS, powerFactorT]}
                            labels={['R', 'S', 'T']}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <DataGrid
                            columnGroupingModel={columnGroupApparentPower}
                            rows={rowsApparentPower}
                            columns={columnsApparentPower}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <DataGrid
                            columnGroupingModel={columnGroupPowerFactor}
                            rows={rowsPowerFactor}
                            columns={columnsPowerFactor}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
