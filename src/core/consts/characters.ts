import {nanoid} from "@reduxjs/toolkit";
import {SelectType} from "../types/characters";

export const species: SelectType[] = [
    {
        id: nanoid(10),
        name: "Alien",
    },
    {
        id: nanoid(10),
        name: "Animal",
    },
    {
        id: nanoid(10),
        name: "Cronenberg",
    },
    {
        id: nanoid(10),
        name: "Disease",
    },
    {
        id: nanoid(10),
        name: "Human",
    },
    {
        id: nanoid(10),
        name: "Humanoid",
    },
    {
        id: nanoid(10),
        name: "Mythological Creature",
    },
    {
        id: nanoid(10),
        name: "Poopybutthole",
    },
    {
        id: nanoid(10),
        name: "Robot",
    },
    {
        id: nanoid(10),
        name: "Unknown",
    }
];
export const genders: SelectType[] = [
    {
        id: nanoid(10),
        name: "Female",
    },
    {
        id: nanoid(10),
        name: "Male",
    },
    {
        id: nanoid(10),
        name: "Genderless",
    },
    {
        id: nanoid(10),
        name: "unknown",
    }
];
export const statuses: SelectType[] = [
    {
        id: nanoid(10),
        name: "Alive",
    },
    {
        id: nanoid(10),
        name: "Dead",
    },
    {
        id: nanoid(10),
        name: "unknown",
    }
];