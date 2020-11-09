export class DoNothingPlugin implements BrowserPlugin {
    on_page_load(html: string[]) {
        console.log(`Załadowano stronę o długości ${html.length} linii`);
    }
}

export class AdBlockPlugin implements BrowserPlugin {
    on_page_load(html: string[]) {
        //todo: usunąć wszystkie linie w których jest słowo advertisement
    }
}


export interface BrowserPlugin {
    /**
     * Funkcja uruchamiana po załadowaniu strony, przed jej wyświetleniem i przed ładowaniem resource'ów (typu
     * <img>)
     * @param html: kolejne linie html-a strony www
     */
    on_page_load(html: string[]);
}
