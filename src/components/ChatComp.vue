<template>
  <div class="chat-container">
    <div class="chat-messages">
      <div v-for="message in messages" :key="message.id">
        <p :class="{ 'sent-message': message.sent, 'received-message': !message.sent }">
          {{ message.text }}
        </p>
      </div>
    </div>
    <div class="chat-input">
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Escribe un mensaje..." />
    </div>
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
        // Agrega la lógica para enviar el mensaje a través de una red social.
      }
    }
  }
};
</script>

<style scoped>
.chat-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.chat-messages {
  max-height: 200px;
  overflow-y: auto;
}

.sent-message {
  background-color: rgb(191, 0, 255);
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin: 5px 10px;
}

.received-message {
  background-color: #ddd;
  padding: 10px;
  border-radius: 5px;
  margin: 5px 10px;
}

.chat-input {
  padding: 10px;
  border-top: 1px solid #ccc;
}
</style>
