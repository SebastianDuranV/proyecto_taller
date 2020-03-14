import { useRouter } from "next/router";

export default () => {
    const {  query: { label } } = useRouter();
}