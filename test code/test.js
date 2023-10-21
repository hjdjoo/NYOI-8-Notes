function App() {

    return (
        <div>
            <Welcome name='Richard' />
            <Welcome name='Dinesh' />
            <Welcome name='Gilfoyle' />

        </div>

    )
}

function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;

}