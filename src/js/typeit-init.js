import TypeIt from "typeit";

document.addEventListener("DOMContentLoaded", async () => {

    setTimeout( () => {
         new TypeIt("#type-effect", {
        speed: 125,
        loop: true,
        waitUntilVisible: true
    })
        .type("Java Software Engineer")
        .pause(2500)
        .delete()
        .type("Backend Engineer")
        .pause(2500)
        .delete()
        .type("REST API Developer")
        .pause(2500)
        .go();
    },100)

 });