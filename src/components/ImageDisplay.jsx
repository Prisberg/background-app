import { useThisAppContext } from "../context"

export default function ImageDisplay() {
    const { imgSrc } = useThisAppContext()

    return (
        <div className="w-full h-full flex justify-center">
            {
                imgSrc ?
                    <img
                        className='object-contain w-2/4 h-full'
                        alt='generated wallpaper'
                        src={imgSrc.full
                        } />
                    : null
            }
        </div>
    )
}