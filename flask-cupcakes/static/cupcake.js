



$("#new-cupcake-form").on("submit", async function () {

    let flavor = $("#flavor").val();
    let rating = $("#rating").val();
    let size = $("#size").val();
    let image = $("#image").val();

    await axios.post("http://127.0.0.1:5000/api/cupcakes", {
        flavor,
        rating,
        size,
        image
    });


});

