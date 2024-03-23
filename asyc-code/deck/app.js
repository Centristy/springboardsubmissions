$(function() {
    let baseURL = 'https://deckofcardsapi.com/api/deck';

    async function setup() {
        let $btn = $('button');
        let $cardArea = $('#card-area');

        let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
        $btn.show().on('click', async function() {
        let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
        let cardSrc = cardData.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;
        $cardArea.append(
            $('<img>', {
            src: cardSrc,
            css: {
                transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
            }
            })
        );
        if (cardData.remaining === 0) $btn.remove();
        });
    }
    setup();
    });
