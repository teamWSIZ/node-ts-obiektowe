import {AdBlockPlugin, BrowserPlugin, DoNothingPlugin} from "./interfejsy/browser_plugins";


describe('BrowserPlugin tests', function () {

    it('DoNothingPlugin nie zmienia strony', () => {
        //arrange
        let plugin: BrowserPlugin = new DoNothingPlugin();
        let html = ['<html>', 'Abra kadabra', '</html>'];
        let original_html = html.slice(); //to kopiuje wszystkie _wartości_ elementów tablicy `html`
        //act
        plugin.on_page_load(html);
        //assert
        expect(html).toEqual(original_html);    //assert: strona się nie zmieniła...
    });

    it('AdBlock usuwa linie z reklamami', () => {
        //arrange
        let plugin: BrowserPlugin = new AdBlockPlugin();
        let html = ['<advertisement> Super sharp knifes -- buy cheap! </advertisement>'];
        let original_html = html.slice(); //to kopiuje wszystkie _wartości_ elementów tablicy `html`
        //act
        plugin.on_page_load(html);
        //assert
        expect(html.length).toEqual(0);    //assert: strona jest pusta -- usunięto reklamę
    });

    it('AdBlock nie usuwa lini bez reklam', () => {
        //arrange
        let plugin: BrowserPlugin = new AdBlockPlugin();
        let html = ['<html>', 'Abra kadabra', '</html>'];
        let original_html = html.slice(); //to kopiuje wszystkie _wartości_ elementów tablicy `html`
        //act
        plugin.on_page_load(html);
        //assert
        expect(html).toEqual(original_html);    //assert: strona się nie zmieniła...
    });

    it('Browser może uruchomić kilka pluginów naraz', () => {
        //arrange
        let plugin1: BrowserPlugin = new DoNothingPlugin();
        let plugin2: BrowserPlugin = new AdBlockPlugin();

        let browserPlugins: BrowserPlugin[] = [plugin1, plugin2];
        let html = ['<html>', 'Abra kadabra', '</html>'];
        //act
        //odpalamy wszystkie pluginy
        for (let p of browserPlugins) {
            p.on_page_load(html);
        }

        //assert
        expect(html.length).toEqual(3);    //assert: strona się nie zmieniła...
    });

});
