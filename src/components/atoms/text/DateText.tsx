import { ReactNode } from "react";

const DateText = ({ children }: {
    children: ReactNode
}) => {
    // 日付フォーマット変換関数
    const formatDate = (dateString: string) => {
        if (typeof dateString !== 'string') return dateString;
        
        try {
            const date = new Date(dateString);
            // 日本時間でYYYY-MM-DD形式に変換
            const formattedDate = date.toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }).replace(/\//g, '-');
            return `${formattedDate} 公開`;
        } catch (error) {
            // パースに失敗した場合は元の文字列を返す
            return dateString.split('T')[0];
        }
    };

    return (
        <div className="pt-4 text-right text-gray-400 font-light ">
            {typeof children === 'string' ? formatDate(children) : children}
        </div>
    )
}

export default DateText