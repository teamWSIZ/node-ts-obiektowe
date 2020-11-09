//postacie....

/**
 * Obiekt jest obecny na (x,y) i ma rozmiar `radius`.
 */
export interface Sprite {
    get_x(): number;

    get_y(): number;

    get_radius(): number;
}

/**
 * Mając do dyspozycji kolekcję Sprite'ów, ma podać listę par Sprite'ów między którymi zachodzą obecnie kolizje...
 */
export interface ColliderEngine {

    //todo: powinno brać kolekcję; nie koniecznie listę
    get_collisions(sprites: Sprite[]): Array<any>;
}


//prymitywne przykładowe implementacje:
export class SimpleSprite implements Sprite {
    x: number;
    y: number;
    radius: number;

    constructor(x: number, y: number, radius: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    get_radius(): number {
        return 0;
    }

    get_x(): number {
        return 0;
    }

    get_y(): number {
        return 0;
    }
}

export class VerySlowCollider implements ColliderEngine {

    distance(x1, x2, y1, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }

    get_collisions(sprites: Sprite[]): Array<any> {
        let collision_pairs = [];
        let n = sprites.length;
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                let s1 = sprites[i];
                let s2 = sprites[j];
                if (this.distance(s1.get_x(), s2.get_x(), s1.get_y(), s2.get_y()) < s1.get_radius() + s2.get_radius()) {
                    collision_pairs.push([s1, s2]);
                }
            }
        }
        return collision_pairs;
    }
}


//todo: napisać testy/przykłady wykorzystania tych Sprite'ów i Collider'ów
