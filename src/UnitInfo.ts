import React from 'react';
import ArcherIcon from './assets/png/Archer.png'
import CannonneerIcon from './assets/png/Cannonneer.png'
import CavalryIcon from './assets/png/Cavalry.png'
import Crossbow_archerIcon from './assets/png/Crossbow_archer.png'
import CuirassierIcon from './assets/png/Cuirassier.png'
import KnightIcon from './assets/png/Knight.png'
import Longbow_archerIcon from './assets/png/Longbow_archer.png'
import MilitiaIcon from './assets/png/Militia.png'
import OrcArcherIcon from './assets/png/OrcArcher.png'
import OrcCannoneerIcon from './assets/png/OrcCannoneer.png'
import OrcCavalryIcon from './assets/png/OrcCavalry.png'
import OrcCrossbowArcherIcon from './assets/png/OrcCrossbowArcher.png'
import OrcCuirassierIcon from './assets/png/OrcCuirassier.png'
import OrcFootsoldierIcon from './assets/png/OrcFootsoldier.png'
import OrcKnightIcon from './assets/png/OrcKnight.png'
import OrcLongbowArcherIcon from './assets/png/OrcLongbowArcher.png'
import Orc_boss_1Icon from './assets/png/Orc_boss_1.png'
import Orc_boss_2Icon from './assets/png/Orc_boss_2.png'
import Orc_boss_3Icon from './assets/png/Orc_boss_3.png'
import Orc_boss_4Icon from './assets/png/Orc_boss_4.png'
import OrclingIcon from './assets/png/Orcling.png'
import RecruitIcon from './assets/png/Recruit.png'

export type UnitName = string

export type UnitSkills = {
    firstStrike: boolean,
    ranged: boolean,
    flanking: boolean,
    doubleStrike: boolean,
    trample: boolean,
    lastStrike: boolean,
}

export type UnitInfo = {
    name: UnitName,
    friendly: boolean,
    maxHp: number,
    attack: number,
    crit: number,
    order: number,
    tier: number,
    skills: UnitSkills,
    icon: string,
}

export function isBoss(u: UnitInfo): boolean {
    return u.tier >= 25;
}

function skills(s?: Partial<UnitSkills>): UnitSkills {
    return Object.assign({
        firstStrike: false,
        ranged: false,
        flanking: false,
        doubleStrike: false,
        trample: false,
        lastStrike: false,
    }, s ?? {});
}

