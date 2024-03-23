$( "button" ).on("click", async function () {
    let num = await $('input').val()

    let facts = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`http://numbersapi.com/${num}?json`))
    );

    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}
    


)