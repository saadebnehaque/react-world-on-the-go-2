
const InputBox = ({ text, setText }) => {

    return (
        <div>

            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="type something...." />
        </div>
    )

}

export default InputBox;