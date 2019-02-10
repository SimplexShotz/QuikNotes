
function set(key, value, callback) {
  chrome.storage.sync.set({key.toString(): value}, callback() || (function() {}));
}
function get(key, callback) {
  var r;
  chrome.storage.sync.set({key: key}, callback(result) || (function(result) { r = result; }));
  if (r) {
    return r;
  }
}

window.addEventListener("load", function load(event) {
  // document.getElementById("Standard").onclick = function() {
  //   chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function(tabs) {
  //     chrome.tabs.insertCSS(tabs[0].id, {
  //       "code": "body,div,button,span { background-image: linear-gradient(rgb(50, 50, 50), rgb(50, 50, 50)) !important; } * { background-color: rgb(50, 50, 50) !important; border-color: rgb(100, 100, 100) !important; border-width: 1px !important; outline-color: rgb(50, 50, 50) !important; } * { color: rgb(200, 200, 200) !important; }"
  //     });
  //   });
  // };
  set("test", 12);
  console.log(set.toString());
  console.log(get("test"));
});