export const unitInfos: UnitInfo[] = [
    {
        name: "Militia",
        friendly: true,
        maxHp: 15,
        attack: 5,
        crit: 0.8,
        order: 0,
        tier: 1,
        skills: skills(),
        icon: MilitiaIcon,
    },
    {
        name: "Archer",
        friendly: true,
        maxHp: 10,
        attack: 20,
        crit: 0.8,
        order: 5,
        tier: 1,
        skills: skills({ ranged: true }),
        icon: ArcherIcon,
    },
    {
        name: "Footsoldier",
        friendly: true,
        maxHp: 40,
        attack: 15,
        crit: 0.8,
        order: 1,
        tier: 1,
        skills: skills(),
        icon: RecruitIcon,
    },
    {
        name: "Longbow Archer",
        friendly: true,
        maxHp: 10,
        attack: 15,
        crit: 0.8,
        order: 6,
        tier: 2,
        skills: skills({ ranged: true, doubleStrike: true }),
        icon: Longbow_archerIcon,
    },
    {
        name: "Knight",
        friendly: true,
        maxHp: 90,
        attack: 20,
        crit: 0.8,
        order: 2,
        tier: 3,
        skills: skills(),
        icon: KnightIcon,
    },
    {
        name: "Crossbowman",
        friendly: true,
        maxHp: 15,
        attack: 90,
        crit: 0.8,
        order: 7,
        tier: 3,
        skills: skills({ ranged: true }),
        icon: Crossbow_archerIcon,
    },
    {
        name: "Cavalry",
        friendly: true,
        maxHp: 5,
        attack: 5,
        crit: 0.8,
        order: 4,
        tier: 2,
        skills: skills({ flanking: true, firstStrike: true }),
        icon: CavalryIcon,
    },
    {
        name: "Cuirassier",
        friendly: true,
        maxHp: 120,
        attack: 10,
        crit: 0.8,
        order: 3,
        tier: 4,
        skills: skills({ firstStrike: true }),
        icon: CuirassierIcon,
    },
    {
        name: "Cannoneer",
        friendly: true,
        maxHp: 60,
        attack: 80,
        crit: 0.8,
        order: 8,
        tier: 4,
        skills: skills({ trample: true, lastStrike: true, ranged: true, flanking: true }),
        icon: CannonneerIcon,
    },
    {
        name: "Orkling",
        friendly: false,
        maxHp: 15,
        attack: 5,
        crit: 0.6,
        order: 0,
        tier: 1,
        skills: skills(),
        icon: OrclingIcon,
    },
    {
        name: "Orc Hunter",
        friendly: false,
        maxHp: 10,
        attack: 20,
        crit: 0.6,
        order: 5,
        tier: 1,
        skills: skills({ ranged: true }),
        icon: OrcArcherIcon,
    },
    {
        name: "Orc Raiders",
        friendly: false,
        maxHp: 40,
        attack: 15,
        crit: 0.6,
        order: 1,
        tier: 1,
        skills: skills(),
        icon: OrcFootsoldierIcon,
    },
    {
        name: "Elite Orc Hunters",
        friendly: false,
        maxHp: 10,
        attack: 15,
        crit: 0.6,
        order: 6,
        tier: 2,
        skills: skills({ ranged: true, doubleStrike: true }),
        icon: OrcLongbowArcherIcon,
    },
    {
        name: "Orc Veteran",
        friendly: false,
        maxHp: 90,
        attack: 20,
        crit: 0.6,
        order: 2,
        tier: 3,
        skills: skills(),
        icon: OrcKnightIcon,
    },
    {
        name: "Elite Orc Sniper",
        friendly: false,
        maxHp: 15,
        attack: 90,
        crit: 0.6,
        order: 7,
        tier: 3,
        skills: skills({ ranged: true }),
        icon: OrcCrossbowArcherIcon,
    },
    {
        name: "Warg Rider",
        friendly: false,
        maxHp: 5,
        attack: 5,
        crit: 0.6,
        order: 4,
        tier: 2,
        skills: skills({ flanking: true, firstStrike: true }),
        icon: OrcCavalryIcon,
    },
    {
        name: "Orc Vanguard",
        friendly: false,
        maxHp: 120,
        attack: 10,
        crit: 0.6,
        order: 3,
        tier: 4,
        skills: skills({ firstStrike: true }),
        icon: OrcCuirassierIcon,
    },
    {
        name: "Orc Demolisher",
        friendly: false,
        maxHp: 60,
        attack: 80,
        crit: 0.6,
        order: 8,
        tier: 4,
        skills: skills({ ranged: true, trample: true, flanking: true, lastStrike: true }),
        icon: OrcCannoneerIcon,
    },
    {
        name: "Bula (boss 1)",
        friendly: false,
        maxHp: 5000,
        attack: 150,
        crit: 0.5,
        order: 100,
        tier: 100,
        skills: skills({ trample: true, lastStrike: true }),
        icon: Orc_boss_1Icon,
    },
    {
        name: "Aguk (boss 2)",
        friendly: false,
        maxHp: 11000,
        attack: 300,
        crit: 0.5,
        order: 100,
        tier: 150,
        skills: skills({ trample: true, lastStrike: true }),
        icon: Orc_boss_2Icon,
    },
    {
        name: "Mazoga (boss 3)",
        friendly: false,
        maxHp: 120000,
        attack: 100,
        crit: 0.5,
        order: 3.5,
        tier: 200,
        skills: skills({ trample: true, lastStrike: true }),
        icon: Orc_boss_3Icon,
    },
    {
        name: "Durgash (boss 4)",
        friendly: false,
        maxHp: 40000,
        attack: 500,
        crit: 0.5,
        order: 100,
        tier: 300,
        skills: skills({ trample: true, firstStrike: true }),
        icon: Orc_boss_4Icon,
    },
];

var unitInfosByName: Map<string, UnitInfo> = (() => {
    var result = new Map<string, UnitInfo>();
    unitInfos.forEach(u => {
        result.set(u.name, u);
    });
    return result;
})()

export function unitInfoByName(name: string): UnitInfo {
    return unitInfosByName.get(name)!;
}