<script setup>
import { ref } from 'vue'

const messages = ref([
  { role: 'assistant', content: '¡Hola! Soy tu asistente de IA. ¿En qué puedo ayudarte con la presentación?' }
])
const inputMessage = ref('')
const isLoading = ref(false)

async function sendMessage() {
  if (!inputMessage.value.trim()) return
  
  const userMessage = { role: 'user', content: inputMessage.value }
  messages.value.push(userMessage)
  
  const currentInput = inputMessage.value
  inputMessage.value = ''
  isLoading.value = true
  
  try {
    console.log('Enviando mensaje al servidor...');
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: messages.value
      })
    });
    
    console.log('Respuesta recibida:', response.status, response.statusText);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error en la respuesta:', errorText);
      throw new Error(`Error HTTP ${response.status}: ${errorText}`);
    }
    
    const data = await response.json();
    console.log('Datos recibidos:', data);
    messages.value.push(data);
  } catch (error) {
    console.error('Error al conectar con el servidor:', error);
    messages.value.push({ 
      role: 'assistant', 
      content: `Error al conectar con el servidor: ${error.message}. Asegúrate de que el servidor backend está en ejecución.` 
    });
  } finally {
    isLoading.value = false;
  }
}

function handleKeyPress(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    sendMessage()
  }
}
</script>

<template>
  <div class="chat-container">
    <div class="messages">
      <div v-for="(message, index) in messages" :key="index" :class="['message', message.role]">
        <div class="message-content">{{ message.content }}</div>
      </div>
      <div v-if="isLoading" class="message assistant">
        <div class="message-content">Pensando...</div>
      </div>
    </div>
    <div class="input-area">
      <textarea
        v-model="inputMessage"
        @keydown="handleKeyPress"
        placeholder="Escribe tu pregunta..."
        :disabled="isLoading"
      ></textarea>
      <button @click="sendMessage" :disabled="isLoading || !inputMessage.trim()">
        Enviar
      </button>
    </div>
  </div>
</template>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: system-ui, -apple-system, sans-serif;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.message {
  max-width: 80%;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  line-height: 1.4;
}

.message.user {
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  border-bottom-right-radius: 0.25rem;
}

.message.assistant {
  align-self: flex-start;
  background-color: #f3f4f6;
  color: #111827;
  border-bottom-left-radius: 0.25rem;
}

.input-area {
  display: flex;
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
  gap: 0.5rem;
}

textarea {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  resize: none;
  min-height: 44px;
  max-height: 150px;
  font-family: inherit;
}

button {
  padding: 0 1.25rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
}

button:not(:disabled):hover {
  background-color: #2563eb;
}
</style>
