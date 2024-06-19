import { flowId } from '@/lib/constants';
import { Descope } from '@descope/nextjs-sdk';

export default function Login() {
    return (
        <Descope
            flowId={flowId}
            redirectAfterSuccess="/"
        />
    );
}