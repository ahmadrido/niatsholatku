// import { Link } from "react-router-dom"

export interface MenuProps {
    Href: string,
    Icon: string,
    Text: string,
    Color: string
}

const MenuMain = ({Href, Icon, Text, Color}: MenuProps) => {
    return (
        <div className="card flex items-center justify-center">
                <a
                  href={Href}
                className='text-xl shadow-md shadow-gray-500 p-5 text-center rounded-lg bg-gray-900 hover:bg-gray-800 hover:text-white w-full'
                >
                 <span className={Color}><i className={Icon}></i> {Text} </span>
                </a>
        </div>
    )
}

export default MenuMain