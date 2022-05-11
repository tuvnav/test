/**
 * This configuration will be loaded if the memory game cannot fetch the memory.json
 * file, e.g. on a localhost. If you prefer to use the memory.js file over the
 * memory.json file just delete the JSON file in your memory game instance.
 */

var memory = {

    // Add a description text to the sidebar for this memory.
    description: "Findet die passenden Karten-Drillinge. Es geht jeweils um die letzte Harmonie des Beispiels (in manchen Beispielen kommt die Harmonie außerdem mehrmals vor). Beachte: Nicht die genaue Akkordform zählt, sondern nur der dahinterstehende Akkordtyp!",

    // Show the description for the memory in the sidebar.
    showDescription: true,

    // Show infos with the card set name in the sidebar. 
    showCardSetInfo: false,

    // Show the number of cards within a card set in the sidebar.
    showNumberOfCardsPerCardSet: false,

    // Sets the maximum number of cards per card set. The cards are chosen
    // randomly in each round. Set to `null` to display all cards of a card set.
    maxNumberOfCardsPerCardSet: null,

    // Add multiple card sets to this memory.
    cardSets: [
        {
            // Add a name for this card set that will appear in the sidebar along 
            // with the number of cards for this set.
            name: 'Card set 1',

            // Set a color for the back face of a face up cards within this card set. Set
            // to `null` or remove property to use a random color. Pick nice color from
            // https://tailwindcss.com/docs/customizing-colors or https://color.adobe.com
            color: '#6366F1',

            // Add multiple cards to one set. More than two cards can be added to one set.
            cards: [
                {
                    // Add the name of this card. It will appear on the backside of the
                    // card once this set was found.
                    name: 'Card 1',

                    // Add a description for this card that will also appear on the
                    // backside of the card.
                    description: 'Berg Op. 1 (Klaviersonate)',

                    // Set the relative path to the audio file for this card. Don't
                    // forget to add the audio file if self to this folder at the same
                    // path that is configured here.
                    audioFileUrl: 'storage/Berg_Op_1_q_2.mp3',

                    // Set an image for the frontside of this card and don't forget to
                    // add the file to this folder. You can use any image format like
                    // JPG, PNG, SVG or inline SVG like in the example below. In most
                    // cases you won't need a frontImageFileUrl, so keep this value `null`.
                    // All cards can use the same image for the frontImageFileUrl.
                    frontImageFileUrl: 'storage/Hintergrund_02.jpg',
                    // Set an image for the backside of this card and don't forget to
                    // add the file to this folder. You may want to add for example the
                    // score of the audio file as the backImageFileUrl. Keep this value
                    // `null` if you don't need an image on the back side.
                    backImageFileUrl: 'storage/Berg_Op_1.jpg',
                },
                {
                    name: 'Card 2',
                    description: 'Schönberg Op. 9 (Kammersinfonie No. 1)',
                    audioFileUrl: 'storage/Schönberg_Op_9_q.mp3',
                    frontImageFileUrl: 'storage/Hintergrund_02.jpg',
                    backImageFileUrl: 'storage/Schönberg_Op_9.jpg',
                },
                {
                    name: 'Card 3',
                    description: 'Berg Op. 2/1 (4 Lieder)',
                    audioFileUrl: 'storage/Berg_Op_2_1_q.mp3',
                    frontImageFileUrl: 'storage/Hintergrund_02.jpg',
                    backImageFileUrl: 'storage/Berg_Op_2_1.jpg',
                },
            ],
        },
        {
            name: 'Card set 2',
            color: '#EC4899',
            cards: [
                {
                    name: 'Card 4',
                    description: 'Berg Op. 2/2 (4 Lieder)',
                    audioFileUrl: 'storage/Berg_Op_2_2_gt.mp3',
                    frontImageFileUrl: 'storage/Hintergrund_02.jpg',
                    backImageFileUrl: 'storage/Berg_Op_2_2.jpg',
                },
                {
                    name: 'Card 5',
                    description: 'Berg Op. 4/1 (Altenberg Lieder)',
                    audioFileUrl: 'storage/Berg_Op_4_1_gt.mp3',
                    frontImageFileUrl: 'storage/Hintergrund_02.jpg',
                    backImageFileUrl: 'storage/Berg_Op_4_1.jpg',
                },
                {
                    name: 'Card 6',
                    description: 'Berg Op. 4/5 (Altenberg Lieder)',
                    audioFileUrl: 'storage/Berg_Op_4_5_gt.mp3',
                    frontImageFileUrl: 'storage/Hintergrund_02.jpg',
                    backImageFileUrl: 'storage/Berg_Op_4_5.jpg',
                },
            ],
        },
        {
            name: 'Card set 3',
            color: '#4eec48',
            cards: [
                {
                    name: 'Card 7',
                    description: 'Webern Op. 4/2 (Lieder)',
                    audioFileUrl: 'storage/Webern_Op_4_2_nk.mp3',
                    frontImageFileUrl: 'storage/Hintergrund_02.jpg',
                    backImageFileUrl: 'storage/Webern_Op_4_2.jpg',
                },
                {
                    name: 'Card 8',
                    description: 'Webern Op. 5 (Streichquartett)',
                    audioFileUrl: 'storage/Webern_Op_5_nk.mp3',
                    frontImageFileUrl: 'storage/Hintergrund_02.jpg',
                    backImageFileUrl: 'storage/Webern_Op_5.jpg',
                },
                {
                    name: 'Card 9',
                    description: 'Webern Op. 11/1 (3 kleine Stücke für Cello und Klavier)',
                    audioFileUrl: 'storage/Webern_Op_11_1_nk.mp3',
                    frontImageFileUrl: 'storage/Hintergrund_02.jpg',
                    backImageFileUrl: 'storage/Webern_Op_11_1.jpg',
                },
            ],
        },
    ],
};
