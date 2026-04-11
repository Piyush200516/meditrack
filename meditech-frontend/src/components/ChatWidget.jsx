import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Mic } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hi! I'm MediTech AI. How can I help with your health today?" }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages(prev => [...prev, { role: 'user', text: input }]);
      setInput('');
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'ai', text: "Thanks for sharing! Based on your symptoms, I recommend consulting a doctor for a full checkup." }]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full shadow-2xl border-4 border-white/50 backdrop-blur-xl flex items-center justify-center text-white hover:shadow-3xl transition-all duration-300"
        aria-label="AI Chat"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 100 }}
            className="fixed bottom-24 right-6 z-40 w-96 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden max-h-96"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200/50 bg-gradient-to-r from-blue-500/10 to-indigo-500/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">MediTech AI</h3>
                    <p className="text-sm text-blue-600">Online now</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-64 p-4 overflow-y-auto space-y-4 mb-4">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg' 
                      : 'bg-gray-100/50 backdrop-blur-sm border border-gray-200/50'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200/50 bg-white/50">
              <div className="flex items-center gap-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Describe your symptoms..."
                  className="flex-1 px-4 py-3 rounded-2xl border-2 border-gray-200/50 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200/50 bg-white/50 backdrop-blur-sm"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim()}
                  className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 hover:from-blue-600 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
                <button className="p-3 hover:bg-gray-100 rounded-2xl transition-colors">
                  <Mic className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;

