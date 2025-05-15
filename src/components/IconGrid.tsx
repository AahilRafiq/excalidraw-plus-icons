import { DynamicIcon } from 'lucide-react/dynamic'
import { useState, useEffect } from 'react';
import { dynamicIconImports } from 'lucide-react/dynamic';
import toast from "react-simple-toasts";
import { PaintbrushVertical } from 'lucide-react';

const colors = ["red", "green", "orange", "blue", "purple", "gray", "none"]

export default function() {

    const [searchQuery, setSearchQuery] = useState("")
    const iconNamesList = Object.keys(dynamicIconImports)
    const [icons, setIcons] = useState<string[]>(
        iconNamesList.slice(0,10)
    )
    const [currColor, setCurrColor] = useState("none")

    function handleIconClick(e: React.MouseEvent<SVGSVGElement>) {
        const svgString = e.currentTarget.outerHTML;
        navigator.clipboard.writeText(svgString).then(() => {
            console.log("SVG copied to clipboard");
        }
        ).catch((err) => {
            console.error("Could not copy text: ", err);
        }
        );

        toast('Copied to Clipboard!')
    }

    useEffect(() => {
        if(searchQuery.length == 0) {
            setIcons(iconNamesList.slice(0,20))
            return
        }

        const filteredNames = iconNamesList
        .filter(name => {
            return name.includes(searchQuery.toLowerCase())
        })
        .slice(0, 20)

        setIcons(filteredNames)
    }, [searchQuery])


    return (
        <div className='mt-4'>
            <input onChange={e => setSearchQuery(e.target.value)} type="text" placeholder="Search Icon..." className="input w-full" />
            <h3 className='my-2'>Choose color</h3>
            <div className='flex gap-2 my-2 border border-gray-600 rounded-md p-2'>
                {colors.map(color => {
                    if(color == "none") {
                        return <PaintbrushVertical size={36} onClick={() => setCurrColor(color)}/>
                    }

                    return <PaintbrushVertical color={color} size={36} onClick={() => setCurrColor(color)}/>
                })}
            </div>
            <div className='flex flex-wrap gap-4 mt-4'>
                {icons.map(iconName => {
                    if(currColor == "none") {
                        // @ts-ignorets-ignore
                        return <DynamicIcon className='border-gray-600 border-1 p-2 rounded-md'  onClick={handleIconClick} name={iconName} size={48} />
                    }
                    // @ts-ignorets-ignore
                    return <DynamicIcon className='border-gray-600 border-1 p-2 rounded-md' color={currColor}  onClick={handleIconClick} name={iconName} size={48} />

                })}
            </div>
        </div>
    )
}