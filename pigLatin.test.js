const translate = require("./pigLatin");

describe('translate', () => {
    //starts with vowel (5 different vowels)
    test('starts with a', () => {
        expect(translate("apple")).toEqual("appleway");
    });

    test('starts with e', () => {
        expect(translate("else")).toEqual("elseway");
    });

    test('starts with i', () => {
        expect(translate("idiot")).toEqual("idiotway");
    });

    test('starts with o', () => {
        expect(translate("october")).toEqual("octoberway");
    });

    test('starts with u', () => {
        expect(translate("umbrella")).toEqual("umbrellaway");
    });

    //starts with one consonant (second letter vowel) (2)

    test('starts with one consonant', () => {
        expect(translate("giraffe")).toEqual("iraffegay");
    });

    test('starts with one consonant', () => {
        expect(translate("candle")).toEqual("andlecay");
    });

    //starts with two consonants (1)

    test('starts with 2 consonants', () => {
        expect(translate("thermos")).toEqual("ermosthay");
    });

    //starts with 3 consonants (1)

    test('starts with 3 consonants', () => {
        expect(translate("string")).toEqual("ingstray");
    });

    //lowercase conversion(1)

    test('starts with vowel converts to lowercase', () => {
        expect(translate("Amanda")).toEqual("amandaway");
    });

    test('starts with consonant converts to lowercase', () => {
        expect(translate("Sarah")).toEqual("arahsay");
    });

    //begins with y
    test('starts with y', () => {
        expect(translate("yarn")).toEqual("arnyay");
    });

    //more than 3 consonants
    test('starts with more than 3 consonants', () => {
        expect(translate("syllable")).toEqual("ablesyllay");
    });

});