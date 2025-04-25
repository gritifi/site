export default function ErrorMessage({ error, className }:
    Readonly<{ error: string[], className?: string }>) {
    return (
        <div className={className}>
            <p
                className="text-red-600"
                style={{
                    fontSize: 'clamp(0.75rem, 1vw, 1.10rem)',
                }}
            >
                {error?.[0]}</p>
        </div>
    )
}