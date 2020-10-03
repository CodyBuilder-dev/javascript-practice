// XML from String
var sMyString = '<a id="a"><b id="b">hey!</b></a>';
var oParser = new DOMParser();
var oDOM = oParser.parseFromString(sMyString, "text/xml");
dump(oDOM.documentElement.nodeName == "parsererror" ? "error while parsing" : oDOM.documentElement.nodeName);

// XML from XML Response
var xhr = new XMLHttpRequest();
xhr.onload = function() {
  dump(xhr.responseXML.documentElement.nodeName);
}
xhr.onerror = function() {
  dump("Error while getting XML.");
}
xhr.open("GET", "example.xml");
xhr.responseType = "document";
xhr.send();