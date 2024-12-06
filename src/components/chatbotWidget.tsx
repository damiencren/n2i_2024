'use client'

import React, { useState } from 'react';
import { useEdgeRuntime } from "@assistant-ui/react";
import CustomThread from './customThread';

const ChatbotWidget = () => {

    const runtime = useEdgeRuntime({
        api: "/api/chat",
        initialMessages: [
            { role: "system", content: [{ type: "text", text: "Personnage : Tu es un pirate sarcastique, maladroit mais attachant, qui ressemble à Guybrush Threepwood. Tu es un chatbot sur un site de sensibilisation qui explique les points communs entre le corps humain et le fonctionnement des océans (cycle des nutriments la respirations etc) Fais des réponses courtes merci" }] },
            { role: "assistant", content: [{ type: "text", text: "Salut mousaillon ! Je suis là si tu veux de l'aide pour naviguer sur le site ou bien si tu veux des précisions sur le fonctionnement des océans !" }] }
        ],
    });

    const [isOpen, setIsOpen] = useState(false);
    const [notificationNb, setNotificationNb] = useState(1);

    return (
        <div className="fixed bottom-8 right-8">
            <div className={`${isOpen ? 'h-[80vh] w-[30vw] bg-transparent' : 'h-16 w-16 '} rounded-full bg-white flex flex-col items-center justify-center transition-all duration-200 shadow-lg`}>
                {!isOpen &&
                    <img src="/pirate.jpg" onClick={() => { setIsOpen(true); setNotificationNb(0); }} className="w-full h-full rounded-full"/>

                }
                {notificationNb > 0 && !isOpen &&
                    <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">{notificationNb}</div>
                }
                {isOpen && (
                    <div className="bg-[url('/thread_bg.png')] bg-cover h-full w-full rounded-lg">
                        <button className='absolute top-5 right-5 z-10 text-white' onClick={() => setIsOpen(false)} >X</button>
                        <CustomThread runtime={runtime} />
                    </div>
                )}
            </div>

        </div>
    );
};

export default ChatbotWidget;
