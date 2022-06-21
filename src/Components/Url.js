

const Url = (props) => {
    let url = '';
    const setUrl = (e) => {
        url = e.target.value;
    }
    const submitFun = (e) => {
        e.preventDefault();
        console.log(url);
    }

    return (
        <div className='form'>
        <form onSubmit={submitFun}>
            <input 
                className='url'
                type='text'
                placeholder='enter a url here'
                onChange={setUrl}
            />
            <button className='submit' type= 'submit'>Submit</button>
        </form>
        </div>
        
    );
}


export default Url;