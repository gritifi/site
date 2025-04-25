import ErrorMessage from "./error-message";

type InputProps = {
    name: string;
    label: string;
    className?: string;
    type?: 'text' | 'textarea';
    error?: string[];
    defaultValue: string;
}

export default function Input({ name, label, className, type = 'text', error, defaultValue }: Readonly<InputProps>) {
    const style = `border-3 rounded-2xl outline-0 ${className} font-body text-stone-900 font-bolder`;
    const fontSize = 'clamp(0.75rem, 1vw, 1.25rem)';
    const labelColor = error ? 'text-red-600' : 'text-stone-900';

    return (
        <div className="flex flex-col text-stone-900 w-full">
            <label htmlFor={name} className={`font-bold ${labelColor} pl-2`}
                style={{
                    fontSize: 'clamp(0.75rem, 1vw, 1.25rem)',
                }}
            >
                {label}
            </label>
            {type === 'textarea' ? (
                <textarea
                    className={`${style} p-2`} name={name} rows={6} cols={35}
                    defaultValue={defaultValue}
                    style={{
                        fontSize,
                    }}
                />
            ) : (
                <input
                    className={`${style} px-2 py-4`}
                    type={type}
                    name={name}
                    defaultValue={defaultValue}
                    style={{
                        fontSize,
                        height: '3.5em',
                    }}
                />
            )}

            {error && (
                <ErrorMessage error={error} className="text-red-600 pl-2 pt-1" />
            )}
        </div>
    )
}