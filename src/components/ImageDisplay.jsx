import { useThisAppContext } from "../context"

export default function ImageDisplay() {
    const { imgSrc } = useThisAppContext()

    return (
        <>
            {
                imgSrc ?
                    <img
                        className='object-contain w-full h-screen'
                        alt='generated wallpaper'
                        src={imgSrc.full
                        } />
                    : null
            }
        </>
    )
}