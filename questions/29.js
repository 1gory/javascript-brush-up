// Как работает EventSource и в чем отличие от WebSocket?

const source = new EventSource('https://site.com/', {withCredentials: true});

// Объект EventSource автоматически устанавливает постоянное соединение и позволяет серверу отправлять через него сообщения.
// - автоматическое переподключение

// - однонаправленность: данные посылает только сервер (WS - двунаправленные)
// - только текст (WS - текст и бинарные данные)
// - обычный HTTP (Протокол WebSocket)