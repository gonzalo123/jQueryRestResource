var host = document.location.protocol + '//' + document.location.host;
var resource = new Resource(host + '/api/message/resource');

resource.create({ id: 10, author: 'myname', message: 'hola'}).done(function (data) {
    console.log("create element", data);
});

resource.query().done(function (data) {
   console.log("query all", data);
});

resource.update(1, {message: 'hi'}).done(function (data) {
    console.log("update element 1", data);
});

resource.get(1).done(function (data) {
    console.log("get element 1", data);
});

resource.remove(1).done(function (data) {
    console.log("remove element 1", data);
});

resource.query().done(function (data) {
    console.log("query all", data);
});