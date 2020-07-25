document.querySelector("#quantity").addEventListener("change", updateprice)
document.querySelector("#js-yes").addEventListener("change", updateprice)
document.querySelector("#layout-yes").addEventListener("change", updateprice)
document.querySelector("#deadline").addEventListener("change", function() {
    const deadline = document.querySelector("#deadline").value
    document.querySelector("#deadlinetime").innerHTML = `${deadline} semana(s)`
    updateprice()
})

function updateprice() {
    const quantity = document.querySelector("#quantity").value
    let jsneeded = document.querySelector("#js-yes").checked
    const layoutneeded = document.querySelector("#layout-yes").checked
    const deadline = document.querySelector("#deadline").value
    let price = quantity * 100;
    if (jsneeded) price *= 1.1
    if (layoutneeded) price += 500
    let urgentjob = 1 - deadline*0.1
    price *= 1 + urgentjob
    document.querySelector("#price").innerHTML = `R$ ${price.toFixed(2)}`
}