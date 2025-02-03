type CardProps = {
    title: string;
    content: string[];
};

export function Card({ title, content }: CardProps) {
    return (
        <div className="border border-slate-400 rounded-3xl p-6 max-w-lg">
            <h2 className="font-bold flex w-full justify-between">{title} <span>→</span></h2>
            {content.map((paragraph, index) => (
                <p key={index} className="mt-2 text-gray-700 text-[14px]">
                    {paragraph}
                </p>
            ))}
        </div>
    );
};