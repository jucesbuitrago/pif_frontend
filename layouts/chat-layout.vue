<script setup>
import { ref } from 'vue'
import ChatBot from '../components/ChatBot.vue'

const slideContainer = ref(null)
const isChatOpen = ref(false)

function toggleChat() {
  isChatOpen.value = !isChatOpen.value
}
</script>

<template>
  <div class="slidev-layout chat-layout">
    <div ref="slideContainer" class="slide-container">
      <slot />
    </div>
    
    <button class="chat-toggle" @click="toggleChat">
      <svg v-if="!isChatOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    </button> 
    
    <Transition name="slide-fade">
      <div v-if="isChatOpen" class="chat-sidebar">
        <button class="close-chat" @click="toggleChat" aria-label="Cerrar chat">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ChatBot />
      </div>
    </Transition>
  </div>
</template>

<style>
.chat-layout {
  display: flex;
  height: 100%;
  position: relative;
  overflow: hidden;
  /* FONDO IMAGEN */
  background: url('/assets/fondo5.png') no-repeat center center fixed;
  background-size: cover;
}

.slide-container {
  flex: 1;
  height: 100%;
  transition: all 0.3s ease;
}

.chat-sidebar {
  position: absolute;
  top: 0;
  right: 0;
  width: 350px;
  height: 100%;
  background: white;
  border-left: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  z-index: 10;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

.close-chat {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280;
  z-index: 20;
  padding: 4px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.close-chat:hover {
  background-color: #f3f4f6;
  color: #1f2937;
}

.chat-toggle {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 100;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.chat-toggle:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Ajustes para pantallas pequeñas */
@media (max-width: 768px) {
  .chat-sidebar {
    width: 100%;
  }
  
  .chat-toggle {
    bottom: 1rem;
    right: 1rem;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
}
</style>
