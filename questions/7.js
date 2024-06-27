// What properties and methods does the Proxy object have?

// The Proxy has no own properties.
// With an empty handler, it simply forwards all operations to the target.
const target = {};
const handler = {};
let proxy = new Proxy(target, handler);
console.log(proxy); // [[Handler]] [[Target]] [[IsRevoked]]

// but Proxy has a static method Proxy.revocable(), which allows you to disable the proxy
let object = {
  data: "Important data"
};

let { proxyRevocable, revoke } = Proxy.revocable(object, {});
console.log(proxyRevocable.data); // data
revoke();
// no longer works
console.log(proxyRevocable.data); // TypeError: Cannot perform 'get' on a proxy that has been revoked
