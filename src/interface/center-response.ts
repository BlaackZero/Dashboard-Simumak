export interface CenterResponse {
    center_id:  string;
    name:       string;
    simulators: Simulator[];
    code:       string;
    result:     string;
}

export interface Simulator {
    simulador: Simulador;
}

export interface Simulador {
    serial_number:   string;
    hwid:            null | string;
    version:         null | string;
    date_last_check: Date | null;
}

export interface CenterState {
    centerInfo: CenterResponse | null;
    fetchCenterInfo: () => Promise<void>;
}