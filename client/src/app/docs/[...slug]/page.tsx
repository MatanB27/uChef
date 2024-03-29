type paramsType = {
    slug: string
};
export default function Docs({params} : {params: paramsType}) {
    if(params.slug.length === 1) {
        return <h1>Feature about {params.slug[0]}</h1>
    }
    else {
        return <h1>Other features</h1>
    }
}