// open https://www.congress.gov/members?searchResultViewType=compact&pageSize=250

// copy and run, block 1:
var elements = []
elements = elements.concat( Array.prototype.slice.call(document.querySelectorAll("li.compact")) ) // page 1
await document.querySelector("a.next").click()
// end block 1

// copy and run, block 2:
elements = elements.concat( Array.prototype.slice.call(document.querySelectorAll("li.compact")) ) // page 2
await document.querySelector("a.next").click()
// end block 2

// copy and run, block 3:
elements = elements.concat( Array.prototype.slice.call(document.querySelectorAll("li.compact")) ) // page 3

var members = elements.map(m => {
  var member = {
    name: m.children[0].children[0].innerText,
    link: m.children[0].children[0].href,
    image: m.children[1].children[0].children[0].src,
  }
  var arr = Array.prototype.slice.call(m.children[1].children[1].children)
  arr.forEach(a => {
    var key = a.innerText.split(":")[0].trim()
    var value = a.innerText.split(":").splice(1).join(":").trim()
    member[key] = value
  })
  return member
})

JSON.stringify(members, null, 2)
// end block 3
