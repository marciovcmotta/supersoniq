import fs from 'fs';
import path from 'path';

export interface Config {
    server: {
        port: number,
        useWebsocker: boolean,
        usePersistence: boolean,
    }
}

export function loadConfig(): Config {
    const configPath = path.resolve(__dirname, "../../soniqconfig.json");
    const rawData = fs.readFileSync(configPath, 'utf-8');

    return JSON.parse(rawData) as Config;
}