export default function Selection() {

    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <div>
                <input name='orientation' type="radio" />
                <label htmlFor="orientation">Landscape</label>
            </div>
            <div>
                <input name='orientation' type="radio" />
                <label htmlFor="orientation">Portrait</label>
            </div>
        </div>
    )
}