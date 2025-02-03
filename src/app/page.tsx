'use client'
import { Header } from '@/app/component/common/Header'
import { Card } from '@/app/component/common/Card'
import Image from 'next/image'

export default function StartPage() {

  return (
    <div className={`px-12 pt-12 relative max-w-screen-xl mx-auto`}>
      <Header />

      <h2 className='text-4xl font-bold mt-12 mb-4'>ITリテラシー向上サービス一覧</h2>
      <p>このサービスは、情報格差を解消し、現役世代やこどもたちがデジタル社会で自立できるよう支援することを目的としています。今後のIT社会の中枢を担う、若年層が適切な選択をできるITリテラシーを育てる支援サービスを目指します。</p>

      <h2 className='text-4xl font-bold mt-24 mb-4'>各種お手続き</h2>

      <p>
        <Image src={'/images/image2.png'} alt='各種手続き' width={1000} height={800} className='mx-auto mt-12' />
      </p>


      <h2 className='text-4xl font-bold mt-24 mb-4'>子ども向けサービス</h2>
      <p></p>

      <div>

        <div className="container mx-auto py-10 flex justify-between items-start">
          <div onClick={() => { window.location.href = '/chat' }} className="cursor-pointer">
            <Card
              title="スマホについて学ぼう - 遠くでも会話する技術"
              content={[
                '僕らが遠くに居ても会話できるのはどうしてだろう？',
                'このページでは、会話の際の通信の中身を実際に見てみることができます。',
              ]}
            />
          </div>
          <div onClick={() => { window.location.href = '/plans' }} className="cursor-pointer">
            <Card
              title="スマホについて学ぼう - 通信プランの契約"
              content={[
                '僕らが遠くに居ても会話できるのはどうしてだろう？',
                'このページでは、会話の際の通信の中身を実際に見てみることができます。',
              ]}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
