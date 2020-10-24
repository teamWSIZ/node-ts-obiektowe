export class Lightsource {
    private intensity: number;
    private max_intensity: number;
    private battery_level: number;
    private max_battery_level: number;


    constructor(max_intensity: number, max_battery_level: number) {
        this.max_intensity = max_intensity;
        this.max_battery_level = max_battery_level;
        //
        this.battery_level = max_battery_level; //ma być naładowana
        this.intensity = 0; //ma być wyłączona
    }

    /**
     * Włącza źródło światła, na maksymalną intensity
     */
    turn_on() {
        this.intensity = this.max_intensity;
        if (this.battery_level==0) {
            //jak nie ma baterii, to nie powinno świecić
            this.intensity = 0;
        }
    }

    /**
     * Świeci światłem przez podany czas -- zużywając baterie
     */
    time_lapse(time: number) {

    }

    /**
     * Podaje aktualne intensity
     */
    get_intensity(): number {
        return this.intensity;
    }

    /**
     * Get battery level
     */
    get_battery_level(): number {
        return this.battery_level;
    }

    /**
     * Wyłącza źródło światła
     */
    turn_off() {

    }
}
