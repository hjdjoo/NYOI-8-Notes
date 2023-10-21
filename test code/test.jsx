function App() {
    return (
        div>
            <Welcome name='Richard' />
            <Welcome name='Dinesh' />
            <Welcome name='Gilfoyle' />

        </div>
    )
}

function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;

}

// The "props" is how we pass information from parent to child. 