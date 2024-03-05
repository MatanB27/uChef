import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
    params: {
        id: string
    }
};

export const generateMetadata = ({params}: Props) : Metadata => {
    return {
        title: `Id: ${params.id}`,
        description: 'nice!'
    }
}
export default function id({params}: Props) {
    if(parseInt(params.id) === 1) {
        throw new Error('Errorrr wtf are you doing????')
    }
     if(parseInt(params.id) > 1000) {
        notFound()
     }
    return <h1>id {params.id}</h1>
}