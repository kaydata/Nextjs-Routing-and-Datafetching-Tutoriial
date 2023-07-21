export default function AboutWithId({params}) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1> This is the about with ID: {params.id}</h1>
        </div>
    )
}