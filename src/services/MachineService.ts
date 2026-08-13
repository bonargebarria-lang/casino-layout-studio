import type { Machine } from "../models/Machine";

export const machines: Machine[] = [

    {
        id: "EGM-001",
        manufacturer: "Aristocrat",
        game: "Dragon Link",
        denomination: 0.01,
        status: "ONLINE",
        zone: "Zona A",
        x: 250,
        y: 180,
        rotation: 0,
    },

    {
        id: "EGM-002",
        manufacturer: "IGT",
        game: "Wheel of Fortune",
        denomination: 0.05,
        status: "ONLINE",
        zone: "Zona A",
        x: 450,
        y: 180,
        rotation: 0,
    },

    {
        id: "EGM-003",
        manufacturer: "Konami",
        game: "Lucky Honeycomb",
        denomination: 0.10,
        status: "OFFLINE",
        zone: "Zona B",
        x: 650,
        y: 180,
        rotation: 0,
    }

];