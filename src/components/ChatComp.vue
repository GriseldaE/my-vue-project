<template>
    <div>
      <div v-for="message in messages" :key="message.id">
        <p :class="{ 'sent-message': message.sent, 'received-message': !message.sent }">
          {{ message.text }}
        </p>
      </div>
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Escribe un mensaje..." />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        messages: [
          { id: 1, text: 'Hola', sent: true },
          { id: 2, text: '¡Hola! ¿Cómo estás?', sent: false }
        ],
        newMessage: ''
      };
    },
    methods: {
      sendMessage() {
        if (this.newMessage.trim() !== '') {
          this.messages.push({ id: this.messages.length + 1, text: this.newMessage, sent: true });
          this.newMessage = '';
          // Aquí podrías agregar la lógica para enviar el mensaje a través de una red social.
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .sent-message {
    background-color: rgb(191, 0, 255);
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin: 5px 0;
  }
  
  .received-message {
    background-color: #ddd;
    padding: 10px;
    border-radius: 5px;
    margin: 5px 0;
  }
  </style>
  