// Какие свойства и методы есть у объекта Proxy?

// У Proxy нет собственных свойств.
// С пустым handler он просто перенаправляет все операции на target.
const target = {};
const handler = {};
let proxy = new Proxy(target, handler);
console.log(proxy); // [[Handler]] [[Target]] [[IsRevoked]]

// но у Proxy есть статический метод Proxy.revocable(), который позволяет отключать прокси
let object = {
  data: "Данные"
};

let {proxyRevocable, revoke} = Proxy.revocable(object, {});
console.log(proxyRevocable.data); // данные
revoke();
// больше не работает
console.log(proxyRevocable.data); // TypeError: Cannot perform 'get' on a proxy that has been revoked
