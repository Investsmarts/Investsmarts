importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey:"AIzaSyDEQYPJFxQv8yFHptrTqoLHOn2L0PpgVhc",
  authDomain:"btcinvest-c0e25.firebaseapp.com",
  projectId:"btcinvest-c0e25",
  messagingSenderId:"204937458487",
  appId:"1:204937458487:web:cc27ece1249999279f60b2"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload)=>{
  console.log("🎯 Background message:",payload);
  const {title,body}=payload.notification;
  self.registration.showNotification(title,{body});
});
