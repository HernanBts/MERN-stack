import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className='bg-zinc-800 flex justify-between px-10 py-2'>
            <Link to="/" className='text-xl text-white font-bold'>React with mySql</Link>
            <ul className='flex text-center gap-4 text-white'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/create">Create task</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar