import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {AggregationSingleProps} from "@/types/component";

export default function AggregationSingle({
                                              property,
                                              max,
                                              min,
                                              avg,
                                              latest,
                                          }: AggregationSingleProps) {
    return (
        <TableContainer component={Paper}>
            <Table>
                {/* Table Header */}
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>{property}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>MAX</TableCell>
                        <TableCell>{max}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>AVG</TableCell>
                        <TableCell>{Math.round((avg + Number.EPSILON) * 100) / 100}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>MIN</TableCell>
                        <TableCell>{min}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>LATEST</TableCell>
                        <TableCell>{latest}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}
