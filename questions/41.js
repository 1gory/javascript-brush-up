  const x = async function tests() {
     throw new Error('Error message');
  }

  try {
    x();
  } catch (e) {
    console.log(e) // будет ли перехвачена ошибка в try catch?
  }
