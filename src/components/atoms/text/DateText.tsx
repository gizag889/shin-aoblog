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
            
            // ISO形式の日付（機械読み取り用）
            const isoDate = date.toISOString().split('T')[0];
            
            return (
                <time dateTime={isoDate}>
                    公開日：{formattedDate}
                </time>
            );
        } catch  {
            // パースに失敗した場合は元の文字列を返す
            const fallbackDate = dateString.split('T')[0];
            return <time dateTime={fallbackDate}>{fallbackDate}</time>;
        }
    };

    return (
        <div className="text-right text-gray-400 font-light">
            {typeof children === 'string' ? formatDate(children) : children}
        </div>
    )
}

export default DateText