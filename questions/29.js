// How does EventSource work and what is the difference from WebSocket?

const source = new EventSource('https://site.com/', {withCredentials: true});

// The EventSource object automatically establishes a persistent connection and allows the server to send messages through it.
// - automatic reconnection
// - unidirectional: only the server sends data (WS - bidirectional)
// - text only (WS - text and binary data)
// - regular HTTP (WebSocket is a protocol)
