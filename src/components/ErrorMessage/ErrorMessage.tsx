interface Props {
    message: string;
}

function ErrorMessage({ message }: Props) {
    return (
        <div style={{ color: 'red', marginTop: '10px' }}>
            {message}
        </div>
    );
}

export default ErrorMessage;
