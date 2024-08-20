import {MetricIHDProps} from "@/types/metric";
import {DataGrid, GridColDef, GridColumnGroupingModel} from "@mui/x-data-grid";
import {AppBar, Box, Container, Grid, Toolbar, Typography} from "@mui/material";

export default function MetricIHD({
                                      trafo,
                                      date,
                                      individualHarmonicDistortions,
                                      ihdCurrents,
                                  }: MetricIHDProps) {
    const columnsIHD: GridColDef[] = [
        { field: 'id', headerName: 'ID'},
        { field: 'createdAt', headerName: 'Date', width: 200},
        { field: 'voltage_r', headerName: 'VR'},
        { field: 'voltage_s', headerName: 'VS'},
        { field: 'voltage_t', headerName: 'VT'},
    ]

    const columnsCurrent: GridColDef[] = [
        { field: 'id', headerName: 'ID'},
        { field: 'createdAt', headerName: 'Date', width: 200},
        { field: 'current_r', headerName: 'IR'},
        { field: 'current_s', headerName: 'IS'},
        { field: 'current_t', headerName: 'IT'},
    ]

    const columnGroupIHD: GridColumnGroupingModel = [
        {
            groupId: 'Individual Harmonic Distortion',
            children: [{ field: 'voltage_r' }, { field: 'voltage_s' }, { field: 'voltage_t' }]
        }
    ]

    const columnGroupCurrent: GridColumnGroupingModel = [
        {
            groupId: 'IHD Current',
            children: [{ field: 'current_r' }, { field: 'current_s' }, { field: 'current_t' }]
        }
    ]

    const rowsVoltage = individualHarmonicDistortions.map((voltage) => {
        return {
            id: voltage.id,
            createdAt: new Date(voltage.created_at).toLocaleString(),
            voltage_r: voltage.voltage_r,
            voltage_s: voltage.voltage_s,
            voltage_t: voltage.voltage_t,
        }
    });

    const rowsCurrent = ihdCurrents.map((current) => {
        return {
            id: current.id,
            createdAt: new Date(current.created_at).toLocaleString(),
            current_r: current.current_r,
            current_s: current.current_s,
            current_t: current.current_t,
        }
    });

    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Metric IHD
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="xl" sx={{ pt: 6 }}>
                <Box sx={{ my: 4 }}>
                    <Typography variant="h3" textAlign="center" sx={{ mb: 0.5 }}>
                        <b>{trafo.name}</b>
                    </Typography>
                    <Typography variant="h5" textAlign="center" sx={{ mb: 0.5 }}>
                        <b>{trafo.address}</b>
                    </Typography>
                    <Typography variant="h5" textAlign="center" sx={{ mb: 0.5 }}>
                        <b>{date}</b>
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <DataGrid
                            columnGroupingModel={columnGroupIHD}
                            rows={rowsVoltage}
                            columns={columnsIHD}
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
                            columnGroupingModel={columnGroupCurrent}
                            rows={rowsCurrent}
                            columns={columnsCurrent}
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
    )
}
