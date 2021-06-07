if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then((reg) => {
      // registration worked
      console.log('Registration succeeded.');
    }).catch((error) => {
      // registration failed
      console.log('Registration failed with ' + error);
    });
}

const enableNotificationsButton = document.getElementById('enable-notifications-button');

enableNotificationsButton.addEventListener('click', () => {

  Notification.requestPermission().then((result) => {
    console.log(result)

  }).catch((error) => {
    console.error(error)
  })
})


const createNotificationsButton = document.getElementById('create-notifications-button');

createNotificationsButton.addEventListener('click', () => {

  console.log('create notification clicked!');

  const title = 'Cool title';
  const options = {
    body: 'This is the body',
    icon: './icon.png',
    image: './pepper.png'
  }

  const notification = new Notification(title, options)
})