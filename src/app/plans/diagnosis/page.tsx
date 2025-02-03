'use client'

import { useState } from "react";
import { plans } from "../plans";
import { questions } from './data'
import { Header } from '@/app/component/common/Header'

export default function DiagnosisPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0); // 現在の質問番号
    const [score, setScore] = useState(0); // 合計スコア
    const [isComplete, setIsComplete] = useState(false); // 診断が完了したか
    const [selectedPlan, setSelectedPlan] = useState<{ company: string; plan: string; link: string; price: string; voice: string; data: string; } | null>(null); // 最適プラン
    const [recommendedPlans, setRecommendedPlans] = useState<{ company: string; plan: string; link: string; price: string; voice: string; data: string; }[]>([]); // 次におすすめのプラン

    const handleAnswer = (selectedScore: number) => {
        const newScore = score + selectedScore; // 合計スコアを計算
        setScore(newScore); // スコアを更新
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            calculatePlans(newScore); // 最新のスコアを渡す
            setIsComplete(true);
        }
    };

    const calculatePlans = (finalScore: number) => {
        // スコアに基づいてプランを並べ替え（スコアとの差が小さい順）
        const sortedPlans = plans
            .map((plan) => ({
                ...plan,
                difference: Math.abs(plan.score - finalScore), // スコアとの差を計算
            }))
            .sort((a, b) => a.difference - b.difference);

        // 最適なプランを取得
        setSelectedPlan(sortedPlans[0]);

        // 次におすすめのプランを3つ取得
        setRecommendedPlans(sortedPlans.slice(1, 4));
    };

    const progressPercentage = Math.round(((currentQuestion + 1) / questions.length) * 100);

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
                {isComplete ? (
                    <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full flex">
                        {/* 左側: 一番おすすめのプラン */}
                        <div className="flex-1 border-r border-gray-300 pr-6">
                            <h2 className="text-xl font-bold mb-4 text-center">診断結果</h2>
                            {selectedPlan ? (
                                <div className="mb-6 text-center h-full flex flex-col justify-center pb-24">
                                    <p className="mb-4">あなたにピッタリのプランは:</p>
                                    <h3 className="text-2xl font-bold text-blue-600 mb-2">{selectedPlan.company}</h3>
                                    <p className="text-lg font-semibold text-gray-700 mb-2">{selectedPlan.plan}</p>
                                    <p className="text-lg text-gray-800 mb-4">{selectedPlan.price}</p>
                                    <p className="text-sm text-gray-600 mb-6">{selectedPlan.data} | {selectedPlan.voice}</p>
                                    <a
                                        href={selectedPlan.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600"
                                    >
                                        詳しく見る
                                    </a>
                                </div>
                            ) : (
                                <p className="text-gray-700">適切なプランが見つかりませんでした。</p>
                            )}
                        </div>

                        {/* 右側: 次におすすめのプラン */}
                        <div className="flex-1 pl-6">
                            <h3 className="text-lg font-bold mb-4 text-center">次におすすめのプラン</h3>
                            <div className="space-y-4">
                                {recommendedPlans.map((plan, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col text-center"
                                    >
                                        <h4 className="text-md font-semibold text-blue-600 mb-1">{plan.company}</h4>
                                        <p className="text-sm text-gray-700 mb-2">{plan.plan}</p>
                                        <p className="text-sm text-gray-800 mb-2">{plan.price}</p>
                                        <p className="text-xs text-gray-600 mb-2">{plan.data} | {plan.voice}</p>
                                        <a
                                            href={plan.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 text-sm hover:underline"
                                        >
                                            詳しく見る
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">

                        <div className="relative w-full h-4 bg-gray-300 rounded-full mb-6">
                            <div
                                className="absolute top-0 left-0 h-4 bg-blue-500 rounded-full transition-all duration-500 ease-in-out"
                                style={{ width: `${progressPercentage}%` }}
                            ></div>
                        </div>
                        <h2 className="text-xl font-bold mb-6 text-center">{questions[currentQuestion].question}</h2>
                        <div className="grid grid-cols-3 gap-4">
                            {questions[currentQuestion].options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(option.score)}
                                    className="flex flex-col items-center bg-blue-100 hover:bg-blue-200 p-4 rounded-lg shadow-md"
                                >
                                    <div className="text-2xl mb-2">{option.icon}</div>
                                    <span className="text-sm font-semibold text-center">{option.text}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>

    );
};