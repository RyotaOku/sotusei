'use client'
import React, { useEffect, useState } from "react";
import { database } from "../../../firebaseConfig";
import { Header } from '@/app/component/common/Header'
import { ref, onValue, push, remove } from "firebase/database";

interface Message {
    sender: string;
    recipient: string;
    text: string;
    timestamp: string;
}

export default function Chat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState("");
    const [senderName, setSenderName] = useState("ユーザーA");
    const [recipientName, setRecipientName] = useState("ユーザーB");
    const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
    const [showDetailedLogs, setShowDetailedLogs] = useState(false);
    const [showModal, setShowModal] = useState(true);

    useEffect(() => {
        const messagesRef = ref(database, "messages");

        // メッセージデータをリアルタイムで取得
        onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();
            const messagesArray = data
                ? Object.values(data).map((message) => message as Message)
                : [];
            setMessages(messagesArray);

            // コンソールログに表示する内容を更新
            const logs = messagesArray.map((msg) =>
                showDetailedLogs
                    ? `送信者: ${msg.sender} ➡️ 受信者: ${msg.recipient}\n内容: "${msg.text}"\n送信時刻: ${new Date(msg.timestamp).toLocaleString()}`
                    : `[${msg.timestamp}] ${msg.sender} -> ${msg.recipient}: "${msg.text}"`
            );
            setConsoleLogs(logs);
        });
    }, [showDetailedLogs]); // showDetailedLogs が変更されるたびに再実行

    const sendMessage = () => {
        if (inputText.trim() === "") return;

        const timestamp = new Date().toISOString(); // 送信時刻を記録
        const newMessage: Message = {
            sender: senderName,
            recipient: recipientName,
            text: inputText,
            timestamp,
        };

        const messagesRef = ref(database, "messages");
        push(messagesRef, newMessage);

        setInputText("");
    };

    const clearMessages = () => {
        const messagesRef = ref(database, "messages");
        remove(messagesRef); // Firebase からすべてのメッセージを削除
    };

    return (
        <>
            <Header />
            {/* モーダル */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg text-center">
                        <h2 className="text-2xl font-bold mb-4">このページでできること</h2>
                        <ul className="text-left text-lg mb-4 space-y-2">
                            <li>・メッセージ送受信の基本的な知識を学ぶことができます。</li>
                            <li>・実際にメッセージの送受信を試し、やりとりされている情報をコンソールで確認できます。</li>
                        </ul>
                        <button
                            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
                            onClick={() => setShowModal(false)}
                        >
                            さっそくやってみる
                        </button>
                    </div>
                </div>
            )}

            <div className="min-h-screen bg-gray-100 pt-12 flex flex-col items-center p-4">
                <h1 className="text-2xl font-bold mb-4">簡単なチャット + コンソール表示</h1>
                <div className="flex flex-wrap w-full max-w-4xl">
                    {/* チャット画面 */}
                    <div className="flex-1 bg-white shadow-lg rounded-lg p-4 mr-4">
                        <div className="mb-2">
                            <label className="block text-sm font-bold mb-1">送信者名</label>
                            <input
                                className="border rounded w-full px-2 py-1"
                                value={senderName}
                                onChange={(e) => setSenderName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-1">受信者名</label>
                            <input
                                className="border rounded w-full px-2 py-1"
                                value={recipientName}
                                onChange={(e) => setRecipientName(e.target.value)}
                            />
                        </div>
                        <div className="h-64 overflow-y-auto border rounded p-2 mb-4">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`mb-2 p-2 rounded ${message.sender === senderName
                                        ? "bg-blue-100 text-right"
                                        : "bg-gray-200 text-left"
                                        }`}
                                >
                                    <strong>{message.sender}:</strong> {message.text}
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center">
                            <input
                                className="border rounded w-full px-2 py-1 mr-2"
                                placeholder="メッセージを入力..."
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                            />
                            <button
                                className="bg-blue-500 whitespace-nowrap text-white px-4 py-1 rounded hover:bg-blue-600"
                                onClick={sendMessage}
                            >
                                送信
                            </button>
                        </div>
                        <button
                            className="bg-red-500 text-white px-4 py-1 rounded mt-4 hover:bg-red-600 w-full"
                            onClick={clearMessages}
                        >
                            全メッセージ履歴を削除
                        </button>
                    </div>

                    {/* コンソール画面 */}
                    <div className="flex-1 bg-black text-green-500 rounded-lg p-4 shadow-lg relative">
                        <h2 className="text-lg font-bold text-white mb-4">仮想コンソール</h2>
                        <div className="text-sm font-mono h-72 overflow-y-auto">
                            {consoleLogs.length > 0 ? (
                                consoleLogs.map((log, index) => (
                                    <div key={index} className="mb-2">
                                        {log}
                                        {showDetailedLogs && (
                                            <p className="text-xs text-gray-400 mt-1">
                                                ※このメッセージは送信者が受信者に指定したテキストを送信した結果です。
                                            </p>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-400">ログを読み込んでいます...</p>
                            )}
                        </div>
                        <button
                            className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                            onClick={() => setShowDetailedLogs(!showDetailedLogs)}
                        >
                            {showDetailedLogs ? "元に戻す" : "もっとわかりやすく！"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};