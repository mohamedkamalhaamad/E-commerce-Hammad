const scriptURL = "https://script.google.com/macros/s/AKfycby8jtAMFAdszETv_zy_lMk1MTjgGW3kwrHGTAFn3hLIi40emx_6zQidYHORy0e8NCg1/exec"

let form = decoment.getElementById("form_contct")

form.addEventlistener("submit", (e) => {
    e.preventDefult()

}
fetch(scriptURL), {
    method: "post",
    body: new FormData(form),

}).catch((error) => console.error("ereor!", error massage))
})