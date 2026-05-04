import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User, Bot, Sparkles, Minus, Maximize2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const GEMINI_MODEL = 'gemini-2.5-flash';

/** Offline / fallback replies when the API key is missing or the request fails. */
function getFallbackReply(userText: string): string | null {
    const t = userText.trim().toLowerCase();
    if (!t) return null;

    if (t.includes('project') || t === 'view projects') {
        return [
            'Here is a quick overview of Suvam’s projects:',
            '',
            '1. Travel Itinerary Planner (Utkal Darshan) — full-stack app with Spring Boot, React, and MySQL to plan and manage travel.',
            '2. Fake News Detection — Python, NLP, and Flask to classify news credibility.',
            '',
            'Scroll the main page for full case studies and links.',
        ].join('\n');
    }

    if (t.includes('skill') || t.includes('tech') || t.includes('stack')) {
        return [
            'Suvam focuses on full-stack delivery. Core skills:',
            '',
            '• Languages & frameworks: Java, Spring Boot, React, JavaScript, HTML, CSS',
            '• Data: MySQL',
            '• ML / tools: Python, NLP, Flask',
            '',
            'He also cares strongly about polished UI/UX and maintainable code.',
        ].join('\n');
    }

    if (t.includes('contact') || t.includes('email') || t.includes('reach')) {
        return [
            'You can reach Suvam via the Contact section on this site (form + email).',
            'Email: suvambehera184@gmail.com',
            'GitHub: https://github.com/suvambehera01',
            'Instagram: https://www.instagram.com/_.suvu._10',
        ].join('\n');
    }

    if (t.includes('hello') || t.includes('hi') || t === 'hey') {
        return "Hi! Ask about Suvam’s projects, skills, or contact details — or use the quick chips below.";
    }

    return null;
}

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hi! I'm Suvam's AI assistant. Ask me anything about his projects, skills, or experience!",
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const systemInstruction = `
        You are Suvam Behera's AI Assistant. Your goal is to help visitors learn about Suvam's work, skills, and background.
        
        Suvam Behera's Info:
        - Role: Full Stack Developer
        - Location: Bhubaneswar, Odisha
        - Current Pursuit: MCA at SOA University
        - Education: Bachelor of Computer Science from Utkal University
        - Expertise: Java, Spring Boot, React, MySQL, HTML, CSS, JavaScript
        
        Projects:
        1. Travel Itinerary Planner (Utkal Darshan): 
           - Full-stack web application 
           - Tech: Spring Boot, React, MySQL
           - Purpose: Plan and manage travel details.
        
        2. Fake News Detection System:
           - Machine Learning project
           - Tech: Python, NLP, Flask
           - Purpose: Detect fake news accurately.
           
        Experience & Activities:
        - Active participant in hackathons at ITER College.
        - Passionate about high-end UI/UX and clean code.
        
        Contact:
        - Email: suvambehera184@gmail.com
        - Instagram: https://www.instagram.com/_.suvu._10
        - GitHub: https://github.com/suvambehera01
        - Resume: Direct them to the contact section to request it.
        
        Guidelines:
        - Be professional, helpful, and concise.
        - If asked about something outside Suvam's professional scope, politely redirect to his skills or projects.
        - Always encourage collaboration.
    `;

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSendMessage = async (text: string) => {
        if (!text.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        const apiKey = (process.env.GEMINI_API_KEY ?? '').trim();
        const fallback = getFallbackReply(text);

        if (!apiKey) {
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text:
                    fallback ??
                    [
                        'Gemini is not configured yet (no API key).',
                        '',
                        'Add GEMINI_API_KEY to a `.env` file in the project root (see `.env.example`), restart `npm run dev`, then try again.',
                        '',
                        'Until then, try the chips: View Projects, Skills, or Contact — those work offline.',
                    ].join('\n'),
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
            return;
        }

        try {
            const ai = new GoogleGenAI({ apiKey });

            // Skip the static welcome so history does not start with a lone model turn
            const historySource = messages.filter((m) => m.id !== '1');
            const history = historySource.slice(-5).map((m) => ({
                role: m.sender === 'user' ? ('user' as const) : ('model' as const),
                parts: [{ text: m.text }],
            }));

            const response = await ai.models.generateContent({
                model: GEMINI_MODEL,
                contents: [...history, { role: 'user' as const, parts: [{ text }] }],
                config: {
                    systemInstruction,
                    temperature: 0.7,
                },
            });

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: response.text || "I'm sorry, I couldn't process that. Please try again.",
                sender: 'bot',
                timestamp: new Date(),
            };

            setMessages(prev => [...prev, botMsg]);
        } catch (error) {
            console.error('Chatbot Error:', error);
            const errorMsg: Message = {
                id: (Date.now() + 1).toString(),
                text:
                    fallback ??
                    [
                        'The AI request failed (network, quota, or API error).',
                        'Double-check GEMINI_API_KEY in `.env` and that billing/quotas are OK in Google AI Studio.',
                        '',
                        'You can still reach Suvam via the Contact section or email: suvambehera184@gmail.com',
                    ].join('\n'),
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsTyping(false);
        }
    };

    const suggestions = ["View Projects", "Skills", "Contact"];

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="w-[380px] h-[550px] glass rounded-[2rem] shadow-2xl border border-white/10 flex flex-col overflow-hidden mb-4"
                    >
                        {/* Header */}
                        <div className="p-6 bg-gradient-to-tr from-brand-accent/20 to-neon-pink/20 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center border border-brand-accent/30">
                                    <Sparkles className="w-5 h-5 text-brand-accent" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-serif italic text-white flex items-center gap-2">
                                        Suvam AI Assistant
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    </h3>
                                    <p className="text-[10px] text-gray-400 font-light tracking-wide">Ready for transmission</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-full hover:bg-white/5 flex items-center justify-center transition-colors text-white/40 hover:text-white"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide" ref={scrollRef}>
                            {messages.map(msg => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: msg.sender === 'user' ? 10 : -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[80%] p-4 rounded-2xl text-sm font-light leading-relaxed ${
                                        msg.sender === 'user' 
                                            ? 'bg-white text-black rounded-tr-none' 
                                            : 'glass border-white/5 text-gray-300 rounded-tl-none'
                                    }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="glass border-white/5 p-4 rounded-2xl rounded-tl-none flex gap-1">
                                        <span className="w-1 h-1 bg-brand-accent rounded-full animate-bounce"></span>
                                        <span className="w-1 h-1 bg-brand-accent rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                        <span className="w-1 h-1 bg-brand-accent rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Suggestions */}
                        {!isTyping && messages.length < 5 && (
                            <div className="px-6 pb-2 flex flex-wrap gap-2">
                                {suggestions.map(s => (
                                    <button 
                                        key={s}
                                        onClick={() => handleSendMessage(s)}
                                        className="text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 glass rounded-full hover:bg-brand-accent hover:text-white transition-all border-white/5"
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input Area */}
                        <form 
                            onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }}
                            className="p-6 pt-2 border-t border-white/5 flex gap-3"
                        >
                            <input 
                                type="text" 
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-brand-accent transition-colors text-white"
                            />
                            <button 
                                disabled={!inputValue.trim() || isTyping}
                                className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center hover:bg-brand-accent hover:text-white disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black transition-all shadow-lg shadow-brand-accent/10"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 overflow-hidden relative ${
                    isOpen ? 'bg-white text-black rotate-90' : 'bg-brand-accent text-white shadow-brand-accent/40'
                }`}
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent to-neon-pink opacity-0 hover:opacity-100 transition-opacity"></div>
                {isOpen ? <X className="w-6 h-6 relative z-10" /> : <MessageSquare className="w-6 h-6 relative z-10" />}
            </motion.button>
        </div>
    );
};

export default Chatbot;
