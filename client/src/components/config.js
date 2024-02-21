// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'ExcitementBot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm Gemini bot you can ask food realted question here`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;