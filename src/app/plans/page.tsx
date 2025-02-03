'use client'
import { Header } from '@/app/component/common/Header'
import Image from 'next/image';
import { plans, otherSimCompanies, cheapSimPlans } from './plans'

export default function plansExplain() {

    return (
        <div className={`px-12 pt-12 relative max-w-screen-xl mx-auto`}>
            <Header />
            <h2 className='text-4xl font-bold mt-12 mb-4'>通信プランとは？最適解を見つけよう</h2>
            <p className="mb-24">通信プランとは、携帯電話やスマートフォンなどの通信サービスを利用する際に、期間ごとに支払う料金の選択肢のことです。
                通信プランには、データ通信容量無制限のプランや、段階的にデータ通信容量が区切られたプランなどがあります。
                通信プランを選ぶ際は、自分がどの程度のデータ通信容量を利用するのかを考慮して、無駄のないプランを選択しましょう。</p>
            <p>

                <a href="#plan-diagnosis" className="bg-blue-500 text-white mx-auto block w-fit mb-12 px-6 py-2 rounded-full  hover:bg-blue-600">文章をすっ飛ばして診断する</a>

                <Image src="/images/image.png" alt="Plans" width={1200} height={800} className="mx-auto" />
            </p>
            <div className="bg-white rounded-lg p-4 mt-6 max-w-screen-xl mx-auto">
                <h2 className="text-xl font-bold mb-4">通信プランって何？どうして必要なの？</h2>
                <p className="text-gray-700 mb-4">
                    通信プランは、スマホやタブレットをインターネットにつなげるための「使い方のルール」や「お金の計算方法」のようなものです。インターネットを使うためには、携帯電話会社（楽天モバイル、au、SoftBank、docomo など）と契約する必要があります。契約すると、その会社の電波を使って、動画を見たり、友達とメッセージを送ったり、ゲームをしたりできます。
                </p>

                <h3 className="text-lg font-bold mb-2">通信プランの仕組み</h3>
                <p className="text-gray-700 mb-4">
                    通信プランは主に「データ容量」と「通話のルール」でできています。例えば：
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="text-gray-700">データ容量: 1GB、20GB、無制限など、インターネットをどれくらい使えるかを決めるもの。</li>
                    <li className="text-gray-700">通話: 通話が無料なのか、一定時間だけ無料なのかを決めるもの。</li>
                </ul>
                <p className="text-gray-700 mb-4">
                    例えば、たくさん動画を見る人は「無制限」のプランが向いているし、あまりスマホを使わない人は「少ないデータ容量」のプランを選ぶとお金を節約できます。
                </p>

                <h3 className="text-lg font-bold mb-2">なぜ通信プランが必要なの？</h3>
                <p className="text-gray-700 mb-4">
                    通信プランがないと、スマホはただの「ゲーム機」や「カメラ」になってしまいます。インターネットにつなげることで、スマホは「友達とつながる道具」や「調べ物ができる図書館」になります。でも、インターネットを使うには電波を送る会社（携帯電話会社）にお金を払う必要があります。この「お金の支払い方」を決めるのが通信プランです。
                </p>

                <h3 className="text-lg font-bold mb-2">通信プランの選び方</h3>
                <p className="text-gray-700 mb-4">
                    自分に合った通信プランを選ぶのはとても大事です。例えば：
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="text-gray-700">よく家でWi-Fiを使う人: データ容量が少ないプランでOK。</li>
                    <li className="text-gray-700">外で動画をたくさん見る人: 無制限プランがオススメ。</li>
                    <li className="text-gray-700">通話をたくさんする人: 無料通話がついているプランを選ぶ。</li>
                </ul>
                <p className="text-gray-700 mb-4">
                    プランを選ぶときは、「自分がスマホで何をしたいのか」をよく考えることが大切です。
                </p>

                <h3 className="text-lg font-bold mb-2">まとめ</h3>
                <p className="text-gray-700">
                    通信プランは、スマホをインターネットにつなげるために欠かせないものです。自分の使い方に合ったプランを選ぶことで、お金を節約しながら快適にスマホを使うことができます。まずは、自分がどんな使い方をするのか考えてみましょう！
                </p>
            </div>


            <div className="bg-gray-100 py-10">
                <div className="container mx-auto p-4">
                    <h1 className="text-2xl font-bold text-center mb-6">通信プラン比較表</h1>
                    <p className="font-bold text-xl mb-6">まずは大手4社から！</p>
                    <table className="table-auto w-full bg-white shadow-lg rounded-lg">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2 text-left text-sm font-bold text-gray-700">
                                    会社名
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-bold text-gray-700">
                                    プラン名
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-bold text-gray-700">
                                    月額料金
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-bold text-gray-700">
                                    データ容量
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-bold text-gray-700">
                                    通話サービス
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-bold text-gray-700">
                                    リンク
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {plans.map((plan, index) => (
                                <tr
                                    key={index}
                                    className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                        } hover:bg-gray-100`}
                                >
                                    <td className="border px-4 py-2 text-gray-700">{plan.company}</td>
                                    <td className="border px-4 py-2 text-gray-700">{plan.plan}</td>
                                    <td className="border px-4 py-2 text-gray-700">{plan.price}</td>
                                    <td className="border px-4 py-2 text-gray-700">{plan.data}</td>
                                    <td className="border px-4 py-2 text-gray-700">{plan.voice}</td>
                                    <td className="border px-4 py-2 text-gray-700">
                                        <a href={plan.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            公式サイト
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <p className="font-bold text-xl mb-6 mt-24">契約者数順格安SIM8社！</p>
                    <table className="table-auto w-full bg-white shadow-lg rounded-lg">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2 text-left text-sm font-bold text-gray-700">会社名</th>
                                <th className="px-4 py-2 text-left text-sm font-bold text-gray-700">プラン名</th>
                                <th className="px-4 py-2 text-left text-sm font-bold text-gray-700">月額料金</th>
                                <th className="px-4 py-2 text-left text-sm font-bold text-gray-700">データ容量</th>
                                <th className="px-4 py-2 text-left text-sm font-bold text-gray-700">通話サービス</th>
                                <th className="px-4 py-2 text-left text-sm font-bold text-gray-700">リンク</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cheapSimPlans.map((plan, index) => (
                                <tr
                                    key={index}
                                    className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}
                                >
                                    <td className="border px-4 py-2 text-gray-700">{plan.company}</td>
                                    <td className="border px-4 py-2 text-gray-700">{plan.plan}</td>
                                    <td className="border px-4 py-2 text-gray-700">{plan.price}</td>
                                    <td className="border px-4 py-2 text-gray-700">{plan.data}</td>
                                    <td className="border px-4 py-2 text-gray-700">{plan.voice}</td>
                                    <td className="border px-4 py-2 text-gray-700">
                                        <a href={plan.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            公式サイト
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <p className="font-bold text-xl mb-6 mt-24">その他の格安SIM</p>

                    <table className="table-auto">
                        <tbody>
                            {otherSimCompanies.map((sim, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="px-2 py-1 text-gray-600">{sim.company}</td>
                                    <td className="px-2 py-1 text-blue-500">
                                        <a href={sim.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            公式サイト
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="text-xs mt-12">総務省策定、通信事業の競争を促進し、消費者利益を保護するための 電気通信分野における競争政策 に基づく表示。</p>
                </div>
            </div>


            <div className="bg-white rounded-lg p-4 mt-6">
                <h2 className="text-xl font-bold mb-4">プランが多すぎて迷っちゃう？</h2>
                <p className="text-gray-700 mb-4">
                    今の時代、スマホの通信プランはたくさんあります！楽天モバイルやau、SoftBank、docomoだけでなく、格安SIMと呼ばれる会社もたくさんあります。
                    プランの料金、データ容量、通話サービスなどがそれぞれ違うので、どれを選べばいいのか迷っちゃうことがあるかもしれません。
                </p>

                <h3 className="text-lg font-bold mb-2">どうして迷うの？</h3>
                <p className="text-gray-700 mb-4">
                    それぞれのプランには違う特徴があります。例えば…
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="text-gray-700">安いけどデータ容量が少ないプラン</li>
                    <li className="text-gray-700">データ無制限だけど月額料金が高いプラン</li>
                    <li className="text-gray-700">家族で契約するとお得になるプラン</li>
                </ul>
                <p className="text-gray-700 mb-4">
                    このように、どのプランが自分に合っているのかを考えるのは難しいこともあります。
                </p>

                <h3 className="text-lg font-bold mb-2">だからこそ、最適プランを見つけよう！</h3>
                <p className="text-gray-700 mb-4">
                    迷ったり考えたりするのは大変だよね。でも大丈夫！ここにあるボタンをクリックすれば、いくつかの質問に答えるだけで、自分にピッタリの通信プランを見つけられるよ！
                    簡単で楽しいから試してみてね！
                </p>

                <div className="text-center pb-12 mt-12" id="plan-diagnosis">
                    <button
                        className="bg-blue-500 text-white px-6 py-2 rounded-full text-lg font-bold hover:bg-blue-600"
                        onClick={() => { window.location.href = '/plans/diagnosis' }} // 実際には診断ページへの遷移処理を記載
                    >
                        最適プランを見つける！
                    </button>
                </div>
            </div>

        </div>
    );
};