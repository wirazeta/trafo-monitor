import {PageProps, TrafoV1} from "@/types/index";
import {
    Metric, MetricApparentPower,
    MetricCurrent,
    MetricFrequency,
    MetricHD, MetricKFactor, MetricPower, MetricPowerFactor, MetricPowerLoss, MetricReactivePower,
    MetricTHDCurrent,
    MetricTHDVoltage, MetricTriplenCurrent,
    MetricVoltage
} from "@/types/metric";

export interface AveragedMetric {
    date: string;
    hour: number;
}

export interface Order {
    r: number;
    s: number;
    t: number;
}

export interface AveragedMetricVoltage extends AveragedMetric {
    voltage_r: number;
    voltage_s: number;
    voltage_t: number;
}

export interface AveragedMetricCurrent extends AveragedMetric {
    current_r: number;
    current_s: number;
    current_t: number;
    current_in: number;
}

export interface AveragedMetricFrequency extends AveragedMetric {
    frequency_r: number;
    frequency_s: number;
    frequency_t: number;
}

export interface AveragedMetricPower extends AveragedMetric {
    power_r: number;
    power_s: number;
    power_t: number;
}

export interface AveragedMetricReactivePower extends AveragedMetric {
    reactive_power_r: number;
    reactive_power_s: number;
    reactive_power_t: number;
}

export interface AveragedMetricApparentPower extends AveragedMetric {
    apparent_power_r: number;
    apparent_power_s: number;
    apparent_power_t: number;
}

export interface AveragedMetricPowerFactor extends AveragedMetric {
    power_factor_r: number;
    power_factor_s: number;
    power_factor_t: number;
}

export interface AveragedMetricPowerLoss extends AveragedMetric {
    power_loss: number;
}

export interface AveragedMetricKFactor extends AveragedMetric {
    k_factor: number;
}

export interface AveragedMetricTriplenCurrent extends AveragedMetric {
    triplen_current: number;
}

export interface AveragedMetricTHDVoltage extends AveragedMetric {
    voltage_r: number;
    voltage_s: number;
    voltage_t: number;
}

export interface AveragedMetricTHDCurrent extends AveragedMetric {
    current_r: number;
    current_s: number;
    current_t: number;
}

export interface AveragedMetricTHDFrequency extends AveragedMetric {
    frequency_r: number;
    frequency_s: number;
    frequency_t: number;
}

export interface AveragedMetricIndividualHarmonicDistortion extends AveragedMetric {
    voltage_r: number;
    voltage_s: number;
    voltage_t: number;
}

export interface AveragedMetricTHDCurrent extends AveragedMetric {
    current_r: number;
    current_s: number;
    current_t: number;
}

export interface ChartMetricHD extends Metric {
    h1: Order;
    h2: Order;
    h3: Order;
    h4: Order;
    h5: Order;
    h6: Order;
    h7: Order;
    h8: Order;
    h9: Order;
    h10: Order;
    h11: Order;
    h12: Order;
    h13: Order;
    h14: Order;
    h15: Order;
}

export type ChartVIFProps = PageProps & {
    trafo: TrafoV1;
    date: string;
    voltages: MetricVoltage[];
    currents: MetricCurrent[];
    frequencies: MetricFrequency[];
    avgVoltageR: number;
    avgVoltageS: number;
    avgVoltageT: number;
    avgCurrentR: number;
    avgCurrentS: number;
    avgCurrentT: number;
    avgCurrentIN: number;
    maxFrequency: number;
    avgFrequency: number;
    minFrequency: number;
}

export type ChartPQSPFProps = PageProps & {
    trafo: TrafoV1;
    date: string;
    powers: MetricPower[];
    reactivePowers: MetricReactivePower[];
    apparentPowers: MetricApparentPower[];
    powerFactors: MetricPowerFactor[];
}

export type ChartTHDIHDProps = PageProps & {
    trafo: TrafoV1;
    date: string;
    thdVoltages: MetricTHDVoltage[];
    thdCurrents: MetricTHDCurrent[];
}

export type ChartIHDProps = PageProps & {
    trafo: TrafoV1;
    date: string;
    ihdVoltages: MetricHD[];
    ihdCurrents: MetricHD[];
    avgVoltageR: number;
    avgVoltageS: number;
    avgVoltageT: number;
    avgCurrentR: number;
    avgCurrentS: number;
    avgCurrentT: number;
}

export type ChartTPOProps = PageProps & {
    trafo: TrafoV1;
    date: string;
}

export type ChartPKAProps = PageProps & {
    trafo: TrafoV1;
    date: string;
    powerLosses: MetricPowerLoss[];
    kFactors: MetricKFactor[];
    triplenCurrents: MetricTriplenCurrent[];
}

export type ChartHDProps = PageProps & {
    trafo: TrafoV1;
    date: string;
    title: string;
    harmonicDistortions: ChartMetricHD;
}
