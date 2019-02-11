
function set(key, value, callback) {
  if (typeof callback === "function") {
    chrome.storage.sync.set({[key]: value}, callback());
  } else {
    chrome.storage.sync.set({[key]: value}, function() {});
  }
}
async function get(key, callback) {
  // var r;
  if (typeof callback === "function") {
    chrome.storage.sync.get([key], callback);
  } else {
    // console.log("before await: ");
    // await chrome.storage.sync.get([key], function(result) { r = result; console.log("during awiat: "); console.log(r); console.log("-"); });
    // console.log("after await: " + r);
    // return r;
    var a = await new Promise((succ) => chrome.storage.sync.get([key], succ));
    return a[key];
  }
}

window.addEventListener("load", async function load(event) {
  // document.getElementById("Standard").onclick = function() {
  //   chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function(tabs) {
  //     chrome.tabs.insertCSS(tabs[0].id, {
  //       "code": "body,div,button,span { background-image: linear-gradient(rgb(50, 50, 50), rgb(50, 50, 50)) !important; } * { background-color: rgb(50, 50, 50) !important; border-color: rgb(100, 100, 100) !important; border-width: 1px !important; outline-color: rgb(50, 50, 50) !important; } * { color: rgb(200, 200, 200) !important; }"
  //     });
  //   });
  // };
  if (await get("Text") === undefined) {
    set("Text", "");
  }
  document.getElementById("Text").value = await get("Text");
  document.getElementById("Save").onclick = function() {
    document.getElementById("Save").innerText = "Saving...";
    set("Text", document.getElementById("Text").value, function() {
      document.getElementById("Save").innerText = "Saved!";
      setTimeout(function() {
        document.getElementById("Save").innerText = "Save";
      }, 1000);
    });
  };
});
