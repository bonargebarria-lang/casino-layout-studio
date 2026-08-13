export interface Machine {

    id: string;

    manufacturer: string;

    game: string;

    denomination: number;

    status: "ONLINE" | "OFFLINE";

    zone: string;

    x: number;

    y: number;

    rotation: number;

}